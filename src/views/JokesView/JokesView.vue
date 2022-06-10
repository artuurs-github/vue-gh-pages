<template>
  <div class="jokes-view">
    <div class="jokes-logo">
      <img class="vue-logo" alt="Vue logo" src="@/assets/logo.png" />
    </div>
    <!-- <CounterComponent /> -->
    <div class="jokes">
      <div class="jokes-filters">
        <div class="jokes-select-container">
          <select class="jokes-filters__select" v-model="selectedCategory">
            <option value="">Filter by category</option>
            <option value="Programming">Programming</option>
            <option value="Misc">Misc</option>
            <option value="Dark">Dark</option>
            <option value="Pun">Pun</option>
            <option value="Spooky">Spooky</option>
            <option value="Christmas">Christmas</option>
          </select>
          <select class="jokes-filters__select" v-model="selectedFlag" disabled>
            <option value="">Filter by flags</option>
            <option value="nsfw">Nsfw</option>
            <option value="religious">Religious</option>
            <option value="political">Political</option>
            <option value="racist">Racist</option>
            <option value="sexist">Sexist</option>
            <option value="explicit">Explicit</option>
          </select>
        </div>
        <button class="jokes__button" @click="applyFilter">
          Filter & Refresh
        </button>
      </div>
      <div class="jokes-cards">
        <div class="jokes__card" v-for="joke in jokesData.jokes" :key="joke.id">
          <div v-if="joke.setup">
            <div>{{ joke.setup }}</div>
            <div>{{ joke.delivery }}</div>
          </div>
          <div v-else>{{ joke.joke }}</div>
          <br />
          <div class="jokes__card-info">ID: {{ joke.id }}</div>
          <div class="jokes__card-info">Category: {{ joke.category }}</div>
          <div class="jokes__card-info">
            Flags:
            <span v-for="(flagValue, flagKey) in joke.flags" :key="flagValue">
              <span v-if="flagValue === true">#{{ flagKey }}&nbsp;</span>
            </span>
          </div>
          <router-link
            :to="{ name: 'jokeDetails', params: { id: joke.id } }"
            class="jokes__card-info"
          >
            More info
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

// ========== SCRIPT ========== //
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "JokesView",
  data() {
    return {
      selectedCategory: "",
      selectedFlag: "",
      // categories: ["Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"],
      // flags: ["nsfw", "religious", "political", "racist", "sexist", "explicit"],
    };
  },
  computed: {
    ...mapState("jokes", ["jokesData"]),
  },
  created() {
    this.getJokes();
  },
  methods: {
    ...mapActions("jokes", ["getJokes", "changeJokesFilter"]),

    applyFilter() {
      this.changeJokesFilter(this.selectedCategory);
      this.getJokes();
    },
  },
});
</script>

<style lang="scss" scoped>
.vue-logo {
  width: 100px;
}
@import "./JokesView.scss";
</style>
