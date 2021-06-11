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
import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Project from './components/Project.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Project,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

html {
  scroll-behavior: smooth;
}

#app {
  font-family: 'Neutra Text', 'Josefin Sans', sans-serif;
  --webkit-font-smoothing: antialiased;
  --moz-osx-font-smoothing: grayscale;
  --teal: #00a89c;
}

.content-wrapper {
  padding: 50px 0;
}
</style>
