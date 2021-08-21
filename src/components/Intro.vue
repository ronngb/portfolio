<template>
  <!-- TODO: 
             * check the media before 768 (800px)
             * add margin in every section i.e intro,about-->
  <section class="intro">
    <article class="intro-main">
      <h1 class="intro-name">Ronnel Gabiosa</h1>
      <h2 class="intro-pos">Web Developer</h2>
      <p class="intro-subtitle">
        Hi there! I'm Ronnel, your friendly neighborhood developer, who enjoys
        designing and developing websites, great in both Front and Back end.
      </p>
    </article>
    <img class="hero-image" src="../assets/pics-1500.webp" alt="hero image" />
  </section>
</template>
<script>
export default { name: 'Intro' };
</script>
<style>
.intro {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 15px 0;
  font-size: 1rem;
}

.intro-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.intro-name,
.intro-pos,
.intro-subtitle {
  text-align: left;
  transform: translateY(20px);
  opacity: 0;
  animation: intro-transition 0.5s ease-out forwards;
}

.intro-name {
  color: #00a698;
  font-size: 3em;
  line-height: 1;
  animation-delay: 0.8s;
}

.intro-pos {
  padding-left: 2px;
  color: rgba(0, 166, 154, 0.75);
  font-size: 2em;
  animation-delay: 0.9s;
}

.intro-subtitle {
  padding-left: 5px;
  font-size: 1.33em;
  animation-delay: 1s;
}

.hero-image {
  width: 100%;
  max-width: 475px;
  transform: translateX(20px);
  opacity: 0;
  animation: intro-image-transition 0.5s ease-out 1.2s forwards;
}

@media screen and (min-width: 768px) {
  .intro {
    grid-template-columns: 55% 45%;
    font-size: 1.1rem;
  }

  .intro-name {
    font-size: 3em;
  }

  .hero-image {
    max-width: 100%;
  }
}

@media screen and (min-width: 1100px) {
  .intro {
    font-size: 1.56rem;
  }

  .intro-name {
    font-size: 3.5em;
  }
}

@keyframes intro-image-transition {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes intro-transition {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
