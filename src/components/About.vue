<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="about">
        <h1>About</h1>
        <!-- TODO: Make it center -->
        <p>I'm a self-taught software engineer who is currently working at Cerner. In my free time, I enjoy contributing to open-source, designing, and working on side projects. Some technologies I enjoy are Typescript, Rust, C#, and Ruby. I have been writing code for 5 years since I first got introduced to web development.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  components: {},
};
</script>
<style>
.about h1 {
  text-align: center;
  font-size: 5.8rem;
  font-weight: bold;
  color: #00a89c;
}

.about p {
  font-size: 1.75em;
  /*text-align: left;*/
  font-weight: normal;
  line-height: 1;
}
</style>