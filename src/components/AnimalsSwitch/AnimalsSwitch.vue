<template>
  <div class="form-check form-switch">
    <input
      class="form-check-input"
      v-model="toggleCats"
      @change="switchHandler"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
    />
    <label for="flexSwitchCheckDefault">Show Cats</label>
  </div>
</template>

// ============================== //

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnimalsSwitch",
  emits: ["toggleCats"],
  data() {
    return {
      toggleCats: false,
    };
  },
  computed: {},
  methods: {
    switchHandler() {
      if (!this.toggleCats) {
        this.toggleCats = true;
      } else {
        this.toggleCats = false;
      }
    },
  },
});
</script>

// ============================== //

<style scoped lang="scss">
@import "./AnimalsSwitch.scss";
</style>
