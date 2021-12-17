<template>
  <div>
    <el-dialog
      :title="`${isCreate ? '新增' : '修改'} 博客`"
      :visible.sync="isOpen"
    >
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const isCreate = ref<boolean>(true);
    const isOpen = ref<boolean>(false);
    return {
      isCreate,
      isOpen,
    };
  },
});
</script>

<style></style>
