<template>
  <section class="about">
    <!-- remove this .content-wrapper -->
    <div class="content-wrapper">
      <h1>About</h1>
      <section>
        <article>
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
        <figure>
          <img
            src="../assets/profile-pic.jpg"
            class="profile-pic"
            alt="profile-pic"
          />
        </figure>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
};
</script>
<style>
.about h1 {
  color: #00a69a;
  font-weight: 600;
  font-size: 6.5rem;
  text-align: center;
  transform: translateY(20px);
  opacity: 0;
}

.about.active h1 {
  animation: about-transition 0.5s ease-out 0.2s forwards;
}

.about article {
  transform: translateY(20px);
  opacity: 0;
}

.about.active article {
  animation: about-transition 0.5s ease-out 0.4s forwards;
}

.about p {
  font-weight: normal;
  font-size: 1.4rem;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1;
  text-align: left;
  /*padding-left: 5px;*/
}

.about section:nth-child(2) {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  margin: 25px 0;
}

.skills ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-family: 'Josefin Sans', sans-serif;
  list-style: none;
  padding-inline-start: 20px;
}

.skills ul > li {
  font-size: 1rem;
}

.skills ul > li::before {
  display: inline-block;
  width: 1em;
  margin-left: -1em;
  color: #00a89c;
  font-weight: bold;
  content: '\2022';
}

.profile-pic {
  display: block;
  width: 234.5px;
  height: 234.5px;
  margin: 0 auto;
  border: 3px solid #00a89c;
  border-radius: 50%;
  transform: translateX(500px) rotate(180deg);
  /*clip-path: circle(50% at 50% 50%);*/
}

.about.active .profile-pic {
  animation: about-transition 1.2s ease-out 0.3s forwards;
}

@media screen and (max-width: 768px) {
  .about h1 {
    font-size: 4.1rem;
  }

  .about section:nth-child(2) {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  }

  .about p {
    font-size: 1.4rem;
  }

  .skills ul {
    grid-template-columns: 65% 1fr;
  }

  .profile-pic {
    margin: 25px auto;
  }
}

@keyframes about-transition {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes about-image-transition {
  to {
    transform: translateY(0);
  }
}
</style>
