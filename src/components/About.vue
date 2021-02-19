<template>
  <div id="about" class="row">
    <div class="col-md-12">
      <h1 id="header">About</h1>
    </div>
    <div class="col-md-6 pl-md-4">
      <div class="about">
        <!-- TODO: Make P smaller -->
        <p>I'm a self-taught software engineer who is currently working at Cerner. In my free time, I enjoy contributing to open-source, designing, and working on side projects. Some technologies I enjoy are Typescript, Rust, C#, and Ruby. I have been writing code for 5 years since I first got introduced to web development.
        </p>
        <div class="d-flex justify-content-around">
          <ul>
            <li>HTML</li>
            <li>Css</li>
            <li>Javascript</li>
          </ul>
          <ul>
            <li>HTML</li>
            <li>Css</li>
            <li>Javascript</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6 pl-md-4">
      <img src="../assets/profile-pic.jpg" height="240" width="240" class="profile-pic mx-auto d-block">
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
#header {
  padding: 5.5rem 0 3rem;
  text-align: center;
  font-size: 7.6rem;
  font-weight: bold;
  color: #00a89c;
}

.about p {
  font-size: 1.4em;
  text-align: left;
  font-weight: normal;
  line-height: 1;
}

.about ul {
  display: inline-block;
  list-style: none;
}

.about ul li::before {
  content: "\2022";
  color: #00a89c;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.profile-pic {
  border-radius: 50%;
  border: 3px solid #00a89c;
}

@media (max-width: 768px) {
  #header {
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