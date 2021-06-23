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
  components: {},
};
</script>
<style>
.projects h1 {
  text-align: center;
  font-size: 6.5rem;
  font-weight: 600;
  color: #00a69a;
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

.projects-list figure {
  margin-bottom: 0px;
}

.projects-list li {
  padding: 0px 30px 30px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
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

.project-image img {
  position: relative;
  bottom: 1.6rem;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
  max-width: 100%;
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
</style>
