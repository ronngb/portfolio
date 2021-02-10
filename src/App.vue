<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <home></home>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    home
  }
}
</script>
<style>
#app {
  font-family: Neutra Text, sans-serif;
  font-size: 20px;
  font-weight: 700;
}
</style>