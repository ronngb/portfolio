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
/*TODO: replace .content-wrapper with section */
.intro {
  display: grid;
  grid-template-columns: repeat(auto-fill, 55% 45%);
}

.intro-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/*TODO: font & image*/

.intro-name,
.intro-pos,
.intro-subtitle {
  animation: intro-transition 0.5s ease-out forwards;
  opacity: 0;
  text-align: left;
  transform: translateY(20px);
}

.intro-name {
  animation-delay: 0.8s;
  color: #00a698;
  font-size: 5.5rem;
}

.intro-pos {
  animation-delay: 0.9s;
  color: rgba(0, 166, 154, 0.75);
  font-size: 3rem;
  padding-left: 2px;
}

.intro-subtitle {
  animation-delay: 1s;
  font-size: 2rem;
  padding-left: 5px;
}

.hero-image {
  /*  background-image: url('../assets/pics.png');
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;*/
  width: 100%;
  opacity: 0;
  transform: translateX(20px);
  animation: intro-image-transition 0.5s ease-out 1.2s forwards;
}

@media screen and (max-width: 768px) {
  .intro {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 15px 0;
  }

  .intro-name {
    font-size: 4.4rem;
  }

  /*.intro h2 {
    font-size: 2rem;
  }

  .intro p {
    font-size: 1.5rem;
    line-height: 1;
  }*/
}

@keyframes intro-image-transition {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes intro-transition {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
