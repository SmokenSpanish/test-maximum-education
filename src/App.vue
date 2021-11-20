<template>
  <FormApp />
</template>

<script>
import FormApp from './components/FormApp.vue'
import store from './store'

export default {
  name: 'App',
  store,
  components: { FormApp }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
}
</style>
