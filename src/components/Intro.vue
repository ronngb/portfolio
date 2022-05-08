<template>
  <section id="intro-section" class="content-wrapper">
    <div class="intro-main">
      <hgroup>
        <h1 class="intro-name ">Ronnel Gabiosa</h1>
        <h2 class="intro-pos">Web Developer</h2>
      </hgroup>
      <p class="intro-subtitle">
        Hi there! I'm Ronnel, your friendly neighborhood developer, who enjoys
        designing and developing websites, great in both Front and Back end.
      </p>
    </div>
    <img
      class="hero-image "
      src="../assets/hero-image-sm.webp"
      srcset="
        ../assets/hero-image-sm.webp  500w,
        ../assets/hero-image-md.webp 1000w,
        ../assets/hero-image-lg.webp 1500w
      "
      alt="hero image"
    />
  </section>
</template>
<script>
export default { name: 'Intro' }
</script>
<style lang="scss" scoped>
#intro-section {
  @include grid-on-section(290px);
  place-items: center;
}

.intro {
  &-name {
    @include heading-animation-delay(0.8s);
    @include gradient-heading-direction(to right);
    font-size: clamp(3rem, calc(2.27rem + 3.64vw), 5.46rem);
    line-height: 1;
  }

  &-pos {
    @include heading-animation-delay(0.9s);
    @include gradient-heading-direction(to left);
    font-size: clamp(2rem, calc(1.67rem + 1.66vw), 3.12rem);
    padding-left: 2px;
  }

  &-subtitle {
    @include heading-animation-delay(1s);
    font-size: clamp(1.33rem, calc(1.11rem + 1.1vw), 2.07rem);
    padding-left: 5px;
  }
}

.hero-image {
  width: 100%;
  max-width: 475px;
  transform: translateX(20px);
  opacity: 0;
  animation: slide-left 0.5s ease-out 1.2s forwards;
}

@media screen and (min-width: 768px) {
  #intro-section {
    grid-template-columns: 55% 45%;
  }

  .hero-image {
    max-width: 100%;
  }
}

@media screen and (min-width: 1200px) {
}
</style>
