<template>
  <div class="row align-items-center">
    <!-- TODO: Increase the H1 font size -->
    <div class="col-md-6">
      <div class="intro">
        <h1 class="mb-md-4">Ronn Gabiosa</h1>
        <!-- TODO: Increase the P font size  -->
        <p>Hi there! I'm Ronn, your friendly neighborhood developer, who enjoys designing and developing websites, great in both Front and Back end.</p>
      </div>
    </div>
    <div class="col-md-6">
      <img class="img-fluid" src="../assets/pics.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  components: {},
};
</script>
<style>
.intro h1 {
  text-align: left;
  font-size: 5.5rem;
  font-weight: bold;
  color: #00a89c;
}

.intro p {
  font-size: 2.2rem;
  /*text-align: left;*/
  font-weight: normal;
  line-height: 1;
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