<template>
  <div class="jokes-view">
    <div class="jokes-logo">
      <img class="vue-logo" alt="Vue logo" src="@/assets/logo.png" />
    </div>
    <div
      class="jokes__card"
      v-for="joke in jokeDetailsData.jokes"
      :key="joke.id"
    >
      <div v-if="joke.setup">
        <div>{{ joke.setup }}</div>
        <div>{{ joke.delivery }}</div>
      </div>
      <div v-else>{{ joke.joke }}</div>
      <br />
      <div class="jokes__card-info">ID: {{ joke.id }}</div>
      <div class="jokes__card-info">Category: {{ joke.category }}</div>
      <div class="jokes__card-info">Type: {{ joke.type }}</div>
      <div class="jokes__card-info">
        Flags:
        <ul
          class="jokes__card-list"
          v-for="(flagValue, flagKey) in joke.flags"
          :key="flagValue"
        >
          <li>{{ flagKey }}: {{ flagValue }}</li>
        </ul>
        <br />
      </div>
      <div class="jokes__card-info">Safe: {{ joke.safe }}</div>
      <div class="jokes__card-info">Language: {{ joke.lang }}</div>
    </div>
  </div>
</template>

// ========== SCRIPT ========== //
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "JokeDetails",
  data() {
    return {
      jokeID: "",
    };
  },
  computed: {
    ...mapState("jokes", ["jokeDetailsData"]),
  },
  created() {
    this.$store.state.jokes.jokeID = this.$route.params.id;
    this.$store.dispatch("jokes/getJokeDetails");
  },
});
</script>

<style lang="scss" scoped>
.vue-logo {
  width: 100px;
}
@import "./JokesView.scss";
</style>
