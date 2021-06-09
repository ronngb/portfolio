<template>
  <section>
    <!-- TODO: place a content wrapper in every section -->
    <div class="row no-gutters content-wrapper">
      <div class="intro col-md-7 align-self-center">
        <h1>Ronnel Gabiosa</h1>
        <h2>Web Developer</h2>
        <p>
          Hi there! I'm Ronn, your friendly neighborhood developer, who enjoys
          designing and developing websites, great in both Front and Back end.
        </p>
      </div>
      <div class="col-md-5">
        <figure>
          <img class="img-fluid" src="../assets/pics.png" alt="hero image" />
        </figure>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Intro',
  components: {},
};
</script>
<style>
.intro h1 {
  text-align: left;
  font-size: 5.5rem;
  font-weight: 600;
  margin: 0;
  color: #00a698;
}

.intro h2 {
  font-size: 3rem;
  text-align: left;
  font-weight: 600;
  padding-left: 2px;
  color: rgba(0, 166, 154, 0.75);
}

.intro p {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2.1rem;
  text-align: left;
  line-height: 1.1;
  padding-left: 5px;
}

@media (max-width: 768px) {
  .intro h1 {
    font-size: 3.1rem;
    margin: 3rem 0rem 2rem;
  }

  .intro p {
    font-size: 1.5rem;
    font-weight: normal;
    line-height: 1;
  }
}
</style>
