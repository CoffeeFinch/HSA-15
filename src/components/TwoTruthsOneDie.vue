
<template>
    <div class="main">
      <div class="titles">
      <p class="title">Two Truths / One Die</p>
      </div>
      <div class="results">
      <img class="result" v-show='success' @click='success = !success' src="../assets/TwoTruths/success.png" />
      <img class="result" v-show='failure' @click='failure = !failure' src="../assets/TwoTruths/failure.png" />
    </div>
<div class="buttons">
      <button class="btn" @click='toggle1 = !toggle1'>Jeffrey Dahmer</button>
      <div class="setup1" v-show='toggle1'>
      <div class="q1" >
        <img @click='confirmsuccess = !confirmsuccess' src="../assets/TwoTruths/set1_false1.png" />
      </div>
      <div class="q2">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set1_true1.png" />
      </div>
      <div class="q3">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set1_true2.png" />
      </div>
      </div>
      <button class="btn" @click='toggle2 = !toggle2'>Edmund Kemper</button>
      <div class="setup2" v-show='toggle2'>
        <div class="q1" >
        <img @click='confirmsuccess = !confirmsuccess' src="../assets/TwoTruths/set2_false1.png" />
      </div>
      <div class="q2">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set2_true1.png" />
      </div>
      <div class="q3">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set2_true2.png" />
      </div>
      </div>
      <button class="btn" @click='toggle3 = !toggle3'>Robert Pickton</button>
      <div class="setup3" v-show='toggle3'>
        <div class="q1" >
        <img @click='confirmsuccess = !confirmsuccess' src="../assets/TwoTruths/set3_false1.png" />
      </div>
      <div class="q2">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set3_true1.png" />
      </div>
      <div class="q3">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set3_true2.png" />
      </div>
      </div>
      <button class="btn" @click='toggle4 = !toggle4'>Ted Bundy</button>
      <div class="setup4" v-show='toggle4'>
        <div class="q1" >
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set4_true2.png" />
      </div>
      <div class="q2">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set4_true1.png" />
      </div>
      <div class="q3">
        <img @click='confirmsuccess = !confirmsuccess' src="../assets/TwoTruths/set4_false1.png" />
      </div>
      </div>
      <button class="btn" @click='toggle5 = !toggle5'>John Wayne Gacy</button>
      <div class="setup5" v-show='toggle5'>
        <div class="q1" >
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set5_true1.png" />
      </div>
      <div class="q2">
        <img @click='confirmsuccess = !confirmsuccess' src="../assets/TwoTruths/set5_false1.png" />
      </div>
      <div class="q3">
        <img @click='confirmfail = !confirmfail' src="../assets/TwoTruths/set5_true2.png" />
      </div>
      </div>
      </div>
<div class="confirmation">
<div v-show="confirmsuccess">
        <button class="goButton" @click='success = !success, confirmsuccess = !confirmsuccess' >ARE YOU SURE?</button>
    </div>
    <div v-show="confirmfail">
    <button class="goButton" @click='failure = !failure, confirmfail = !confirmfail'>ARE YOU SURE?</button>
  </div>
</div>
  </div>
  </template>

<script>
/* eslint-disable */
 export default{
  data () {
   return {
     toggle1: false,
     toggle2: false,
     toggle3: false,
     toggle4: false,
     toggle5: false,
     failure: false,
     success: false,
     confirmsuccess: false,
     confirmfail: false,
   }
 }
}
</script>

  <style scoped>
  .main {
    background-color: black;
  }
  .q1 {
    background-color: black;
  }
  .q2 {
    background-color: black;
  }
  .q3 {
    background-color: black;
  }
  .title {
    font-family: long cang;
    font-size: 5em;
margin-top: -2vh;
margin-bottom: 4vh;
  }
  .buttons {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
  .btn {
    font-family: long cang;
    font-size: 4em;
    width: 29vw;
  }
  .confirmation {
    display: flex;
  justify-content: center;
    position: absolute;
    top: 80px;
}
.goButton {
  height: 110vh;
  width: 98vw;
  background-color: rgb(65, 65, 65);
  color: red;
  font-family: long cang;
  font-size: 12em;
}
.result{
  position: absolute;
}
.results{
  display: flex;
  justify-content: center;
}
</style>
