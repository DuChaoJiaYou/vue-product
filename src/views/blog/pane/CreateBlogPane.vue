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
        <el-form-item label="作者">
          <el-input v-model="blogContent.author"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input type="textarea" v-model="blogContent.desc"></el-input>
        </el-form-item>
        <el-form-item label="博客内容">
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
    });
    // 博客详情内容表单
    const blogContent = reactive({
      title: "",
      author: "",
      desc: "",
      body: "",
    });
    const submitCreate = () => {
      context.refs.formContent.validate((valid: any) => {
        if (valid) {
          console.log(blogContent);
          createBlog(blogContent).then((res) => {
            console.log(res);
          });
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
