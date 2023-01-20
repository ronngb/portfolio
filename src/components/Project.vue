<template>
  <section id="project" class="project-section content-wrapper">
    <h2 class="secondary-heading project-heading">Project</h2>
    <ul class="project-list">
      <ProjectListItem @openCarousel="toggleCarousel()" />
    </ul>
    <ImageCarousel
      v-if="showCarousel"
      @closeCarousel="toggleCarousel()" />
  </section>
</template>
<script>
import ProjectListItem from './subcomponent/ProjectListItem.vue'
import ImageCarousel from './subcomponent/ImageCarousel.vue'

export default {
  name: 'Projects',
  data() {
    return {
      showCarousel: false,
    }
  },
  components: {
    ProjectListItem,
    ImageCarousel,
  },
  methods: {
    toggleCarousel() {
      this.showCarousel = !this.showCarousel
      document.body.classList.toggle('backdrop-open')
    },
  },
}
</script>
<style lang="scss" scoped>
.project {
  &-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 374px));
    gap: 50px 20px;
    justify-content: center;
    padding-inline-start: 0;
    margin-top: 30px;
    opacity: 0;
  }
}

.project-section.active {
  @for $i from 1 through length($project-component-class-list) {
    .#{nth($project-component-class-list, $i)} {
      animation: fadeInUp 0.5s ease-out $i * 0.2s forwards;
    }
  }
}
</style>
