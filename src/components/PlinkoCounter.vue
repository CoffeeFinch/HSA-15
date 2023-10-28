<template>
  <div class="main">
    <h1 class="title">Plink! oh no</h1>
    <div></div>
    <div>
      <p class="counter">{{ counters[1] }}</p>
      <div class="buttons">
      <button class="btn" @click="increment1">Increase</button>
      <button class="btn" @click="decrement1">Decrease</button>
      <button class="btn" @click="resetCount2">Reset</button>
    </div>
      <br />
      <div class="plink">
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements1(); decrement1()"
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
            @click="toggleElements1(); decrement1()"
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
        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements3(); decrement2()"
            v-show="showPlink3"
            src="../assets/Logo-Stencil-off.png"
          />
          <img
            class="lePlink"
            src="../assets/Logo-Stencil-on.png"
            @click="toggleElements3()"
            v-show="!showPlink3"
          />
          <img
            class="lePlink"
            @click="toggleElements4(); decrement2()"
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
        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements5(); decrement5()"
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
            @click="toggleElements6(); decrement5()"
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

        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements9(); decrement10()"
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
            @click="toggleElements10(); decrement10()"
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

        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements13(); decrement5()"
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
            @click="toggleElements14(); decrement5()"
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

        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements15(); decrement2()"
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
            @click="toggleElements16(); decrement2()"
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

        </div>
        <div class="plinkHole">
          <img
            class="lePlink"
            @click="toggleElements17(); decrement1()"
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
            @click="toggleElements18(); decrement1()"
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

        </div>
      </div>

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
    increment1() {
      this.counters[1] += 1;
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

<style scoped>
.title {
  font-family: monoton;
  font-size: 8em;
  margin-top: -5vh;
  margin-bottom: -5vh;
}
.counter {
  font-family: monoton;
  font-size: 8em;
  margin-top: -4vh;
  margin-bottom: -1vh;
}
.buttons {
  margin-bottom: -17vh;
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
.lePlink {
  width: 10.5vw;
}
.plinkHole {
  display: flex;
  flex-direction: column;
  border-right-style: solid;
  border-left-style: solid;
  border-bottom-style: solid;
  border-color: white;
  font-family: Monoton;
  font-size:4em;
}
.plink {
  display: flex;
  justify-content: center;
  margin-top: 18vh;
}
</style>
