<template>
  <section id="section-project" class="content-wrapper">
    <h1 class="project-heading">Project</h1>
    <ul class="project-list">
      <li class="project-item">
        <article>
          <figure class="project-figure">
            <img
              class="project-thumbnail"
              src="../assets/test-proj.png"
              alt=""
            />
            <figcaption>
              <p class="tech-icons">
                <i class="devicon-html5-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-javascript-plain"></i>
              </p>
            </figcaption>
            <a href="">
              <img class="github-svg" src="../assets/github.svg" alt="" />
            </a>
          </figure>
          <h3 class="project-name">Fridge Man</h3>
          <p class="project-info">
            Fridge Man was built to make food inventory management a breeze.
            Fridge Man allows you to create and edit locations in which food
            will be stored. You can also...
          </p>
        </article>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'Projects',
};
</script>
<style lang="scss">
#section-project {
  @include style-all-grid(minmax(290px, 1fr), 30px);
}

.project {
  &-heading {
    @include style-all-heading;
    @include style-gradient-heading(to right);
  }

  &-list {
    @include style-all-grid(repeat(auto-fit, minmax(290px, 543px)), 20px);
    justify-content: center;
    padding-inline-start: 0;
    transform: translateY(20px);
    opacity: 0;
  }

  &-item {
    padding: 0 15px 15px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba($color-black, 0.16);
  }

  &-figure {
    position: relative;
    bottom: 12px;
    overflow: hidden;
    background-color: $color-secondary;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba($color-black, 0.16);
    cursor: pointer;
  }

  &-thumbnail {
    width: 100%;
    opacity: 0.8;
    transition: transform 0.5s;
  }

  &-figure figcaption {
    position: absolute;
    bottom: -30%;
    width: 100%;
    padding: 20px 15px;
    transition: bottom 0.5s ease-out;
  }

  &-name {
    font-size: 1.25rem;
  }

  &-info {
    font-size: 1rem;
  }
}

.tech-icons {
  display: flex;
  justify-content: space-evenly;
  color: lighten($color-secondary, 20%);

  & > i {
    transform: translateY(20px);
    transition: transform 0.35s;
  }
}

.github-svg {
  position: absolute;
  bottom: 7em;
  left: 50%;
  width: 64px;
  margin-left: -30px;
  text-align: center;
  transform: translateY(40px);
  opacity: 0;
  transition: all 0.5s;
}

#section-project.active {
  @for $i from 1 through length($class-project-active) {
    .#{nth($class-project-active, $i)} {
      animation: about-transition 0.5s ease-out $i * 0.2s forwards;
    }
  }
}

@media screen and (min-width: 768px) {
  #section-project {
    @include style-all-grid(1fr, 50px);
  }

  .project {
    &-heading {
      font-size: 4.5rem;
    }

    &-list {
      gap: 0 20px;
    }

    &-item {
      padding: 0 30px;
    }

    &-item > article {
      position: relative;
      bottom: 20.8px;
    }

    &-name {
      font-size: 1.4rem;
    }

    &-info {
      font-size: 1rem;
    }
  }
}

@media screen and (min-width: 1100px) {
  .project-heading {
    font-size: 6.2rem;
  }
}

@media (hover: hover) {
  .project-figure:hover {
    .project-thumbnail {
      transform: scale(1.6);
    }

    figcaption {
      bottom: 0;
    }

    .github-svg {
      transform: translateY(0);
      opacity: 1;
    }

    a:hover .github-svg {
      transform: scale(1.3);
    }

    .tech-icons i {
      transform: translateY(0);

      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          transition-delay: ($i + 1) * 0.1s;
        }
      }
    }
  }
}

@keyframes project-transition {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
