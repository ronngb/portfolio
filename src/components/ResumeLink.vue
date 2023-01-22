<template>
  <section>
    <a
      href="https://ronngb.github.io/resume/"
      class="resume-link"
      target="_blank">
      resume
    </a>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  text-align: center;
  padding: 2rem clamp(0.96rem, calc(-2.192rem + 9.87vw), 12rem);
  @include responsive(md) {
    margin-top: 11.5rem;
  }
  @include responsive(lg) {
    margin-top: clamp(6.7rem, calc(34.4rem + -23.08vw), 11.7rem);
  }
  &.active a {
    animation: fadeInScaleUp 0.3s $easeOutCubic 1s forwards;
  }
}

.resume {
  &-link {
    opacity: 0;
    transform: scale(0);
    display: inline-block;
    padding: 1.5rem 2rem;
    border-radius: 25px;
    background-color: $color-primary;
    color: $color-white;
    font-weight: 700;
    text-transform: uppercase;
    transition: transform 0.15s ease, box-shadow 0.2s ease;
    font-size: clamp(1.5rem, calc(1.36rem + 0.45vw), 1.8rem);
    &:focus,
    &:hover {
      box-shadow: 0 0rem 2rem rgba($color-black, 0.2);
      color: $color-white;
    }
    &:active {
      transform: scale(0.9) !important;
    }
  }
}
</style>
