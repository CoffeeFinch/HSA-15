/* eslint-disable */
<template>
  <div class="ouchyPrime">
    <div class="ouchyNumber">Ouchy Number</div>
    <hr class="lines" />
    <div class="numbers">
      <img
        class="topnums"
        @click="toggleElements0"
        v-show="showBlack0"
        src="../assets/blkNumbers/blkNum_0.png"
      />

      <img
        class="topnums"
        @click="toggleElements1"
        v-show="showBlack1"
        src="../assets/blkNumbers/blkNum_1.png"
      />
      <img class="topnums"
      @click="toggleElements2"
        v-show="showBlack2"
       src="../assets/blkNumbers/blkNum_2.png" />
      <img class="topnums"
      @click="toggleElements3"
        v-show="showBlack3"
         src="../assets/blkNumbers/blkNum_3.png" />
      <img class="topnums"
      @click="toggleElements4"
        v-show="showBlack4"
         src="../assets/blkNumbers/blkNum_4.png" />
      <img class="topnums"
      @click="toggleElements5"
        v-show="showBlack5"
        src="../assets/blkNumbers/blkNum_5.png" />
      <img class="topnums"
      @click="toggleElements6"
        v-show="showBlack6"
         src="../assets/blkNumbers/blkNum_6.png" />
      <img class="topnums"
      @click="toggleElements7"
        v-show="showBlack7"
         src="../assets/blkNumbers/blkNum_7.png" />
      <img class="topnums"
      @click="toggleElements8"
        v-show="showBlack8"
         src="../assets/blkNumbers/blkNum_8.png" />
      <img class="topnums"
      @click="toggleElements9"
        v-show="showBlack9"
         src="../assets/blkNumbers/blkNum_9.png" />
    </div>
    <hr class="lines" />
    <div class="arm">
      <div class="armTxt">ARM</div>
      <div class="numberFields">
        <img class="spacer" src="../assets/whtNumbers/spacerL.png" />
        <img class="nums" src="../assets/whtNumbers/whtNum_9.png" />
        <img class="spacer" src="../assets/whtNumbers/spacerR.png" />
        <img class="spacer" src="../assets/whtNumbers/spacerL.png" />
        <img class="nums"
        @click="toggleElements2"
          v-show="!showBlack2"
          src="../assets/whtNumbers/whtNum_2.png" />
          <img class="spacer" src="../assets/whtNumbers/spacerR.png" />
          <img class="spacer" src="../assets/whtNumbers/spacerL.png" />
        <img class="nums"
        @click="toggleElements7"
          v-show="!showBlack7"
          src="../assets/whtNumbers/whtNum_7.png" />
          <img class="spacer" src="../assets/whtNumbers/spacerR.png" />
          <img class="spacer" src="../assets/whtNumbers/spacerL.png" />
        <img class="nums"
        @click="toggleElements1"
          v-show="!showBlack1"
        src="../assets/whtNumbers/whtNum_1.png" />
        <img class="spacer" src="../assets/whtNumbers/spacerR.png" />
        <img class="spacer" src="../assets/whtNumbers/spacerL.png" />
        <img class="nums"
        @click="toggleElements6"
          v-show="!showBlack6"
        src="../assets/whtNumbers/whtNum_6.png" />
        <img class="spacer" src="../assets/whtNumbers/spacerR.png" />

      </div>
    </div>
    <hr class="lines" />
    <div class="spleen">
      <div class="spleenTxt">SPLEEN</div>
      <div class="numberFields">
        <img class="spacer" src="../assets/whtNumbers/spacerL.png" /> <img class="nums"
        @click="toggleElements5"
          v-show="!showBlack5"
        src="../assets/whtNumbers/whtNum_5.png" />        <img class="spacer" src="../assets/whtNumbers/spacerR.png" />
        <img class="spacer" src="../assets/whtNumbers/spacerL.png" /><img
          class="nums"
          @click="toggleElements0"
          v-show="!showBlack0"
          src="../assets/whtNumbers/whtNum_0.png" />        <img class="spacer" src="../assets/whtNumbers/spacerR.png" />
          <img class="spacer" src="../assets/whtNumbers/spacerL.png" /><img class="nums"
        @click="toggleElements8"
          v-show="!showBlack8"
          src="../assets/whtNumbers/whtNum_8.png" />        <img class="spacer" src="../assets/whtNumbers/spacerR.png" />
        </div>
    </div>
    <hr class="lines" />

    <div class="bandaid">
      <img class="bandaidIcon" src="../assets/Band-Aid-icon.png" />
      <div class="bandaidNumberFields">
        <img class="spacer" src="../assets/whtNumbers/spacerL.png" /> <img class="bandaidNums"
        @click="toggleElements3"
          v-show="!showBlack3"
          src="../assets/whtNumbers/whtNum_3.png" /><img class="spacer" src="../assets/whtNumbers/spacerR.png" />
          <img class="decimal"
        src="../assets/whtNumbers/whtNum_dec.png" />
        <img class="spacer" src="../assets/whtNumbers/spacerL.png" /> <img class="bandaidNums"
        @click="toggleElements4"
          v-show="!showBlack4"
        src="../assets/whtNumbers/whtNum_4.png" /><img class="spacer" src="../assets/whtNumbers/spacerR.png" />
        <img class="spacer" src="../assets/whtNumbers/spacerL.png" /> <img class="bandaidNums"
        @click="toggleElements9"
          v-show="!showBlack9"
        src="../assets/whtNumbers/whtNum_9.png" /><img class="spacer" src="../assets/whtNumbers/spacerR.png" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      showBlack0: true, // Initially, show the black element
      showBlack1: true,
      showBlack2: true,
      showBlack3: true,
      showBlack4: true,
      showBlack5: true,
      showBlack6: true,
      showBlack7: true,
      showBlack8: true,
      showBlack9: true,
    };
  },
  methods: {
    toggleElements0() {
      this.showBlack0 = !this.showBlack0; // Toggle the value
    },

    toggleElements1() {
      this.showBlack1 = !this.showBlack1; // Toggle the value
    },
    toggleElements2() {
      this.showBlack2 = !this.showBlack2; // Toggle the value
    },
    toggleElements3() {
      this.showBlack3 = !this.showBlack3; // Toggle the value
    },
    toggleElements4() {
      this.showBlack4 = !this.showBlack4; // Toggle the value
    },
    toggleElements5() {
      this.showBlack5 = !this.showBlack5; // Toggle the value
    },
    toggleElements6() {
      this.showBlack6 = !this.showBlack6; // Toggle the value
    },
    toggleElements7() {
      this.showBlack7 = !this.showBlack7; // Toggle the value
    },
    toggleElements8() {
      this.showBlack8 = !this.showBlack8; // Toggle the value
    },
    toggleElements9() {
      this.showBlack9 = !this.showBlack9; // Toggle the value
    },
  },
};
</script>

  <style scoped>
