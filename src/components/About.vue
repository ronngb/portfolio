<template>
  <section class="about">
    <h1 class="section-heading">About</h1>
    <article>
      <p class="about-subtitle">
        Hello world! My name is Ronnel and I love building things that make work
        accessible. My interest in web development started way back in 2014 when
        I decided to propose an eCommerce platform for medical supplies as my
        thesis, turns-out its the beginning of my constant passion for web
        development.
      </p>
      <p class="about-subtitle">
        In my free time, I developed open source project. Fast forward today, I
        was retrenched because of the pandemic and hoping to get a job.
      </p>
      <p class="about-subtitle">
        Some of technologies that I've been using
      </p>
      <ul class="tech-skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript (ES6)</li>
        <li>PHP</li>
        <li>Vue</li>
        <li>Laravel</li>
      </ul>
    </article>
    <img
      src="../assets/profile-pic.jpg"
      class="profile-pic"
      alt="profile-pic"
    />
  </section>
</template>
<script>
export default {
  name: 'About',
};
</script>
<style>
.about {
  display: grid;
  grid-template-columns: 1fr repeat(auto-fill, minmax(330px, 1fr));
  gap: 15px 0;
  overflow: hidden;
}

.section-heading {
  grid-column: 1/2;
  color: var(--persian-green);
  font-size: 3.4rem;
  text-align: center;
  transform: translateY(-20px);
  opacity: 0;
}

.about article {
  transform: translateY(-20px);
  opacity: 0;
}

.about-subtitle {
  margin-bottom: 15px;
  font-size: 1.31rem;
}

.tech-skills {
  display: grid;
  grid-template-columns: 65% 1fr;
  gap: 2px 0;
  font-family: 'Josefin Sans', sans-serif;
  padding-inline-start: 20px;
}

.tech-skills > li {
  font-size: 1rem;
}

.tech-skills > li::before {
  display: inline-block;
  width: 1em;
  margin-left: -1em;
  color: var(--persian-green);
  font-weight: bold;
  content: '\2022';
}

.profile-pic {
  width: 234.5px;
  height: 234.5px;
  margin: 0 auto;
  border: 3px solid var(--persian-green);
  border-radius: 50%;
  transform: translateX(500px) rotate(180deg);
  /*clip-path: circle(50% at 50% 50%);*/
}

.about.active .section-heading {
  animation: about-transition 0.5s ease-out 0.2s forwards;
}

.about.active article {
  animation: about-transition 0.5s ease-out 0.4s forwards;
}

.about.active .profile-pic {
  animation: about-transition 1.2s ease-out 0.3s forwards;
}

@media screen and (min-width: 768px) {
  .about {
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  }

  .section-heading {
    grid-column: 1 / 3;
    font-size: 6.2rem;
  }

  .tech-skills {
    grid-template-columns: repeat(2, 1fr);
  }

  .profile-pic {
    margin-top: 20px;
  }
}

@keyframes about-transition {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes about-image-transition {
  to {
    transform: translateY(0);
  }
}
</style>
