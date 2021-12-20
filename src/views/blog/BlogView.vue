<template>
  <div class="blogView">
    <h2>博客总览</h2>
    <div>
      <el-button
        type="primary"
        size="small"
        @click="add"
        style="margin: 10px 0 10px 0"
        >添加</el-button
      >
      <div class="blog-list">
        <el-table :data="blogData">
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
          <el-table-column prop="desc" label="简介"></el-table-column>
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
    <create-blog-pane
      ref="createBlogPane"
      @update="updateList"
    ></create-blog-pane>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "@vue/composition-api";
import CreateBlogPane from "./pane/CreateBlogPane.vue";
import { getBlogList } from "@/api/blog";
export default defineComponent({
  components: { CreateBlogPane },
  setup(prop: any, context: any) {
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
    // 点击新增按钮触发方法
    const add = () => {
      console.log("新增");
      context.refs.createBlogPane.isOpen = true;
    };
    //获取博客列表方法
    const getBlog = () => {
      getBlogList().then((res: any) => {
        blogData.value = res.data.list;
        console.log(blogData.value);
      });
    };
    // 新增弹窗中点击确定后，触发父组件中的重新更新博客列表的方法
    const updateList = (msg: any) => {
      getBlog();
      console.log(msg);
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
      add,
      updateList,
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
    padding: 0px 10px 0px 0px;
    // border
    // width: calc(100% - 10px - 20px);
    // width: 1000px;
    // overflow: hidden;
  }
}
</style>
