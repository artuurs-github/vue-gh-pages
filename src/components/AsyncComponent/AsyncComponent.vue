<template>
  <div class="picsum-container">
    <div v-for="number in numbers" :key="number">
      <img class="picsum" :src="link + number" alt="picsum" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const numbersArray = [...Array(501).keys()];

export default defineComponent({
  name: "AsyncComponent",
  data() {
    return {
      numbers: numbersArray,
      link: "https://picsum.photos/300?random=",
    };
  },
});
</script>

<style lang="scss" scoped>
.picsum-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.picsum {
  border-radius: 5px;
}
</style>
