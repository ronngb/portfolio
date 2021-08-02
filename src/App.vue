<template>
  <div id="app">
    <Navbar />
    <main v-trigger class="container">
      <Intro />
      <About />
      <Project />
    </main>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Intro from './components/Intro.vue';
import About from './components/About.vue';
import Project from './components/Project.vue';

export default {
  name: 'App',
  directives: {
    trigger: {
      inserted(el, binding) {
        const options = {
          threshold: 0.5,
        };
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        }, options);

        el.children.forEach((section) => {
          observer.observe(section);
        });
      },
    },
  },
  components: {
    Navbar,
    Intro,
    About,
    Project,
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Neutra Text', 'Josefin Sans', sans-serif;
  font-size: 15px;
  line-height: 1.5;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}
ul {
  list-style: none;
  margin-top: 0;
}

#app {
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