.ouchyPrime {
  background-image: url("../assets/OuchyBackground.jpg");
  background-size: 100vw;
  font-family: tektur;
}
.lines {
  border-color: red;
  border-width: 4px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.numberFields {
  display: inline-flex;
  align-items: center;
  height: 17vh;
  background-color: red;
  padding-left: 1vw;
  padding-right: 1.5vw;
  font-size: 4em;
}

.decimal {
  width: 5%;
  background-color: white;
  border-radius: 100px;
  margin-top: 25%;
}
.nums {
  height: 12vh;
  background-color: black;
  margin-top: 1vh;
  /* margin-right: 0.5vw; */
  /* margin-left: .5vw;
  margin-bottom: -22px; */
}
.spacer {
  height: 12vh;
  padding-top: 2vh;
}
.topnums {
  width: 4.5vw;
  height: 10%;
  background-color: rgb(0, 238, 255);
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  padding: 0.5vw;
  border-radius: 100px;
}

.ouchyNumber {
  font-family: tektur;
  font-size: 10vw;
  color: black;
  font-weight: bolder;
}
.numbers {
  display: inline-flex;
  font-size: 10vw;
  color: white;
  /* padding-top: 1.5vh;
  padding-bottom: 1.5vh; */
}
.arm {
  display: flex;
  justify-content: space-between;

  color: yellow;
  align-items: center;
  padding-left: 11vw;
  padding-right: 11vw;
}
.armTxt {
  font-size: 7em;
  background-color: red;
  padding-right: 34vw;
  padding-left: 1vw;
  /*
  margin-bottom: 11px;
  margin-top: 12px; */
}
.spleen {
  display: flex;
  justify-content: space-between;
  color: yellow;
  align-items: center;
  padding-left: 11vw;
  padding-right: 11vw;
}
.spleenTxt {
  font-size: 7em;
  display: flex;
  justify-content: flex-start;
  background-color: red;
  padding-right: 33vw;
  padding-left: 1vw;
}
.bandaid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 4em;
  padding-left: 11vw;
  /* padding-right: 18vw; */
  padding-bottom: 10vh;
}
.bandaidIcon {
  height: 12vh;
  width: 485px;
  background-color: red;
  padding-bottom: 1.5vh;
  padding-top: 1.5vh;
  padding-left: 12vw;
  padding-right: 14vw;

}
.bandaidNums {
  /* display:flex; */
  height: 12vh;
  background-color: black;
  margin-left: 0.5vw;
  margin-top: 1vh;
}
.bandaidNumberFields {
  display: inline-flex;
  align-items: center;
  color:yellow;
  background-color: red;
  height: 15vh;
  margin-left: 2vw;
  margin-right: 11vw;
  padding-left: 19vw; 
}
</style>
