<template>
    <div class="main">
      <h1>Blood Wheel Score</h1>
      <div>
        <p>Leader: {{ counters[0] }}</p>
    <button @click="resetCount1">Reset</button>
    <button @click="setLead">Set Lead</button>
        <!-- upButton -->
        <!-- downButton -->
        <!-- bigNumberPercentages -->
        <!-- Leader -->
        <!-- resetButton -->
        </div>
      <div>
        <p>You: {{ counters[1] }}</p>
    <button @click="increment2">Increase</button>
    <button @click="decrement2">Decrease</button>
    <button @click="resetCount2">Reset</button>

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

  <style>
  .skulman {
    height: 12vh;
  }
</style>
