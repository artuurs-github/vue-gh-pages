<template>
  <div class="async-container">
    <button class="async__button" @click="renderComponent">
      Toggle Async Component
    </button>
    <div v-if="showAsyncComponent" class="async">
      <AsyncComponent />
    </div>
  </div>
</template>

// ============================== //

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

import LoadingComponent from "@/components/AsyncComponent/LoadingComponent.vue";
import ErrorComponent from "@/components/AsyncComponent/ErrorComponent.vue";

const AsyncComponent = defineAsyncComponent({
  loader: () =>
    import(
      /* webpackPrefetch: true */ "@/components/AsyncComponent/AsyncComponent.vue"
    ),

  loadingComponent: LoadingComponent,
  delay: 0,

  errorComponent: ErrorComponent,
  timeout: 1000,
});

export default defineComponent({
  name: "AsyncWithPicsumAsync",
  components: {
    AsyncComponent,
  },
  data() {
    return {
      showAsyncComponent: false,
    };
  },
  methods: {
    renderComponent() {
      if (this.showAsyncComponent === false) {
        this.showAsyncComponent = true;
      } else {
        this.showAsyncComponent = false;
      }
    },
  },
});
</script>

// ============================== //

<style scoped lang="scss">
.async-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  margin-top: 25px;
}
.async__button {
  padding: 10px 25px;
  background-color: #ffffff;
  border: 3px solid lightgray;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
}
</style>
