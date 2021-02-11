<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <Home></Home>
      <About></About>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About
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