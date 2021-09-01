<template>
  <!-- TODO: place #id in evry section -->
  <!-- TODO: change .project to .content-wrapper -->
  <section class="project">
    <!-- REMIND: replace the test-heading -->
    <h1 class="test-heading">Project</h1>
    <ul class="project-list">
      <li class="project-item">
        <article>
          <figure class="project-figure">
            <!-- TODO: convert image to webp -->
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
          <h2 class="project-name">Fridge Man</h2>
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
<style>
/* REMIND: change this to #(id)  */
.project {
  display: grid;
  grid-template-columns: minmax(290px, 1fr);
  gap: 80px 0;
}
/* TODO: make this .section-heading then make it global*/
.test-heading {
  grid-column: 1/2;
  color: var(--persian-green);
  font-size: 3.4rem;
  text-align: center;
  transform: translateY(20px);
  opacity: 0;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 543px));
  gap: 20px 0;
  justify-content: center;
  padding-inline-start: 0;
  transform: translateY(20px);
  opacity: 0;
}

.project-item {
  padding: 0 15px 15px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
}

.project-figure {
  position: relative;
  bottom: 12px;
  overflow: hidden;
  background-color: var(--davys-grey);
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  cursor: pointer;
}

.project-thumbnail {
  width: 100%;
  opacity: 0.8;
  transition: transform 0.5s;
}

.project-figure figcaption {
  position: absolute;
  bottom: -30%;
  width: 100%;
  padding: 20px 15px;
  transition: bottom 0.5s ease-out;
}

.tech-icons {
  display: flex;
  justify-content: space-evenly;
  color: var(--davys-grey);
  opacity: 0.7;
}

.tech-icons > i {
  transform: translateY(20px);
  transition: transform 0.35s;
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

.project-name {
  font-size: 1.25rem;
}

.project-info {
  font-size: 0.9rem;
}
/* REMIND: change to .section-heading */
.project.active .test-heading {
  animation: project-transition 0.5s ease-out 0.2s forwards;
}

.project.active .project-list {
  animation: project-transition 0.5s ease-out 0.4s forwards;
}

/*MOBILE*/
@media screen and (min-width: 768px) {
  .project {
    grid-template-columns: 1fr;
  }

  .test-heading {
    font-size: 6.2rem;
  }

  .project-list {
    gap: 0 20px;
  }

  .project-item {
    padding: 0 30px;
  }

  .project-item > article {
    position: relative;
    bottom: 20.8px;
  }

  .project-name {
    font-size: 1.4rem;
  }

  .project-info {
    font-size: 1rem;
  }
}

@media (hover: hover) {
  .project-figure:hover .project-thumbnail {
    transform: scale(1.6);
  }

  .project-figure:hover figcaption {
    bottom: 0;
  }

  .project-figure:hover .tech-icons i {
    transform: translateY(0);
  }

  .project-figure:hover .tech-icons i:nth-child(3) {
    transition-delay: 0.4s;
  }

  .project-figure:hover .tech-icons i:nth-child(2) {
    transition-delay: 0.3s;
  }

  .project-figure:hover .tech-icons i:nth-child(1) {
    transition-delay: 0.2s;
  }

  .project-figure:hover .github-svg {
    transform: translateY(0);
    opacity: 1;
  }

  .project-figure:hover a:hover .github-svg {
    transform: scale(1.3);
  }
}

@keyframes project-transition {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
