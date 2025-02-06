<script lang="ts" setup name="Line">
// 脚本
import { ref } from "vue";
import axios from "axios";

let isDialogVisible = ref(false);

let metroList = ref([]);

let getMetroInfo = async () => {
  const res = await axios.get("https://api.xverk1.com:3456/zzmetro");
  // const res = await axios.get("https://api.zzmetro.com/api/mapData");
  return res;
};

let targetMetroData = ref({});
let targetMetroStationsData = ref([]);

getMetroInfo()
  .then((res) => {
    console.log("所有线路数据", res.data.data);
    metroList.value = res.data.data;
  })
  .catch((err) => {
    console.error("请求出错:", err);
  });

function seeDetail(metroId) {
  isDialogVisible.value = true;
  let targetMetroId = metroList.value.findIndex(
    (item: any) => item.id == metroId
  );
  targetMetroData.value = metroList.value[targetMetroId];
  targetMetroStationsData.value = targetMetroData.value.stations.filter(
    (station) => "id" in station
  );

  console.log("目标线路车站数据", targetMetroStationsData.value);
  console.log("目标线路数据", targetMetroData.value);
}

let dialogScroll = ref();
function scrollToTop() {
  // console.log("ref获取元素测试", dialogScroll.value);
  dialogScroll.value.setScrollTop(0);
}
</script>

<template>
  <!-- 结构 -->
  <div class="line">
    <div class="line-list">
      <el-card v-for="metro in metroList" :id="metro.id">
        <img :src="'https://zzmetro.com' + metro.thumb" alt="" />
        <h2>{{ metro.name }}</h2>
        <el-button @click="seeDetail(metro.id)">查看详情</el-button>
      </el-card>
    </div>
  </div>
  <el-dialog
    v-model="isDialogVisible"
    title="详情信息"
    width="1200"
    align-center
    @open="scrollToTop"
  >
    <el-scrollbar
      style="height: 70vh; position: relative; padding-top: 35px"
      ref="dialogScroll"
    >
      <!-- 线路标题 -->
      <div
        style="
          /* width: 100%; */
          padding: 0.5rem 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 35px;
          box-sizing: border-box;
        "
        :style="`background-color: ${targetMetroData.color};`"
      >
        <span
          style="
            color: #fff;
            padding-left: 0.5rem;
            text-shadow: 0 0 0.25rem #000;
          "
        >
          {{ targetMetroData.name }}
        </span>
      </div>
      <!-- 运营车站&时间 -->
      <el-table border :data="targetMetroStationsData" style="width: 100%">
        <el-table-column align="center" center type="index" label="" />
        <el-table-column align="center" prop="name" label="车站名称" />
        <el-table-column
          align="center"
          prop=""
          :label="`往 ${targetMetroData.start_station} 方向`"
        >
          <el-table-column
            align="center"
            prop="first_up_time"
            label="首班车时间"
          />
          <el-table-column
            align="center"
            prop="last_up_time"
            label="末班车时间"
          />
        </el-table-column>
        <el-table-column
          align="center"
          prop=""
          :label="`往 ${targetMetroData.end_station} 方向`"
        >
          <el-table-column
            align="center"
            prop="first_down_time"
            label="首班车时间"
          />
          <el-table-column
            align="center"
            prop="last_down_time"
            label="末班车时间"
          />
        </el-table-column>
        <el-table-column align="center" label="">
          <el-button>车站详情</el-button>
        </el-table-column>
      </el-table>

      <!-- <el-table :data="targetMetroData.stations">
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
      </el-table> -->
      <!-- {{ targetMetroData }} -->
    </el-scrollbar>
  </el-dialog>
</template>

<style scoped>
/* 样式 */
.line-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card {
    width: 270px;
    height: 240px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>
