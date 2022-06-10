<template>
  <div class="container">
    <div class="logo-wrapper">
      <img class="vue-logo" alt="Vue logo" src="@/assets/logo.png" />
      <img
        class="vue-logo vue-logo--rotated"
        alt="Vue logo"
        src="@/assets/logo.png"
      />
      <img class="vue-logo" alt="Vue logo" src="@/assets/logo.png" />
    </div>

    <div class="wrapper">
      <div>
        <InputComponentFirst
          placeholder="Update title..."
          v-model="inputComponentFirstText"
          @handleClick="showTitle"
        />
      </div>
      <p class="text">{{ inputComponentFirstText }}</p>
    </div>

    <div class="wrapper">
      <InputComponentSecond
        placeholder="Update title..."
        v-model="inputComponentSecondText"
      />
      <p class="text">{{ inputComponentSecondText }}</p>
    </div>

    <div class="wrapper">
      <div>
        <InputComponentFirst
          placeholder="Enter color..."
          v-model="inputComponentFirstText"
          @handleClick="changeColor"
        />
      </div>
      <div class="box" :style="{ backgroundColor: boxElementFirstColor }"></div>
    </div>

    <div class="wrapper">
      <InputComponentSecond
        placeholder="Enter color..."
        v-model="boxElementSecondColor"
      />
      <div
        class="box"
        :style="{ backgroundColor: boxElementSecondColor }"
      ></div>
    </div>
    <!-- // ############################## // -->
    <div class="wrapper">
      <DoubleInputComponentFirst
        v-model:titleValue="textBoxFirstTitle"
        v-model:descriptionValue="textBoxFirstDescription"
        @handleTitleChange="changeTitle"
        @handleDescriptionChange="changeDescription"
      />
      <TextBoxComponent
        :title="textBoxFirstTitle"
        :description="textBoxFirstDescription"
      />
    </div>

    <div class="wrapper">
      <DoubleInputComponentSecond
        v-model:titleValue="textBoxSecondTitle"
        v-model:descriptionValue="textBoxSecondDescription"
      />
      <TextBoxComponent
        :title="textBoxSecondTitle"
        :description="textBoxSecondDescription"
      />
    </div>

    <div class="wrapper">
      <ToggleButtonComponent @handleVisibility="toggleVisibility" />
      <TextBoxComponent :boxClassName="boxClassName" />
    </div>

    <div class="wrapper">
      <ToggleCheckboxComponent v-model="checked" />
      <TextBoxComponent :boxClassName="checked ? 'hidden' : ''" />
    </div>
  </div>
</template>

// ========== SCRIPT ========== //

<script lang="ts">
import { defineComponent } from "vue";
import InputComponentFirst from "@/components/EventEmitterComponents/InputComponentFirst.vue";
import InputComponentSecond from "@/components/EventEmitterComponents/InputComponentSecond.vue";
import DoubleInputComponentFirst from "@/components/EventEmitterComponents/DoubleInputComponentFirst.vue";
import TextBoxComponent from "@/components/EventEmitterComponents/TextBoxComponent.vue";
import DoubleInputComponentSecond from "@/components/EventEmitterComponents/DoubleInputComponentSecond.vue";
import ToggleButtonComponent from "@/components/EventEmitterComponents/ToggleButtonComponent.vue";
import ToggleCheckboxComponent from "@/components/EventEmitterComponents/ToggleCheckboxComponent.vue";

export default defineComponent({
  name: "EventEmitterView",
  components: {
    InputComponentFirst,
    InputComponentSecond,
    DoubleInputComponentFirst,
    DoubleInputComponentSecond,
    TextBoxComponent,
    ToggleButtonComponent,
    ToggleCheckboxComponent,
  },
  data() {
    return {
      inputComponentFirstText: "",
      inputComponentSecondText: "",

      boxElementFirstColor: "",
      boxElementSecondColor: "",

      textBoxFirstTitle: "",
      textBoxFirstDescription: "",

      textBoxSecondTitle: "",
      textBoxSecondDescription: "",

      boxClassName: "",

      checked: false,
    };
  },
  methods: {
    showTitle(title: string) {
      this.inputComponentFirstText = title;
    },

    changeColor(color: string) {
      this.boxElementFirstColor = color;
    },

    changeTitle(title: string) {
      this.textBoxFirstTitle = title;
      console.log(title);
    },

    changeDescription(description: string) {
      this.textBoxFirstDescription = description;
    },

    toggleVisibility() {
      if (this.boxClassName === "") {
        this.boxClassName = "hidden";
      } else {
        this.boxClassName = "";
      }
    },
  },
});
</script>

// ========== STYLE ========== //

<style lang="scss">
@import "./EventEmitterView.scss";
</style>
