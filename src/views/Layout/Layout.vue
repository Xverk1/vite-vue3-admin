<script lang="ts" setup name="Layout">
// 脚本
import router from '@/router';
</script>

<template>
  <!-- 结构 -->
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <div class="aside-top">
          <RouterLink to="/">
            <img src="@/assets/logo.png" alt="" />
          </RouterLink>
        </div>
        <el-menu
          background-color="var(--xverk1-theme-color-background)"
          text-color="#fff"
          active-text-color="var(--xverk1-theme-color-primary)"
          :router="true"
          :default-active="router.currentRoute.value.path"
        >
          <el-scrollbar height="calc(100vh - 60px)">
            <el-menu-item index="/admin/home">首页 / Home</el-menu-item>
            <el-menu-item index="/admin/line">线路 / Line</el-menu-item>
            <el-menu-item index="/admin/news">新闻 / News</el-menu-item>
          </el-scrollbar>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-scrollbar height="calc(100vh - 120px)">
          <el-main>
            <RouterView />
          </el-main>
        </el-scrollbar>
        <el-footer
          >ICP备案(假装这里有个备案) | 你也可以去我的个人博客:
          <a style="color: #fff" href="https://xverk1.github.io" target="_blank"
            >https://xverk1.github.io</a
          ></el-footer
        >
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
/* 样式 */
.common-layout {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.el-aside {
  background-color: var(--xverk1-theme-color-background);
}
.aside-top {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.aside-top img {
  height: 60px;
  display: block;
}
.el-menu {
  border-right: none;
  background-color: var(--xverk1-theme-color-background);
  color: #fff;
}
.is-active {
  background-color: #000;
}
.el-header,
.el-footer {
  background-color: var(--xverk1-theme-color-background);
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
