<template>
  <div class="row align-items-center">
    <!-- TODO: Increase the H1 font size -->
    <div class="col-md-6 intro ">
      <h1>Ronn Gabiosa</h1>
      <!-- TODO: Increase the P font size  -->
      <p>Hi there! I'm Ronn, your friendly neighborhood developer, who enjoys designing and developing websites, great in both Front and Back end.</p>
    </div>
    <div class="col-md-6 ">
      <img width="500" height="500" src="../assets/pics.jpg" alt="">
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
.intro {}

.intro h1 {
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  color: #00a89c;
}

.intro p {
  font-size: 1.5em;
  /*text-align: left;*/
  font-weight: 200;
  line-height: 1;
}
</style>