<template>
  <div class="home">
    <img class="vue-logo" alt="Vue logo" src="@/assets/logo.png" />
    <PlannerApp />
  </div>
</template>

// ========== SCRIPT ========== //
<script lang="ts">
import { defineComponent } from "vue";
import PlannerApp from "@/components/PlannerApp/PlannerApp.vue";

export default defineComponent({
  name: "PlannerView",
  components: {
    PlannerApp,
  },
});
</script>

<style lang="scss"></style>
