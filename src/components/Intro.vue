<template>
  <section id="intro" class="grid-container content-wrapper">
    <div>
      <h1 class="primary-heading">
        <span class="primary-heading-main">Ronnel Gabiosa</span>
        <span class="primary-heading-sub">Web Developer</span>
      </h1>
      <p class="intro-paragraph">
        Hi there! I'm Ronnel, your friendly neighborhood developer,
        who enjoys designing and developing websites, good in both
        Front and Back end.
      </p>
    </div>
    <img
      class="hero-image"
      src="../assets/images/hero-image.webp"
      alt="hero image" />
  </section>
</template>
<script>
export default { name: 'Intro' }
</script>
<style lang="scss" scoped>
section {
  place-items: center;
  @include responsive(lg) {
    grid-template-columns: 55% 45%;
  }
}

.intro-paragraph {
  opacity: 0;
  padding-left: 5px;
  font-size: clamp(2.128rem, calc(1.776rem + 1.1vw), 3.312rem);
  animation: fadeInUp 0.5s ease-out 1s forwards;
}

.hero-image {
  transform: translateX(20px);
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out 1.2s forwards;
  width: 100%;
}
</style>
