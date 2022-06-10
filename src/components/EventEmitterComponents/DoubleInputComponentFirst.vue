<template>
  <div class="custom-wrapper custom-wrapper--column">
    <form class="custom-wrapper" @submit.prevent="submitTitleHandler">
      <input
        class="custom-input"
        type="text"
        placeholder="Change title..."
        v-model="titleValue"
      />
      <button class="custom-button" type="submit">Change</button>
    </form>
    <form class="custom-wrapper" @submit.prevent="submitDescriptionHandler">
      <input
        class="custom-input"
        type="text"
        placeholder="Change description..."
        v-model="descriptionValue"
      />
      <button class="custom-button" type="submit">Change</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DoubleInputComponentFirst",
  emits: ["handleTitleChange", "handleDescriptionChange"],
  data() {
    return {
      titleValue: "",
      descriptionValue: "",
    };
  },
  methods: {
    submitTitleHandler() {
      this.$emit("handleTitleChange", this.titleValue);
      this.titleValue = "";
    },
    submitDescriptionHandler() {
      this.$emit("handleDescriptionChange", this.descriptionValue);
      this.descriptionValue = "";
    },
  },
});
</script>

<style></style>
