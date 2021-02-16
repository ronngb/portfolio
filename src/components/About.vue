<template>
  <div class="row">
    <div class="col-md-12 ">
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
  padding: 5.5rem 0 3rem;
  text-align: center;
  font-size: 7.6rem;
  font-weight: bold;
  color: #00a89c;
}

.about p {
  font-size: 2.4rem;
  text-align: left;
  font-weight: normal;
  line-height: 1;
}

@media (max-width: 768px) {
  .about h1 {
    font-size: 4.5rem;
  }

  .about p {
    font-size: 1.5rem;
    font-weight: normal;
    text-align: left;
    line-height: 1;
  }
}
</style>