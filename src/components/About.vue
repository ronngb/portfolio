<template>
  <section class="about">
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
  text-align: center;
  font-size: 6.5rem;
  font-weight: 600;
  color: #00a69a;
  opacity: 0;
  transform: translateY(20px);
}

.about.active h1 {
  animation: about-transition 0.5s ease-out 0.2s forwards;
}

.about article {
  opacity: 0;
  transform: translateY(20px);
}

.about.active article {
  animation: about-transition 0.5s ease-out 0.4s forwards;
}

.about p {
  font-family: 'Josefin Sans';
  font-size: 1.4rem;
  text-align: left;
  font-weight: normal;
  line-height: 1;
  /*padding-left: 5px;*/
}

.about section:nth-child(2) {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  margin: 25px 0px;
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

.skills ul > li::before {
  content: '\2022';
  color: #00a89c;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.profile-pic {
  display: block;
  border-radius: 50%;
  height: 234.5px;
  width: 234.5px;
  margin: 0px auto;
  border: 3px solid #00a89c;
  transform: translateX(500px) rotate(180deg);
  /*clip-path: circle(50% at 50% 50%);*/
}

.about.active .profile-pic {
  animation: about-transition 1.2s ease-out 0.3s forwards;
}

@keyframes about-image-transition {
  to {
    transform: translateY(0);
  }
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
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
