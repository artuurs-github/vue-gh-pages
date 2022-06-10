<template>
  <div class="box">
    <p class="text">Toggle square visibility</p>
    <input type="checkbox" v-model="checked" :value="modelValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToggleCheckboxComponent",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  computed: {
    checked: {
      get() {
        return this.modelValue;
      },
      set(value: string) {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>

<style></style>
