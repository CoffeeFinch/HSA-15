
<template>
    <div class="main">
      <h1>TwoTruthsOneDie</h1>
      <button @click='toggle1 = !toggle1'>Jeffrey Dahmer</button>
      <button @click='toggle2 = !toggle2'>Edmund Kemper</button>
      <button @click='toggle3 = !toggle3'>Robert Pickton</button>
      <button @click='toggle4 = !toggle4'>Ted Bundy</button>
      <button @click='toggle5 = !toggle5'>John Wayne Gacy</button>
      <br>
      <img v-show='success' @click='success = !success' src="../assets/TwoTruths/success.png" />
      <img v-show='failure' @click='failure = !failure' src="../assets/TwoTruths/failure.png" />

      <div v-show="confirmsuccess">
        <button @click='success = !success, confirmsuccess = !confirmsuccess' >ARE YOU SURE?</button>
    </div>
    <div v-show="confirmfail">
    <button @click='failure = !failure, confirmfail = !confirmfail'>ARE YOU SURE?</button>
  </div>

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

  <style>
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
</style>
