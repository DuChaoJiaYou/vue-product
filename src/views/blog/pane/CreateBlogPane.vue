<template>
  <div>
    <el-dialog
      :title="`${isCreate ? '新增' : '修改'}博客`"
      :visible.sync="isOpen"
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
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from "@vue/composition-api";
import { createBlog } from "@/api/blog";
export default defineComponent({
  setup(props: any, context: any) {
    const isCreate = ref<boolean>(true);
    const isOpen = ref<boolean>(false);
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
    });
    const submitCreate = () => {
      // 规则检测无误后发起创建博客的请求
      context.refs.formContent.validate((valid: any) => {
        if (valid) {
          console.log(blogContent);
          createBlog(blogContent).then((res) => {
            console.log(res);
          });
          // 触发父组件中重新渲染博客列表方法说
          context.emit("update", "ok");
          context.refs.formContent.resetFields();
          isOpen.value = false;
        }
      });
    };
    return {
      isCreate,
      isOpen,
      blogContent,
      submitCreate,
      blogCreateRules,
    };
  },
});
</script>

<style></style>
