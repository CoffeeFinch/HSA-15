<template>
  <div class="main">
    <h1 class="title">Spinal Fluid Pong</h1>
    <div class="counterHolder">
      <p class="counter">{{ counters[1] }}%</p>
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
    </div>
  <div class="button">
    <button class="btn" @click="increment2">Increase</button>
    <button class="btn" @click="decrement2">Decrease</button>
  <button class="btn" @click="resetCount2">Reset</button>
</div>
  <br>
    </div>
</template>

<script>
/* eslint-disable */
export default {
data () {
  return {
    counters: [0, 0]
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

<style scoped>
.skulman {
  height: 50vh;
}
.title {
  font-family: love ya like a sister;
  font-size: 8em;
  font-weight:lighter;
  margin-top: -2vh;
  margin-bottom: -2vh;
}
.counter {
  font-family: love ya like a sister;
  font-size: 8em;
  margin-top: -4vh;
  margin-bottom: -1vh;
  width: 12vw;
  border-style: solid;
  border-width: 2px;
  align-items: center;
  padding-top: 18vh;
}
.btn {
    font-family: tektur;
    /* font-weight: bolder; */
    margin-left: 2vw;
    margin-right: 2vw;
    width: 8em;
    height: 2em;
    font-size: 1em;
    background-color: rgb(78, 0, 0);
    color: white;
  }
  .button {
    display: inline-flex;
  }
  .counterHolder {
    padding-top: 4vh;
    padding-bottom: 2vh;
    display: flex;
    align-content: center;
    justify-content: center;
  }
</style>
