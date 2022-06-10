<template>
  <div class="counter">
    <div>State (count): {{ count }}</div>
    <button class="counter__button" @click="increment">ADD + 1</button>
    <button class="counter__button" @click="incrementByAmount(10)">
      ADD + 1
    </button>
    <div>State (animals): {{ animals }}</div>
    <div>Getters (onlyDog): {{ onlyDog }}</div>
  </div>
</template>

// ========== SCRIPT ========== //
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "CounterComponent",
  computed: {
    // Default: count() { return this.$store.state.count },
    /* Short: */ ...mapState("counters", ["count", "animals"]),
    // Default: onlyDog() { return this.$store.getters.animals },
    /* Short: */ ...mapGetters("counters", ["onlyDog"]),
  },
  methods: {
    // Default: addOne() { this.$store.dispatch("increment"); },
    /* Short: */ ...mapActions("counters", ["increment", "incrementByAmount"]),
  },
});
</script>

<style lang="scss">
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-top: 25px;
}

.counter__button {
  padding: 5px 15px;
  background-color: white;
  border: 3px solid lightgray;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: rgb(230, 230, 230);
  }
  &:active {
    background-color: lightgray;
  }
}
</style>
