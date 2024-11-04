<template>
  <div id="app">
    <ListWithDialog />
  </div>
</template>

<script>
import ListWithDialog from './components/list-with-dialog.vue'

export default {
  name: 'app',
  components: {
    ListWithDialog
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
