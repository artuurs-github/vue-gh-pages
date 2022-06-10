<template>
  <div class="planner">
    <!-- // ========== PLANNER HEADER ========== // -->
    <div class="planner-header">
      <input
        class="planner__input"
        type="text"
        placeholder="Add new task..."
        v-model="newTaskTitle"
        v-on:keyup.enter="addTask"
      />
      <button class="planner__button" @click="addTask">ADD</button>
    </div>

    <!-- // ========== PLANNER TASKS ========== // -->

    <div class="planner-tasks">
      <div class="planner__task-empty" v-if="tasksFiltered.length === 0">
        <p>Nothing to show!</p>
      </div>
      <div
        v-else
        class="planner__task"
        v-for="(task, taskIndex) in tasksFiltered"
        :key="task.id"
      >
        <div>
          <input
            type="checkbox"
            id="task"
            v-model="task.completed"
            @click="changeTaskStatus(taskIndex)"
          />
          <label for="task" :class="{ completed: task.completed }">
            {{ task.title }}
          </label>
        </div>

        <button class="planner__button-close" @click="removeTask(taskIndex)">
          ✖
        </button>
      </div>
    </div>

    <!-- // ========== PLANNER FILTERS ========== // -->

    <div class="planner-filters">
      <button
        class="planner__button"
        :class="{ active: filter === 'all' }"
        @click="filter = 'all'"
      >
        All
      </button>
      <button
        class="planner__button"
        :class="{ active: filter === 'in-progress' }"
        @click="filter = 'in-progress'"
      >
        In Progress
      </button>
      <button
        class="planner__button"
        :class="{ active: filter === 'completed' }"
        @click="filter = 'completed'"
      >
        Completed
      </button>
    </div>
  </div>
</template>

// ============================== //

<script lang="ts">
import { defineComponent } from "vue";

type Tasks = {
  id: number;
  title: string;
  completed: boolean;
};

type FilteredTasks = "all" | "in-progress" | "completed";

export default defineComponent({
  name: "PlannerApp", // Domāts tam, lai ERROR gadījumā varam redzēt, kurā komponentē ERROR.
  data() {
    return {
      newTaskTitle: "",
      newTaskID: 3,
      filter: "all" as FilteredTasks,
      // tasks: [] as Tasks[], // Ja grib "sākt no nulles".
      tasks: [
        {
          id: 1,
          title: "Start planner app",
          completed: true,
        },
        {
          id: 2,
          title: "Finish planner app",
          completed: false,
        },
      ],
    };
  },
  created() {
    if (localStorage.getItem("tasks")) {
      try {
        this.tasks = JSON.parse(
          localStorage.getItem("tasks") || "[]"
        ) as Tasks[];
      } catch (e) {
        localStorage.removeItem("tasks");
      }
    }
  },
  computed: {
    tasksFiltered(): Tasks[] {
      if (this.filter === "all") {
        return this.tasks;
      } else if (this.filter === "in-progress") {
        return this.tasks.filter((task) => !task.completed);
      } else {
        return this.tasks.filter((task) => task.completed);
      }
    },
  },
  methods: {
    addTask() {
      if (this.newTaskTitle === "") {
        alert("A task must have a title!");
        return;
      }

      this.tasks.push({
        id: this.newTaskID,
        title: this.newTaskTitle,
        completed: false,
      });
      this.saveTasks();

      this.newTaskTitle = "";
      this.newTaskID++;
    },

    removeTask(taskIndex: number) {
      this.tasks.splice(taskIndex, 1);
      this.saveTasks();
    },

    changeTaskStatus(taskIndex: number) {
      if (this.tasks[taskIndex].completed === false) {
        this.tasks[taskIndex].completed = true;
      } else {
        this.tasks[taskIndex].completed = false;
      }
      this.saveTasks();
    },

    saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
  // watch
});
</script>

// ============================== //

<style scoped lang="scss">
@import "./PlannerApp.scss";
</style>
