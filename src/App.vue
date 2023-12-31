<template>
  <div id="app">
<<<<<<< HEAD
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
=======
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data: function () {
    return { visible: false }
  },
  mounted() {
    // Move the new Vue instance outside of the mounted function
  }
}
new Vue({
  el: '#app',
  // 其他选项
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
>>>>>>> fbf3e649718801b744d4e107fd1d858b1e1f04b0
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
<<<<<<< HEAD
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
=======
  /* margin-top: 60px; */
>>>>>>> fbf3e649718801b744d4e107fd1d858b1e1f04b0
}
</style>
