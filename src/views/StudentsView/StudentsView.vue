<template>
  <div class="students-view">
    <div class="students-logo">
      <img class="vue-logo" alt="Vue logo" src="@/assets/logo.png" />
    </div>
    <div class="students">
      <div class="students-list">
        <div
          class="students__student"
          v-for="student in pendingStudents"
          :key="student"
        >
          {{ student }}
        </div>
      </div>

      <div class="students-selected">
        <button class="students__button" @click="selectRandomStudent">
          Select student
        </button>
        <div>Selected:</div>
        <h1>{{ activeStudent }}</h1>
        <!-- <button class="students__button" @click="resetStudents">Reset</button> -->
      </div>

      <div class="students-list">
        <div
          class="students__student"
          v-for="student in resolvedStudents"
          :key="student"
        >
          {{ student }}
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
  name: "StudentsView",
  computed: {
    ...mapState("students", [
      "pendingStudents",
      "resolvedStudents",
      "activeStudent",
    ]),
  },
  methods: {
    ...mapActions("students", ["selectRandomStudent", "resetStudents"]),
  },
});
</script>

<style lang="scss">
.vue-logo {
  width: 100px;
}
@import "./StudentsView.scss";
</style>
