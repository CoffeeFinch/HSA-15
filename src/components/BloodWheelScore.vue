<template>
    <div class="main">
      <h1 class="title">Blood Wheel Score</h1>
      <div class="leader">
        <p class="id">Leader:</p>
        <p class="leadCounter">{{ counters[0] }}</p>
        <!-- upButton -->
        <!-- downButton -->
        <!-- bigNumberPercentages -->
        <!-- Leader -->
        <!-- resetButton -->
        </div>
        <hr class="line">
      <div class="you">
        <p class="id">You:</p>
          <p class="youCounter">{{ counters[1] }}</p>
    <button class="btn" @click="increment2">Increase</button>
    <button class="btn" @click="decrement2">Decrease</button>
    <button class="btn" @click="resetCount2">Reset</button>
    <button class="btn" @click="setLead">Set Lead</button>
    <button class="btn" @click="resetCount1">Reset Lead</button>

        <!-- upButton -->
        <!-- downButton -->
        <!-- bigNumberPercentages -->
        <!-- You -->
        <!-- resetButton -->
      </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      counters: [0, 0]
    }
  },
  methods: {
    setLead () {
      this.counters[0] = this.counters[1]
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
      this.counters[1] = 0
    }
  }
}
</script>

  <style scoped>
  .leader {
    font-size: 1em;
    margin-top: -4vh;
    margin-bottom: -8vh;
  }
  .you{
    font-size: 1em;
  }
  .title {
    font-family: luckiest guy;
    /* font-family: monoton; */
    /* font-family: love ya like a sister; */
    /* font-family: long cang; */
    /* font-family: junge; */
    font-size: 5em;
    margin-top: -2vh;
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
  .id {
    font-family: luckiest guy;
    font-size: 2em;
    color: rgb(151, 0, 0)
  }
  .leadCounter {
    font-family: tekture;
    font-size: 18em;
    margin-top: -7vh;
    margin-bottom: -2vh;
  }
  .youCounter {
    font-family: tekture;
    font-size: 18em;
    margin-top: -7vh;
    margin-bottom: -2vh;
  }
  .line {
  border-width: 4px;
  margin-top:40px;
  margin-bottom: 5px;
  }
</style>
