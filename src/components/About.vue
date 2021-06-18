<template>
  <section class="about">
    <div class="content-wrapper">
      <h1>About</h1>
      <!-- TODO: place a margin or padding in div .row -->
      <div class="row row-wrapper no-gutters">
        <article class="col-md-6">
          <p>
            I'm a self-taught software engineer who is currently working at
            Cerner. In my free time, I enjoy contributing to open-source,
            designing, and working on side projects. Some technologies I enjoy
            are Typescript, Rust, C#, and Ruby. I have been writing code for 5
            years since I first got introduced to web development.
          </p>
          <p>Some of technologies that I've been using lately</p>
          <section class="skills">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript (ES6)</li>
              <li>PHP</li>
              <li>Vue</li>
              <li>Laravel</li>
            </ul>
          </section>
        </article>
        <figure class="col-md-6">
          <img
            src="../assets/profile-pic.jpg"
            class="profile-pic"
            alt="profile-pic"
          />
        </figure>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
  components: {},
};
</script>
<style>
/* #00a69a - Persian Green
   #dcdcdd - Gainsboro
   #c5c3c6 - Silver
   #46494c - Davys Grey
   #4c5c68 - Black Coral
*/

.about h1 {
  text-align: center;
  font-size: 6.5rem;
  font-weight: 600;
  color: #00a69a;
}

.about article > p {
  font-family: 'Josefin Sans';
  font-size: 1.4rem;
  text-align: left;
  font-weight: normal;
  line-height: 1;
}

.skills ul {
  display: grid;
  list-style: none;
  font-family: 'Josefin Sans';
  grid-template-columns: repeat(2, 1fr);
  padding-inline-start: 20px;
}

.skills ul > li {
  font-size: 1rem;
}

/*recreate*/
.skills ul > li::before {
  content: '\2022';
  color: #00a89c;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

figure .profile-pic {
  display: block;
  border-radius: 50%;
  height: 234.5px;
  width: 234.5px;
  margin: 0px auto;
  border: 3px solid #00a89c;
  /*clip-path: circle(50% at 50% 50%);*/
}

.row-wrapper {
  margin: 50px 0px;
}

@media (max-width: 768px) {
  .about h1 {
    text-align: center;
    font-size: 4.1rem;
    font-weight: 600;
    color: #00a69a;
  }

  .about p {
    font-size: 1.4rem;
    text-align: center;
    line-height: 1;
  }

  .skills ul {
    grid-template-columns: 65% 1fr;
  }

  figure .profile-pic {
    margin: 25px auto;
  }

  .row-wrapper {
    margin: 25px 0px;
  }
}
</style>
