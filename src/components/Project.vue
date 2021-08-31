<template>
  <!-- TODO: commit 1st the proceed to mobile 1st -->
  <!-- REMIND: the padding inside the <li> is large in mobile -->
  <section class="projects">
    <!-- REMIND: replace the test-heading -->
    <h1 class="test-heading">Projects</h1>
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
.projects {
  display: grid;
  /*grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));*/
  grid-template-columns: 1fr;
  gap: 80px 0;
}

.test-heading {
  grid-column: 1/3;
  color: var(--persian-green);
  font-size: 6.5rem;
  text-align: center;
  /*transform: translateY(20px);*/
  opacity: 1;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 543px));
  gap: 0 20px;
  justify-content: center;
  padding-inline-start: 0;
  /*width: 800px;*/
  /*margin-block-start: 0;
  margin-block-end: 0;*/
}

.project-item {
  padding: 0 30px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  /*transform: translateY(30px);*/
  opacity: 1;
}

.project-item > article {
  position: relative;
  bottom: 1.3rem;
}

.project-figure {
  /*  position: relative;*/
  /*bottom: 1.4rem;*/
  margin-bottom: 0;
  overflow: hidden;
  background-color: var(--davys-grey);
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  transform: translateY(-20px);
  cursor: pointer;
  opacity: 1;
}

.project-thumbnail {
  width: 100%;
  height: 100%;
  background-position: center;
  opacity: 0.8;
  transition: transform 0.5s;
}

.project-figure figcaption {
  position: absolute;
  /*top: redundant*/
  top: auto;
  bottom: -30%;
  /*original-bottom: -30%;*/
  width: 100%;
  padding: 20px 15px;
  transition: bottom 0.5s ease-out;
  /*background-color: black;*/
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

/*figure.project-image p.icon-tools svg {
  width: 20px;
  height: 22px;
  opacity: 0.5;
  fill: #46494c;
}*/

/*figure.project-image p.icon-tools span {
  float: right;
  padding: 0 7px;
  transform: translateY(20px);
  transition: transform 0.35s;
}*/

/*GITHUB ICON*/
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

/*figure.project-image p.icon-tools a {
  position: absolute;
  bottom: 7em;
  left: 50%;
  margin-left: -30px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s;
}*/

figure.project-image p.icon-tools svg.github-icon {
  width: 100%;
  height: 100%;
  opacity: 0.5;
  fill: #46494c;
}

.project-name {
  /*position: relative;
  bottom: 1.3rem;*/
  font-size: 1.7rem;
}

/*.project-info {
  position: relative;
  bottom: 1.3rem;
  font-family: 'Josefin Sans', sans-serif;
}*/

/*MOBILE*/
@media screen and (max-width: 768px) {
  /* CHANGE: to section-heading */
  section.projects h1 {
    font-size: 4.1rem;
  }
  /* CHANGE: to project-list */
  section.projects-list ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }

  .project-item {
    padding: 0 15px;
  }

  /*CHANGE: to project-name*/
  h2.project-title {
    font-size: 1.3rem;
  }

  /*GITHUB ICON*/
  /*TODO: to remove*/
  figure.project-image p.icon-tools a {
    bottom: 8em;
    left: 50%;
    width: 45px;
    height: 45px;
    margin-left: calc(45px / -2);
    /*opacity: 1;*/
    animation: github-icon-transition 2s ease-out infinite alternate;
  }
}

/*DESKTOP*/
@media screen and (min-width: 769px) {
  /*section.projects-list ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 525px));
    grid-template-rows: auto;
    gap: 70px 60px;
    width: 525px;
    margin: 0 auto;
  }*/
}

@media (hover: hover) {
  /*thumbnail*/
  .project-figure:hover .project-thumbnail {
    transform: scale(1.6);
  }
  .project-figure:hover figcaption {
    bottom: 0;
  }

  .project-figure:hover .tech-icons i {
    transform: translateY(0);
  }
  /*figure.project-image:hover p.icon-tools span {
    transform: translateY(0);
  }*/

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

  /* figure.project-image:hover p.icon-tools a {    
    width: 60px;
    height: 60px;
    opacity: 1;
  }*/

  /*GITHUB ICONS HOVER CHANGE COLOR*/
  .project-figure:hover a:hover .github-svg {
    transform: scale(1.3);
  }
}

@keyframes projects-transition {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes github-icon-transition {
  0% {
    opacity: 1;
  }
  10%,
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/*ANIMATION*/

/*
section.projects.active h1 {
  animation: projects-transition 0.5s ease-out 0.2s forwards;
}*/

/*section.projects.active section.projects-list li {
  animation: projects-transition 0.5s ease-out 0.4s forwards;
}*/

/*
section.projects.active figure.project-image {
  animation: projects-transition 0.5s ease-out 0.6s forwards;
}*/

/*TOREMOVE*/
/*section.projects-list {
  margin: 50px 0;
}*/
/*figure.project-image p.icon-tools {
  margin: 0;
}*/

/*section.projects-list li {
    padding: 0 15px 15px;
}*/
</style>
