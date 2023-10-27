<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/BloodWheelScore">Blood Wheel Counter</router-link> |
    <router-link to="/OuchyNumberView">Ouchy Number</router-link> |
    <router-link to="/PlinkoCounterView">Plinko</router-link> |
    <router-link to="/SpinalFluidPongView">Spinal Fluid Pong</router-link> |
    <router-link to="/TwoTruthsOneDieView">Two Truths One Die</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff0000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #a05858;
}

nav a.router-link-exact-active {
  color: #7e1212;
}
</style>
