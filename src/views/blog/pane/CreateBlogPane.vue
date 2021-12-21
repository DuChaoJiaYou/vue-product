<template>
  <div>
    <el-dialog
      :title="`${isCreate ? '新增' : '修改'}博客`"
      :visible.sync="isOpen"
      @closed="closeDialog"
    >
      <el-form :model="blogContent" ref="formContent" :rules="blogCreateRules">
        <el-form-item label="标题" prop="title">
          <el-input v-model="blogContent.title"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input v-model="blogContent.author"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="desc">
          <el-input type="textarea" v-model="blogContent.desc"></el-input>
        </el-form-item>
        <el-form-item label="博客内容" prop="body">
          <el-input type="textarea" v-model="blogContent.body"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitCreate">创建</el-button>
          <el-button @click="closeDialog"> 重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from "@vue/composition-api";
import { createBlog, updatedBlog } from "@/api/blog";
export default defineComponent({
  setup(props: any, context: any) {
    const isCreate = ref<boolean>(true);
    const isOpen = ref<boolean>(false);
    const root: any = context.root;
    // 新建博客表单规则
    const blogCreateRules = reactive({
      title: [
        {
          required: true,
          message: "不能为空",
          trigger: "change",
        },
      ],
      author: [
        {
          required: true,
          message: "不能为空",
          trigger: "change",
        },
      ],
      desc: [
        {
          required: "true",
          message: "不能为空",
          trigger: "change",
        },
      ],
      body: [
        {
          required: "true",
          message: "不能为空",
          trigger: "change",
        },
      ],
    });
    // 博客详情内容表单
    const blogContent = reactive({
      title: "",
      author: "",
      desc: "",
      body: "",
      _id: "",
    });
    // 提交新增博客函数 & 修改博客提交函数
    const submitCreate = () => {
      // 规则检测无误后发起创建博客的请求
      context.refs.formContent.validate((valid: any) => {
        if (valid && isCreate.value) {
          console.log(blogContent);
          createBlog(blogContent).then((res) => {
            console.log(res);
          });
          // 触发父组件中重新渲染博客列表方法说
          context.emit("update", "ok");
          context.refs.formContent.resetFields();
          isOpen.value = false;
          root.$message({
            type: "success",
            message: "添加成功",
          });
        } else {
          updatedBlog(blogContent._id, {
            title: blogContent.title,
            author: blogContent.author,
            desc: blogContent.desc,
            body: blogContent.body,
          }).then((res) => {
            console.log(res);
            // 触发父组件中重新渲染博客列表方法说
            context.emit("update", "ok");
            context.refs.formContent.resetFields();
            isOpen.value = false;
          });
          root.$message({
            type: "success",
            message: "修改成功",
          });
        }
      });
    };
    // 修改博客函数
    const updateBlog = (row: any) => {
      isOpen.value = true;
      isCreate.value = false;
      blogContent.title = row.title;
      blogContent.author = row.author;
      blogContent.desc = row.desc;
      blogContent.body = row.body;
      blogContent._id = row._id;
    };
    // 关闭弹窗后清空表单、重置按钮点击重置表单的函数
    const closeDialog = () => {
      context.refs.formContent.resetFields();
    };
    return {
      isCreate,
      isOpen,
      blogContent,
      submitCreate,
      blogCreateRules,
      updateBlog,
      closeDialog,
    };
  },
});
</script>

<style></style>
