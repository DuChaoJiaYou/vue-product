<template>
  <div class="blogView">
    <h2>博客总览</h2>
    <div>
      <el-dropdown trigger="click" @command="selectDropdown">
        <span class="el-dropdown-link">
          {{ selectValue }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
          <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
          <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
          <el-dropdown-item command="豆角炒肉">豆角炒肉</el-dropdown-item>
          <el-dropdown-item command="拌黄瓜">拌黄瓜</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const selectValue = ref("下拉菜单");
    const selectDropdown = (command) => {
      console.log(command);
      selectValue.value = command;
    };
    return {
      selectValue,
      selectDropdown,
    };
  },
});
</script>

<style lang="less">
.blogView {
  .el-dropdown-link {
    cursor: pointer;
    // 风格蓝色
    color: #409fff;
  }
  width: 100%;
  height: 100%;
  padding: 10px 0px 0px 15px;
}
</style>
