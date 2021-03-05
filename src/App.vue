<template>
  <div id="app">
    <Navbar></Navbar>
    <div id="test" class="container">
      <Home></Home>
      <About></About>
      <Project></Project>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Project
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}

#app {
  font-family: Neutra Text, sans-serif;
  font-size: 20px;
  font-weight: 700;
}
</style>