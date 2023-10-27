<template>
  <div class="main">
    <h1>Spinal Fluid Pong</h1>
    <div></div>
    <div>
      <p>{{ counters[1] }}%</p>
  <button @click="increment2">Increase</button>
  <button @click="decrement2">Decrease</button>
  <button @click="resetCount2">Reset</button>
  <br>
  <!-- Display the image based on the second counter's value -->
  <img class="skulman" v-if="(counters[1] <= 5)" src="../assets/spinaltap/spinal0.png" />
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
  <img class="skulman" v-if="(counters[1] >= 85) && (counters[1] <= 100)" src="../assets/spinaltap/spinal85.png" />
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
data () {
  return {
    counters: [100, 100]
  }
},
methods: {
  increment1 () {
    this.counters[0] += 5
  },
  decrement1 () {
    this.counters[0] -= 5
  },
  resetCount1 () {
    this.counters[0] = 0
  },
  increment2 () {
    this.counters[1] += 5
  },
  decrement2 () {
    this.counters[1] -= 5
  },
  resetCount2 () {
    this.counters[1] = 100
  }
}
}
</script>

<style>
.skulman {
  height: 75vh;
}
</style>
