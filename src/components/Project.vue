<template>
  <section class="projects">
    <div class="content-wrapper">
      <h1>Projects</h1>
      <section class="projects-list">
        <ul>
          <article>
            <li>
              <figure class="project-image">
                <img src="../assets/test-proj.png" alt="" />
              </figure>
              <h2 class="project-title">Fridge Man</h2>
              <p class="project-info">
                Fridge Man was built to make food inventory management a breeze.
                Fridge Man allows you to create and edit locations in which food
                will be stored. You can also...
              </p>
            </li>
          </article>
          <article>
            <li>
              <figure class="project-image">
                <img src="../assets/test-proj.png" alt="" />
              </figure>
              <h2 class="project-title">Fridge Man</h2>
              <p class="project-info">
                Fridge Man was built to make food inventory management a breeze.
                Fridge Man allows you to create and edit locations in which food
                will be stored. You can also...
              </p>
            </li>
          </article>
        </ul>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Projects',
};
</script>
<style>
.projects h1 {
  text-align: center;
  font-size: 6.5rem;
  font-weight: 600;
  color: #00a69a;
  opacity: 0;
  transform: translateY(20px);
}

.projects.active h1 {
  animation: projects-transition 0.5s ease-out 0.2s forwards;
}

.projects-list {
  margin: 50px 0px;
}

.projects-list ul {
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-template-rows: auto;
  padding-inline-start: 0px;
  gap: 70px 60px;
}

.projects-list li {
  padding: 0px 30px 30px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  opacity: 0;
  transform: translateY(30px);
}

.projects.active .projects-list li {
  animation: projects-transition 0.5s ease-out 0.4s forwards;
}

.projects-list figure {
  margin-bottom: 0px;
}

.project-image {
  position: relative;
  bottom: 1.6rem;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  opacity: 0;
  transform: translateY(-20px);
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.5s;
}

.project-image:hover img {
  transform: scale(1.2);
}

.projects.active .project-image {
  animation: projects-transition 0.5s ease-out 0.6s forwards;
}

.project-title {
  font-size: 1.7rem;
  font-weight: 600;
}

.project-info {
  font-family: 'Josefin Sans';
  font-weight: 100;
  line-height: 1;
  margin-bottom: 0px;
}

@media screen and (max-width: 768px) {
  .projects h1 {
    font-size: 4.1rem;
  }

  .projects-list ul {
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }

  .projects-list li {
    padding: 0px 15px 15px;
  }

  .project-title {
    font-size: 1.3rem;
  }
}

@keyframes projects-transition {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
