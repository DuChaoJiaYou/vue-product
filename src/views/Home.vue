<template>
  <div class="home">
    <div class="header">
      <h2>{{ title }}</h2>
    </div>
    <div class="content">
      <div class="options">
        <el-menu class="el-menu-vertical-demo" default-active="1-1" router>
          <el-submenu index="1">
            <template v-slot:title>
              <span>博客</span>
            </template>
            <el-menu-item index="1-1" :route="{ path: '/blogView' }">
              博客总览
            </el-menu-item>
            <el-menu-item index="1-2" :route="{ path: '/blogManage' }">
              博客管理
            </el-menu-item>
          </el-submenu>

          <el-menu-item index="2" :route="{ path: '/personal' }">
            个人设置
          </el-menu-item>
        </el-menu>
      </div>
      <div class="view">
        <router-view> </router-view>
      </div>
    </div>

    <!-- <el-button type="primary" plain>{{ data }}</el-button>
    <el-button type="primary" plain size="small">主要按钮</el-button> -->
  </div>
</template>

<script lang="ts">
import { ref, computed } from "@vue/composition-api";
export default {
  setup() {
    console.log();

    const data = ref<string>("HHH");
    const title = ref<string>("个人博客管理网站");
    console.log("111");
    return {
      data,
      title,
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  padding: 20px;
  width: 100%;
  height: calc(100vh);
  background-color: #fafafa;
  .header {
    height: 50px;
    width: calc(100% - 40px);
    line-height: 50px;
    text-align: center;
    background-color: #409eff;
    color: #fff;
    padding: 20px 0;
    border-radius: 5px;
    font-size: 25px;
    h2 {
      font-weight: 100;
    }
  }
  .content {
    display: flex;
    width: calc(100% - 40px - 10px - 10px);
    margin-top: 10px;
    background-color: #fff;
    padding: 10px;
    height: 600px;
    border-radius: 5px;

    .options {
      min-width: calc(200px);
    }
    .view {
      flex: 1;
      width: calc(100% - 40px - 10px - 10px - 200px);
      background-color: #f6f6f6;
      padding: 10px;
      overflow: auto;
    }
  }
}
</style>
