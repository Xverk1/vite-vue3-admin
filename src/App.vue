<script lang="ts" setup name="App">
// 脚本
import { ref } from "vue";
import { ElMessageBox } from "element-plus";

let isDialogVisible = ref(false);

const handleClose = (done: () => void) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
</script>

<template>
  <!-- 结构 -->
  <div class="app">
    <el-dialog
      v-model="isDialogVisible"
      title="免责声明"
      width="500"
      :before-close="handleClose"
    >
      <span
        >此站点仅供个人学习开发调试, 与郑州地铁无关!
        <br />你也可以去我的个人博客:
        <a
          style="color: var(--el-text-color-regular)"
          href="https://xverk1.github.io"
          target="_blank"
          >https://xverk1.github.io</a
        ></span
      >
      <template #footer>
        <div class="dialog-footer">
          <!-- <el-button @click="isDialogVisible = false">Cancel</el-button> -->
          <el-button type="primary" @click="isDialogVisible = false">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
    <RouterView />
  </div>
</template>

<style scoped>
/* 样式 */
</style>
