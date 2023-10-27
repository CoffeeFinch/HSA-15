<template>
  <div class="main">
    <h1>Plinko Counter</h1>
    <div></div>
    <div>
      <p>{{ counters[1] }}</p>
      <button @click="increment2">Increase</button>
      <button @click="decrement2">Decrease</button>
      <button @click="resetCount2">Reset</button>
      <br />
      <div class="plink">
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements1"
            v-show="showPlink1"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements1"
            v-show="!showPlink1"
          />
          <img
            class="lePlink"
            @click="toggleElements2"
            v-show="showPlink2"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements2"
            v-show="!showPlink2"
          />
          1
          <button>Add A Plink</button>
        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements3"
            v-show="showPlink3"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements3"
            v-show="!showPlink3"
          />
          <img
            class="lePlink"
            @click="toggleElements4"
            v-show="showPlink4"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements4"
            v-show="!showPlink4"
          />
          2
          <button @click="decrement1">Add A Plink</button>
        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements5"
            v-show="showPlink5"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements5"
            v-show="!showPlink5"
          />
          <img
            class="lePlink"
            @click="toggleElements6"
            v-show="showPlink6"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements6"
            v-show="!showPlink6"
          />
          5
          <button @click="decrement1">Add A Plink</button>
        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements7"
            v-show="showPlink7"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements7"
            v-show="!showPlink7"
          />
          <img
            class="lePlink"
            @click="toggleElements8"
            v-show="showPlink8"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements8"
            v-show="!showPlink8"
          />
          0
          <button @click="decrement1">Add A Plink</button>
        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements9"
            v-show="showPlink9"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements9"
            v-show="!showPlink9"
          />
          <img
            class="lePlink"
            @click="toggleElements10"
            v-show="showPlink10"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements10"
            v-show="!showPlink10"
          />
          10
          <button @click="decrement1">Add A Plink</button>
        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements11"
            v-show="showPlink11"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements11"
            v-show="!showPlink11"
          />
          <img
            class="lePlink"
            @click="toggleElements12"
            v-show="showPlink12"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements12"
            v-show="!showPlink12"
          />
          0
          <button @click="decrement1">Add A Plink</button>
        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements13"
            v-show="showPlink13"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements13"
            v-show="!showPlink13"
          />
          <img
            class="lePlink"
            @click="toggleElements14"
            v-show="showPlink14"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements14"
            v-show="!showPlink14"
          />
          5
          <button @click="decrement1">Add A Plink</button>
        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements15"
            v-show="showPlink15"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements15"
            v-show="!showPlink15"
          />
          <img
            class="lePlink"
            @click="toggleElements16"
            v-show="showPlink16"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements16"
            v-show="!showPlink16"
          />
          2
          <button @click="decrement1">Add A Plink</button>
        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements17"
            v-show="showPlink17"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements17"
            v-show="!showPlink17"
          />
          <img
            class="lePlink"
            @click="toggleElements18"
            v-show="showPlink18"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements18"
            v-show="!showPlink18"
          />
          1
          <button @click="decrement1">Add A Plink</button>
        </div>
      </div>
      <!-- Display the image based on the second counter's value -->
      <!-- <img class="skulman" v-if="(counters[1] <= 5)" src="../assets/spinaltap/spinal0.png" />
  <img class="skulman" v-if="(counters[1] >= 10) && (counters[1] <= 19)" src="../assets/spinaltap/spinal10.png" />
  <img class="skulman" v-if="(counters[1] >= 20) && (counters[1] <= 24)" src="../assets/spinaltap/spinal20.png" />
  <img class="skulman" v-if="(counters[1] >= 25) && (counters[1] <= 29)" src="../assets/spinaltap/spinal25.png" />
  <img class="skulman" v-if="(counters[1] >= 30) && (counters[1] <= 34)" src="../assets/spinaltap/spinal30.png" />
  <img class="skulman" v-if="(counters[1] >= 35) && (counters[1] <= 39)" src="../assets/spinaltap/spinal35.png" />
  <img class="skulman" v-if="(counters[1] >= 40) && (counters[1] <= 44)" src="../assets/spinaltap/spinal40.png" />
  <img class="skulman" v-if="(counters[1] >= 45) && (counters[1] <= 49)" src="../assets/spinaltap/spinal45.png" />
  <img class="skulman" v-if="(counters[1] >= 50) && (counters[1] <= 54)" src="../assets/spinaltap/spinal50.png" />
  <img class="skulman" v-if="(counters[1] >= 55) && (counters[1] <= 59)" src="../assets/spinaltap/spinal55.png" />
  <img class="skulman" v-if="(counters[1] >= 60) && (counters[1] <= 64)" src="../assets/spinaltap/spinal60.png" />
  <img class="skulman" v-if="(counters[1] >= 65) && (counters[1] <= 69)" src="../assets/spinaltap/spinal65.png" />
  <img class="skulman" v-if="(counters[1] >= 70) && (counters[1] <= 74)" src="../assets/spinaltap/spinal70.png" />
  <img class="skulman" v-if="(counters[1] >= 75) && (counters[1] <= 79)" src="../assets/spinaltap/spinal75.png" />
  <img class="skulman" v-if="(counters[1] >= 80) && (counters[1] <= 84)" src="../assets/spinaltap/spinal80.png" />
  <img class="skulman" v-if="(counters[1] >= 85) && (counters[1] <= 100)" src="../assets/spinaltap/spinal85.png" /> -->
      <!-- upButton -->
      <!-- downButton -->
      <!-- bigNumberPercentages -->
      <!-- You -->
      <!-- resetButton -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      counters: [20, 20],
      showPlink1: true,
      showPlink2: true,
      showPlink3: true,
      showPlink4: true,
      showPlink5: true,
      showPlink6: true,
      showPlink7: true,
      showPlink8: true,
      showPlink9: true,
      showPlink10: true,
      showPlink11: true,
      showPlink12: true,
      showPlink13: true,
      showPlink14: true,
      showPlink15: true,
      showPlink16: true,
      showPlink17: true,
      showPlink18: true,
    };
  },
  methods: {
    toggleElements1() {
      this.showPlink1 = !this.showPlink1; // Toggle the value
    },
    toggleElements2() {
      this.showPlink2 = !this.showPlink2; // Toggle the value
    },
    toggleElements3() {
      this.showPlink3 = !this.showPlink3; // Toggle the value
    },
    toggleElements4() {
      this.showPlink4 = !this.showPlink4; // Toggle the value
    },
    toggleElements5() {
      this.showPlink5 = !this.showPlink5; // Toggle the value
    },
    toggleElements6() {
      this.showPlink6 = !this.showPlink6; // Toggle the value
    },
    toggleElements7() {
      this.showPlink7 = !this.showPlink7; // Toggle the value
    },
    toggleElements8() {
      this.showPlink8 = !this.showPlink8; // Toggle the value
    },
    toggleElements9() {
      this.showPlink9 = !this.showPlink9; // Toggle the value
    },
    toggleElements10() {
      this.showPlink10 = !this.showPlink10; // Toggle the value
    },
    toggleElements11() {
      this.showPlink11 = !this.showPlink11; // Toggle the value
    },
    toggleElements12() {
      this.showPlink12 = !this.showPlink12; // Toggle the value
    },
    toggleElements13() {
      this.showPlink13 = !this.showPlink13; // Toggle the value
    },
    toggleElements14() {
      this.showPlink14 = !this.showPlink14; // Toggle the value
    },
    toggleElements15() {
      this.showPlink15 = !this.showPlink15; // Toggle the value
    },
    toggleElements16() {
      this.showPlink16 = !this.showPlink16; // Toggle the value
    },
    toggleElements17() {
      this.showPlink17 = !this.showPlink17; // Toggle the value
    },
    toggleElements18() {
      this.showPlink18 = !this.showPlink18; // Toggle the value
    },
    increment2() {
      this.counters[1] += 5;
    },
    decrement1() {
      this.counters[1] -= 1;
    },
    decrement2() {
      this.counters[1] -= 2;
    },
    decrement5() {
      this.counters[1] -= 5;
    },
    decrement10() {
      this.counters[1] -= 10;
    },
    resetCount2() {
      this.counters[1] = 20;
    },
  },
};
</script>

<style>
.lePlink {
  width: 12vh;
}
.plinkHole {
  display: flex;
  flex-direction: column;
  border-right-style: solid;
  border-left-style: solid;
  border-color: white;
}
.plink {
  display: flex;
}
</style>
