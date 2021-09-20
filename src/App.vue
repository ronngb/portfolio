<template>
  <div id="app">
    <Navbar />
    <main v-trigger>
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
<style lang="scss">
@import 'scss/base';

#app {
  --webkit-font-smoothing: antialiased;
  --moz-osx-font-smoothing: grayscale;
}

.content-wrapper {
  padding: 3.125rem 0;
}

@media screen and (min-width: 768px) {
  main {
    width: 84%;
  }
}

@media screen and (min-width: 1100px) {
  main {
    width: 82%;
  }
}
</style>
