<template>
  <div class="textbox" :class="boxClassName">
    <p class="text">Title: {{ title }}</p>
    <p class="text">Description: {{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextBoxComponent",
  props: {
    title: String,
    description: String,
    boxClassName: String,
  },
});
</script>

<style></style>
