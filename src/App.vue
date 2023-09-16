<template>
  <div id="app">
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
