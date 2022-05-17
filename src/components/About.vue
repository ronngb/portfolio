<template>
  <section id="about" class="about-section content-wrapper">
    <h2 class="about-heading">About</h2>
    <div class="grid-container">
      <article class="about-article">
        <p class="about-subtitle">
          Hello world! My name is Ronnel and I love building things that make
          work accessible. My interest in web development started way back in
          2014 when I decided to propose an eCommerce platform for medical
          supplies as my thesis, turns-out its the beginning of my constant
          passion for web development.
        </p>
        <p class="about-subtitle">
          In my free time, I developed open source project. Fast forward today,
          I was retrenched because of the pandemic and hoping to get a job.
        </p>
        <p class="about-subtitle">
          Some of technologies that I've been using
        </p>
        <ul class="tech-skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript (ES6)</li>
          <li>PHP</li>
          <li>Vue</li>
          <li>Laravel</li>
        </ul>
      </article>
      <div>
        <div class="img-container">
          <img
            class="profile-pic"
            src="../assets/profile-pic.webp"
            alt="profile-pic-me"
          />
        </div>
        <p class="about-social-acct">
          <a
            href="https://www.linkedin.com/in/ronnel-g-3103881b1/"
            class="linkedin-link"
            target="_blank"
          >
            <font-awesome-icon
              class="linkedin-icon"
              :icon="['fab', 'linkedin']"
            />
          </a>
          <a
            href="https://github.com/ronngb"
            class="github-link"
            target="_blank"
          >
            <font-awesome-icon class="github-icon" :icon="['fab', 'github']" />
          </a>
          <a href="mailto:ronny.gabi@gmail.com" class="envelope-link">
            <font-awesome-icon
              class="envelope-icon"
              :icon="['fas', 'envelope']"
            />
          </a>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
}
</script>
<style lang="scss" scoped>
.about {
  &-section {
    grid-column: 1/-1;
  }

  &-article {
    transform: translateY(20px);
    opacity: 0;
  }
  &-heading {
    @include default-sub-heading-style;
    @include gradient-heading-direction(to right);
    font-size: clamp(3.4rem, calc(2.31rem + 5.46vw), 6.2rem);
  }
  &-subtitle {
    margin-bottom: 15px;
    font-size: 1.31rem;
  }
  &-social-acct {
    margin-top: 15px;
    text-align: center;
  }

  &-social-acct > a {
    display: inline-block;
    font-size: 1.5rem;
    margin: 0 5px;
    color: $color-secondary;
    transform: scale(0);
    opacity: 0;
  }
}

:hover {
  @at-root .linkedin-icon#{&} {
    color: #0077b5;
  }
  @at-root .github-icon#{&} {
    color: #000;
  }
  @at-root .envelope-icon#{&} {
    color: #ef4136;
  }
}

.tech-skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-family: 'Josefin Sans', sans-serif;
  padding-inline-start: 20px;
  row-gap: 2px;

  & > li {
    font-size: 1rem;

    &::before {
      display: inline-block;
      width: 1em;
      margin-left: -1em;
      color: $color-primary;
      font-weight: bold;
      content: '\2022';
    }
  }
}

.img-container {
  width: 320px;
  height: 320px;
  margin: 0 auto;
  border: 20px solid rgb($color-black, 7%);
  border-radius: 50%;
  transform: translateY(20px);
  opacity: 0;
}

.profile-pic {
  border: 20px solid rgb($color-black, 17%);
  border-radius: 50%;
  max-width: 100%;
}

.about-section.active {
  @for $i from 1 through length($class-about-active) {
    .#{nth($class-about-active, $i)} {
      animation: fadeInLeft 0.5s ease-out $i * 0.2s forwards;
    }
  }

  @for $i from 1 through 3 {
    .about-social-acct :nth-child(#{$i}) {
      animation: fadeInScaleUp 0.5s ease (($i * 0.2) + 1) - 0.2s forwards;
    }
  }

  .img-container {
    animation: fadeInUp 0.8s ease 0.6s forwards;
  }
}
</style>
