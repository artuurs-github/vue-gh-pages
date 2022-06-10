<template>
  <div>
    <input
      class="custom-input"
      type="text"
      :placeholder="placeholder"
      v-model="value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputComponentSecond",
  props: ["modelValue", "placeholder"],
  emits: ["update:modelValue"],
  computed: {
    value: {
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

<!-- <template>
  <div>
    <input
      class="custom-input"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLButtonElement).value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputComponentSecond",
  props: ["modelValue", "placeholder"],
  emits: ["update:modelValue"],
});
</script>

<style></style> -->
