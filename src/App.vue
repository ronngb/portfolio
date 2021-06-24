<template>
  <div id="app">
    <Navbar />
    <div id="test" class="container">
      <Intro />
      <About />
      <Project />
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Intro from './components/Intro.vue';
import About from './components/About.vue';
import Project from './components/Project.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Intro,
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
}

.content-wrapper {
  padding: 50px 0;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .content-wrapper {
    padding-bottom: 0px;
  }
}
</style>
