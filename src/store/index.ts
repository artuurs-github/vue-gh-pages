/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createStore } from "vuex";
import axios from "axios";

// URL examples:
// Default: https://v2.jokeapi.dev/joke/Any?amount=10
// w/ Filter: https://v2.jokeapi.dev/joke/Programming?amount=10
// w/ Flag: https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&amount=10

const jokesURL = "https://v2.jokeapi.dev/joke/";

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default createStore({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    counters: {
      namespaced: true,
      state: {
        count: 0,
        animals: ["Cat", "Dog"],
      },
      actions: {
        increment(context) {
          context.commit("increment");
        },
        incrementByAmount(context, payload) {
          context.commit("incrementByAmount", payload);
        },
      },
      mutations: {
        increment(state) {
          state.count++;
        },
        incrementByAmount(state, payload) {
          state.count += payload;
        },
      },
      getters: {
        onlyDog(context) {
          return context.animals[1];
        },
      },
      modules: {},
    },

    jokes: {
      namespaced: true,
      state: {
        jokesData: [],
        jokeDetailsData: [],
        jokeID: "",
        jokesFilter: "Any",
        // jokesRangeStart: "0",
        // jokesRangeEnd: "9",
      },
      actions: {
        getJokes({ commit }) {
          axios
            .get(
              jokesURL +
                // @ts-ignore
                this.state.jokes.jokesFilter + // I.e. "Any", "Programming" etc.
                // "?idRange=" +
                // @ts-ignore
                // this.state.jokes.jokesRangeStart + // i.e. "0", "10" etc.
                // "-" +
                // @ts-ignore
                // this.state.jokes.jokesRangeEnd + // i.e. "9", "19" etc.
                "?amount=10" // Bija: "&amount=10"
            )
            .then((response) => {
              commit("SET_JOKES", response.data);
            })
            .catch((error) => console.log(error));
        },

        getJokeDetails({ commit, state }) {
          axios
            .get(
              jokesURL +
                state.jokes.jokesFilter + // I.e. "Any", "Programming" etc.
                "?idRange=" +
                // @ts-ignore
                this.state.jokes.jokeID + // i.e. "0", "10" etc.
                "&amount=10"
            )
            .then(({ data }) => {
              commit("SET_JOKE_DETAILS", data);
            })
            .catch((error) => console.log(error));
        },

        changeJokesFilter(context, payload) {
          context.commit("CHANGE_JOKES_FILTER", payload);
        },
      },
      mutations: {
        SET_JOKES(state, data) {
          state.jokesData = data;
        },

        SET_JOKE_DETAILS(state, data) {
          state.jokeDetailsData = data;
        },

        CHANGE_JOKES_FILTER(state, payload) {
          if (payload === "") {
            state.jokesFilter = "Any";
          } else {
            state.jokesFilter = payload;
          }
        },
      },
      getters: {},
      modules: {},
    },

    students: {
      namespaced: true,
      state: {
        pendingStudents: [
          "Alberts",
          "Arnis",
          "Artis",
          "Artūrs",
          "Bogdans",
          "Edgars",
          "Elvis",
          "Haralds",
          "Ieva",
          "Ilona",
          "Inta",
          "Jānis",
          "Ņikita",
          "Niklāvs",
          "Regīna",
          "Ričards",
          "Rihards",
          "Roberts",
        ],
        resolvedStudents: [],
        activeStudent: "",
      },
      actions: {
        selectRandomStudent(context) {
          context.commit("SELECT_RANDOM_STUDENT");
        },

        resetStudents(context) {
          context.commit("RESET_STUDENTS");
        },
      },
      mutations: {
        SELECT_RANDOM_STUDENT(state) {
          const studentsCount = state.pendingStudents.length - 1;
          const studentIndex = randomIntFromInterval(0, studentsCount);
          const selectedStudent = state.pendingStudents.splice(studentIndex, 1);

          state.activeStudent = selectedStudent[0];

          state.resolvedStudents.push(state.activeStudent);

          if (studentsCount === -1) {
            alert("All students selected!");
            state.resolvedStudents.pop();
            state.pendingStudents = state.resolvedStudents.sort();
            state.resolvedStudents = [];
            state.activeStudent = "";
          }
        },

        // RESET_STUDENTS(state) {
        //   state.resolvedStudents.pop();
        //   state.pendingStudents = state.resolvedStudents.sort();
        //   state.resolvedStudents = [];
        //   state.activeStudent = "";
        // },
      },
      getters: {},
      modules: {},
    },
  },
});
