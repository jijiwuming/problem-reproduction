<template>
  <div id="app">
    <p>
      <router-link to="/dialog">dialog</router-link>
    </p>
    <p>
      <router-link to="/table">table</router-link>
    </p>
    <p>
      <router-link to="/tableFixed">table修复版</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
