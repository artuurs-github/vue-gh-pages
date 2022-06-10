<template>
  <div>
    <form class="custom-wrapper" @submit.prevent="submitHandler">
      <input
        class="custom-input"
        type="text"
        :placeholder="placeholder"
        v-model="inputValue"
      />
      <button class="custom-button" type="submit">Change</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputComponentFirst",
  props: ["placeholder"],
  emits: ["handleClick"],
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    submitHandler() {
      this.$emit("handleClick", this.inputValue);
      this.inputValue = "";
    },
  },
});
</script>

<style></style>
