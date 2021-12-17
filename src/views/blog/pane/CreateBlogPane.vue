<template>
  <div>
    <el-dialog> </el-dialog>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const isCreate = ref<boolean>(true);
    const isOpen = ref<boolean>(true);
    return {
      isCreate,
      isOpen,
    };
  },
});
</script>

<style></style>
