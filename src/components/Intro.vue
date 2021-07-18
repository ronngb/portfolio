<template>
  <section class="intro">
    <div class="content-wrapper">
      <article>
        <h1>Ronnel Gabiosa</h1>
        <h2>Web Developer</h2>
        <p>
          Hi there! I'm Ronnel, your friendly neighborhood developer, who enjoys
          designing and developing websites, great in both Front and Back end.
        </p>
      </article>
      <figure>
        <img class="hero-image" src="../assets/pics.png" alt="hero image" />
      </figure>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Intro',
};
</script>
<style>
.intro div {
  display: grid;
  grid-template-columns: repeat(auto-fill, 55% 45%);
}

.intro article {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.intro h1 {
  text-align: left;
  font-size: 5.5rem;
  font-weight: 600;
  margin: 0;
  color: #00a698;
  opacity: 0;
  transform: translateY(20px);
  animation: intro-transition 0.5s ease-out 0.8s forwards;
}

.intro h2 {
  font-size: 3rem;
  text-align: left;
  font-weight: 600;
  padding-left: 2px;
  color: rgba(0, 166, 154, 0.75);
  opacity: 0;
  transform: translateY(20px);
  animation: intro-transition 0.5s ease-out 0.9s forwards;
}

.intro p {
  font-family: 'Josefin Sans';
  font-size: 2.1rem;
  text-align: left;
  line-height: 1.1;
  padding-left: 5px;
  opacity: 0;
  transform: translateY(20px);
  animation: intro-transition 0.5s ease-out 1s forwards;
}

figure .hero-image {
  max-width: 100%;
  height: auto;
  opacity: 0;
  transform: translateX(20px);
  animation: intro-image-transition 0.5s ease-out 1.2s forwards;
}

@media screen and (max-width: 768px) {
  .intro div {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  }

  .intro h1 {
    font-size: 3.1rem;
  }

  .intro h2 {
    font-size: 2rem;
  }

  .intro p {
    font-size: 1.5rem;
    line-height: 1;
  }
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
