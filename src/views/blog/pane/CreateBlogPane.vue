<template>
  <div>
    <el-dialog
      :title="`${isCreate ? '新增' : '修改'}博客`"
      :visible.sync="isOpen"
      @closed="clearForm"
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
          <el-button type="primary" @click="submitCreate">确定</el-button>
          <el-button @click="clearForm"> 重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  reactive,
  onMounted,
} from "@vue/composition-api";
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
    const blogContent = ref({
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
          createBlog({
            title: blogContent.value.title,
            author: blogContent.value.author,
            desc: blogContent.value.desc,
            body: blogContent.value.body,
          }).then((res) => {
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
        } else if (valid && !isCreate.value) {
          console.log("ok");

          updatedBlog(blogContent.value._id, {
            title: blogContent.value.title,
            author: blogContent.value.author,
            desc: blogContent.value.desc,
            body: blogContent.value.body,
          }).then((res) => {
            console.log(res);
          });
          // 触发父组件中重新渲染博客列表方法说
          context.emit("update", "ok");
          context.refs.formContent.resetFields();
          isOpen.value = false;
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
      root.$nextTick(() => {
        blogContent.value.title = row.title;
        blogContent.value.author = row.author;
        blogContent.value.desc = row.desc;
        blogContent.value.body = row.body;
        blogContent.value._id = row._id;
      });
    };
    // 关闭弹窗后清空表单、重置按钮点击重置表单的函数
    const clearForm = () => {
      //  element-ui resetFields 有bug  解决方法如下

      root.$nextTick(() => {
        context.refs.formContent.resetFields();
        console.log("new clear");
      });
    };
    onMounted(() => {
      // blogContent.value = {
      //   title: "",
      //   author: "",
      //   desc: "",
      //   body: "",
      //   _id: "",
      // };
    });
    return {
      isCreate,
      isOpen,
      blogContent,
      submitCreate,
      blogCreateRules,
      updateBlog,
      clearForm,
    };
  },
});
</script>

<style></style>
