<template>
  <section id="project" class="project-section content-wrapper">
    <h2 class="secondary-heading project-heading">Project</h2>
    <ul class="project-list">
      <ProjectListItem />
      <!-- <ProjectListItem /> -->
    </ul>
  </section>
</template>
<script>
import ProjectListItem from './subcomponent/ProjectListItem.vue'

export default {
  name: 'Projects',
  components: {
    ProjectListItem,
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
