<template>
  <section id="intro" class="grid-container content-wrapper">
    <div>
      <h1 class="primary-heading">
        <span class="primary-heading-main">Ronnel Gabiosa</span>
        <span class="primary-heading-sub">Web Developer</span>
      </h1>
      <p class="intro-paragraph">
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
section {
  place-items: center;

  @include responsive(md) {
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
// .intro {
//   &-section {
//     @include grid-on-section(290px);
//     place-items: center;
//   }

//   &-name {
//     @include heading-animation-delay(0.8s);
//     @include gradient-heading-direction(to right);
//     font-size: clamp(3rem, calc(2.27rem + 3.64vw), 5.46rem);
//     line-height: 1;
//   }

//   &-pos {
//     @include heading-animation-delay(0.9s);
//     @include gradient-heading-direction(to left);
//     font-size: clamp(2rem, calc(1.67rem + 1.66vw), 3.12rem);
//     padding-left: 2px;
//   }

//   &-subtitle {
//     @include heading-animation-delay(1s);
//     font-size: clamp(1.33rem, calc(1.11rem + 1.1vw), 2.07rem);
//     padding-left: 5px;
//   }
// }

// @media screen and (min-width: 768px) {
//   .intro-section {
//     grid-template-columns: 55% 45%;
//   }
// }
</style>
