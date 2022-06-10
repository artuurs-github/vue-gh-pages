<template>
  <div class="box">
    <p class="text">Toggle square visibility</p>
    <button class="custom-button" @click="clickHandler">Toggle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToggleButtonComponent",
  emits: ["handleVisibility"],
  methods: {
    clickHandler() {
      this.$emit("handleVisibility");
    },
  },
});
</script>

<style></style>
