<template>
  <div>
    <p class="loading">Loading...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LoadingComponent",
});
</script>

<style lang="scss" scoped>
.loading {
  font-style: italic;
}
</style>
