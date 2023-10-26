<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/BloodWheelView">Blood Wheel Counter</router-link> |
    <router-link to="/MagnitudeView">Magnitude</router-link> |
    <router-link to="/OuchyNumberView">Ouchy Number</router-link> |
    <router-link to="/PlinkoCounterView">Plinko</router-link> |
    <router-link to="/SpinalFluidPongView">Spinal Fluid Pong</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
