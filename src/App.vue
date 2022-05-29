<template>
  <div id="app">
    <Navbar />
    <main v-trigger class="container">
      <Intro />
      <About />
      <!-- <Project /> -->
      <!-- <Resume /> -->
    </main>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Resume from './components/Resume.vue'

export default {
  name: 'App',
  directives: {
    trigger: {
      inserted(el, binding) {
        const options = {
          threshold: 0.5,
        }
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active')
            }
          })
        }, options)

        el.children.forEach((section) => {
          observer.observe(section)
        })
      },
    },
  },
  components: {
    Navbar,
    Intro,
    About,
    Project,
    Resume,
  },
}
</script>
<style lang="scss">
@import 'scss/base';
@import 'scss/utilities';
@import 'scss/animation';
@import 'scss/typography';

// main {
//   @include grid-on-main(4, 16px, 16px);
// }

// @media screen and (min-width: 768px) {
//   main {
//     @include grid-on-main(8, 32px, 32px);
//   }
// }

// @media screen and (min-width: 992px) {
//   main {
//     @include grid-on-main(12, 32px, 32px);
//   }
// }
</style>
