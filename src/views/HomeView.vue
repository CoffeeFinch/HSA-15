<template>
  <div class="home">
    <div class="fadein">
      <img class="logo" id="f3" src="../assets/Logo-Stencil-on.png">
    <img class="logo" id="f2" src="../assets/Logo-Stencil-on.png">
    <img class="logo" id="f1" src="../assets/Logo-Stencil-on.png">
    <div class="big">
      <img class="logo1" id="f4" src="../assets/Logo-Stencil-on.png">
    </div>
  </div>
  </div>
</template>

<script>
</script>

<style scoped>
.logo {
  height: 25vh;
}
.logo1{
  height: 50vh;
}
.big{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.fadein img {
  /* display: flex;
  justify-content: center;
  align-items: center;
  align-content: center; */
    top:0;
    -webkit-animation-name: fade;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 8s;
    animation-name: fade;
    animation-iteration-count: infinite;
    animation-duration: 8s;
}

@-webkit-keyframes fade {
    0% {opacity: 0;}
    20% {opacity: 1;}
    33% {opacity: 1;}
    53% {opacity: 0;}
    100% {opacity: 0;}
}
@keyframes fade {
    0% {opacity: 0;}
    20% {opacity: 1;}
    33% {opacity: 1;}
    53% {opacity: 0;}
    100% {opacity: 0;}
}

#f1 {
  -webkit-animation-delay: -2s;
}
#f2 {
    -webkit-animation-delay: -4s;

}
#f3 {
    -webkit-animation-delay: -6s;

}
#f4{
  -webkit-animation-delay: -8s;
}
</style>
