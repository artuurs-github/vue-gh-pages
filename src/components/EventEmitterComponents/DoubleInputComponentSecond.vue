<template>
  <div class="custom-wrapper custom-wrapper--column">
    <InputComponentSecond
      placeholder="Change title..."
      :modelValue="titleValue"
      @input="$emit('update:titleValue', ($event.target as HTMLInputElement).value)"
    />
    <InputComponentSecond
      placeholder="Change description..."
      :modelValue="descriptionValue"
      @input="$emit('update:descriptionValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputComponentSecond from "./InputComponentSecond.vue";

export default defineComponent({
  name: "DoubleInputComponentSecond",
  props: {
    titleValue: String,
    descriptionValue: String,
  },
  emits: ["update:titleValue", "update:descriptionValue"],
  components: {
    InputComponentSecond,
  },
});
</script>

<style></style>
