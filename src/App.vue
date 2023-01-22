<template>
  <div id="app">
    <Navbar />
    <div class="primary-bg"></div>
    <main v-trigger>
      <Intro />
      <About />
      <Project />
      <Resume />
      <ResumeLink />
    </main>
    <Footer />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Resume from './components/Resume.vue'
import Footer from './components/Footer.vue'
import ResumeLink from './components/ResumeLink.vue'

export default {
  name: 'App',
  directives: {
    trigger: {
      inserted(el, binding) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('active')
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.5 }
        )

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
    Footer,
    ResumeLink,
  },
}
</script>
<style lang="scss">
@import './assets/scss/main.scss';
</style>
