<template>
  <div class="create-category">
    <h2>新建分类</h2>
    <div class="content">
      <el-form label-width="80px">
        <el-form-item label="上级分类">
          <el-select
            style="width: 350px"
            v-model="info.parent"
            clearable
            placeholder="请选择上级分类"
          >
            <el-option
              v-for="(option, _id) in optionVal"
              :key="_id"
              :label="option.name"
              :value="option._id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称">
          <el-input style="width: 350px" v-model="info.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addCategory">确认添加</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  reactive,
  onMounted,
} from "@vue/composition-api";
import { createCategory, initParentCategory } from "@/api/category";
export default defineComponent({
  setup(props: any, context: any) {
    const root: any = context.root;
    // 定义新增类别绑定数据，分别为选择上一级类别id,和新增二级类别名称
    const info = reactive({
      parent: "",
      name: "",
    });
    const optionVal = ref([]);

    const name = ref("");
    const addCategory = () => {
      createCategory(info).then((res: any) => {
        if (res.data.code === 1) {
          root.$message({
            type: "success",
            message: "新增成功",
          });
          getParents();
        }
      });
    };
    // 初始化上级分类
    const getParents = () => {
      initParentCategory().then((res: any) => {
        if (res?.data.code === 1) {
          console.log(res.data);
          optionVal.value = res.data.msg;

          //
        }
      });
    };
    onMounted(() => {
      getParents();
    });
    return {
      info,
      optionVal,
      name,
      addCategory,
      getParents,
    };
  },
});
</script>

<style lang="less" scoped>
.create-category {
  .content {
    // width: calc(100% - 20px);
    height: 460px;
    background-color: #fff;
    padding: 40px;
    margin-top: 10px;
  }
}
</style>
