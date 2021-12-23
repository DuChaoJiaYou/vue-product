<template>
  <div class="create-category">
    <h2>新建分类</h2>
    <div class="content">
      <el-form label-width="80px">
        <el-form-item label="上级分类">
          <el-select
            style="width: 350px"
            v-model="parent"
            clearable
            placeholder="请选择上级分类"
          >
            <el-option
              v-for="(option, label) in optionVal"
              :key="label"
              :label="option.label"
              :value="option.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称">
          <el-input style="width: 350px" v-model="name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="createCategory">确认添加</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";
import { createCategory } from "@/api/blog";
export default defineComponent({
  setup() {
    const parent = ref("");
    const optionVal = ref([
      {
        label: "黄金糕",
        value: "选项一",
      },
      {
        label: "双皮奶",
        value: "选项二",
      },
    ]);

    const name = ref("");
    const createCategory = () => {
      console.log("1");
    };
    // 初始化上级分类
    const getParents = () => {
      //   initParentCategory().then((res: any) => {
      //     if (res?.data.code === 1) {
      //       //
      //     }
      //   });
    };
    return {
      parent,
      optionVal,
      name,
      createCategory,
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
