<template>
  <div id="app">
    <Navbar></Navbar>
    <div id="test" class="container">
      <Home></Home>
      <About></About>
      <Work></Work>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Work
  }
}
</script>
<style>
html {}

#app {
  scroll-behavior: smooth;
  font-family: Neutra Text, sans-serif;
  font-size: 20px;
  font-weight: 700;
}

#test {}
</style>