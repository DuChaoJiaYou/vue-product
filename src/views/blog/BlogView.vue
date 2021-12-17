<template>
  <div class="blogView">
    <h2>博客总览</h2>
    <div>
      <el-button
        type="primary"
        size="small"
        @click="getBlog"
        style="margin: 10px 0 10px 0"
        >添加</el-button
      >
      <div class="blog-list">
        <template>
          <el-table :data="blogData" style="width: 100%">
            <el-table-column
              prop="title"
              width="180"
              label="标题"
            ></el-table-column>
            <el-table-column
              prop="author"
              label="作者"
              width="200"
            ></el-table-column>
            <el-table-column
              prop="desc"
              label="简介"
              width="300"
            ></el-table-column>
            <el-table-column label="查看详情">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  size="small"
                  @click="openDialog(scope.row)"
                  >查看详情</el-button
                >
              </template>
            </el-table-column>
            <!-- <el-table-column width="100" label="测试">
              <template slot-scope="scope">
                {{ scope.row.body }}
              </template>
            </el-table-column> -->
          </el-table>
        </template>
        <el-dialog title="文章详情" :visible.sync="dialogVisible" width="40%">
          <span>
            {{ dialogContent }}
          </span>
        </el-dialog>
      </div>
      <!-- <el-dropdown trigger="click" @command="selectDropdown">
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
      </el-dropdown> -->
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "@vue/composition-api";
import { getBlogList } from "@/api/blog";
export default defineComponent({
  setup() {
    const selectValue = ref("下拉菜单");
    const blogData = ref([]);
    const selectDropdown = (command: any) => {
      console.log(command);
      selectValue.value = command;
    };
    const dialogContent = ref<string>("1");
    const dialogVisible = ref<boolean>(false);
    const openDialog = (content: any) => {
      dialogVisible.value = true;
      dialogContent.value = content.body;
    };
    const getBlog = () => {
      getBlogList().then((res: any) => {
        blogData.value = res.data.list;
        console.log(blogData.value);
      });
    };
    onMounted(() => {
      getBlog();
    });
    return {
      selectValue,
      selectDropdown,
      getBlog,
      blogData,
      openDialog,
      dialogVisible,
      dialogContent,
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
  .blog-list {
    // width: calc(100% - 10px - 20px);
    width: 1000px;
    // overflow: hidden;
  }
  width: 100%;
  height: 100%;
  padding: 10px 50px 0px 15px;
}
</style>
