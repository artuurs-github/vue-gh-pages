<template>
  <div class="animals-container">
    <div class="animals-filters">
      <img
        class="vue-logo vue-logo--rotated"
        alt="Vue logo"
        src="@/assets/logo.png"
      />
      <div class="form-check form-switch">
        <input
          value="cat"
          v-model="toggleCats"
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label for="flexSwitchCheckDefault">Show Cats</label>
      </div>
      <img
        class="vue-logo vue-logo--rotated"
        alt="Vue logo"
        src="@/assets/logo.png"
      />
    </div>

    <div class="animals">
      <!-- ############################## -->
      <form class="animals-header" @submit.prevent="addAnimal">
        <input
          class="animals__input"
          type="text"
          placeholder="Add animal..."
          v-model="newAnimalName"
        />
        <select class="animals__select" v-model="selectedAnimalType">
          <option disabled>Type</option>
          <option>Cat</option>
          <option>Dog</option>
        </select>
        <button class="animals__button" type="submit">ADD</button>
      </form>
      <!-- ############################## -->
      <div class="animals-list">
        <div class="animals__list-empty" v-if="animalsFiltered.length === 0">
          <p>Nothing to show!</p>
        </div>
        <div
          v-else
          class="animals__list"
          v-for="(animal, animalIndex) in animalsFiltered"
          :key="animal.id"
        >
          <div class="animals__tag">{{ animal.type }}</div>

          <div>
            <div>{{ animal.name }}</div>
          </div>

          <button
            class="animals__button-close"
            @click="removeAnimal(animalIndex)"
          >
            ✖
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

// ============================== //

<script lang="ts">
import { defineComponent } from "vue";

type Animals = {
  id: number;
  name: string;
  type: string;
};

export default defineComponent({
  name: "AnimalsView",
  components: {},
  data() {
    return {
      selectedAnimalType: "Type",
      newAnimalName: "",
      newAnimalID: 4,
      toggleCats: false,
      // tasks: [] as Animals[], // Ja grib "sākt no nulles".
      animals: [
        {
          id: 1,
          name: "House Cat",
          type: "Cat",
        },
        {
          id: 2,
          name: "Tiger",
          type: "Cat",
        },
        {
          id: 3,
          name: "Grumpy Cat",
          type: "Cat",
        },
      ],
    };
  },
  created() {
    if (localStorage.getItem("animals")) {
      try {
        this.animals = JSON.parse(
          localStorage.getItem("animals") || "[]"
        ) as Animals[];
      } catch (e) {
        localStorage.removeItem("animals");
      }
    }
  },
  computed: {
    animalsFiltered(): Animals[] {
      if (!this.toggleCats) {
        return this.animals;
      } else {
        return this.animals.filter((animal) => animal.type === "Cat");
      }
    },
  },
  methods: {
    addAnimal() {
      if (this.newAnimalName === "") {
        alert("An animal must have a name!");
        return;
      }

      if (this.selectedAnimalType === "Type") {
        alert("An animal must have a type!");
        return;
      }

      const newAnimals = [...this.animals];
      newAnimals.push({
        id: this.newAnimalID,
        name: this.newAnimalName,
        type: this.selectedAnimalType,
      });
      this.animals = newAnimals;

      this.newAnimalName = "";
      this.selectedAnimalType = "Type";
      this.newAnimalID++;
    },

    removeAnimal(animalIndex: number) {
      const newAnimals = [...this.animals];
      newAnimals.splice(animalIndex, 1);
      this.animals = newAnimals;
    },
  },
  watch: {
    animals(newAnimals) {
      localStorage.setItem("animals", JSON.stringify(newAnimals));
    },
  },
});
</script>

// ============================== //

<style scoped lang="scss">
@import "./AnimalsView.scss";
</style>
