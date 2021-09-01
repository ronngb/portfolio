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
<style>
html {
  --persian-green: #00a69a;
  --gainsboro: #dcdcdd;
  --silver: #c5c3c6;
  --davys-grey: #46494c;
  --black-coral: #4c5c68;

  scroll-behavior: smooth;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Neutra Text', sans-serif;
  line-height: 1.2;
}

main {
  width: 91%;
  margin: 0 auto;
}

h1,
h2 {
  margin: 0;
}

p {
  margin: 0;
  font-family: 'Josefin Sans', sans-serif;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}
ul {
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
}

figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

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
