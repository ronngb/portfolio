<template>
  <section id="section-intro" class="content-wrapper">
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
<style lang="scss">
#section-intro {
  @include style-all-grid(repeat(auto-fill, minmax(290px, 1fr)));
  font-size: 1rem;
}

%intro-placeholder {
  text-align: left;
  transform: translateY(20px);
  opacity: 0;
  animation: intro-transition 0.5s ease-out forwards;
}

.intro {
  &-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &-name {
    line-height: 1;
    @extend %intro-placeholder;
    @include style-intro-text(to right);
    @include style-intro(3em, 0.8s);
  }

  &-pos {
    @extend %intro-placeholder;
    @include style-intro-text(to left);
    @include style-intro(2em, 0.9s, 2px);
  }

  &-subtitle {
    @extend %intro-placeholder;
    @include style-intro(1.33em, 1s, 5px);
  }
}

.hero-image {
  width: 100%;
  max-width: 475px;
  transform: translateX(20px);
  opacity: 0;
  animation: intro-image-transition 0.5s ease-out 1.2s forwards;
}

@media screen and (min-width: 768px) {
  #section-intro {
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
  #section-intro {
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
