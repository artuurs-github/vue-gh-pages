<template>
  <div class="home">
    <img class="vue-logo" alt="Vue logo" src="../assets/logo.png" />
    <h1>Hello, Vue!</h1>
  </div>
</template>

// ========== SCRIPT ========== //
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  margin-top: 25px;
}

.vue-logo {
  width: 100px;
}

.vue-logo--rotated {
  transform: rotate(180deg);
}
</style>
