<template>
  <section id="about" class="about-section content-wrapper">
    <h2 class="secondary-heading about-heading">About</h2>
    <div class="grid-container">
      <article class="about-article">
        <p class="about-paragraph">
          Hello world! My name is Ronnel and I love building things
          that make work accessible. My interest in web development
          started way back in 2014 when I decided to propose an
          eCommerce platform for medical supplies as my thesis,
          turns-out its the beginning of my constant passion for web
          development.<br /><br />
          Fast forward today, I was retrenched because of pandemic and
          eager to get a job.
        </p>
        <p class="about-paragraph">
          Some of technologies that I've been using
        </p>
        <ul class="tech-skills-list">
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
            src="../assets/images/profile-pic.webp"
            alt="profile-pic-me" />
        </div>
        <div class="about-social-acct">
          <a
            href="https://www.linkedin.com/in/ronngb"
            class="linkedin-link"
            target="_blank">
            <font-awesome-icon
              class="linkedin-icon"
              :icon="['fab', 'linkedin']" />
          </a>
          <a
            href="https://github.com/ronngb"
            class="github-link"
            target="_blank">
            <font-awesome-icon
              class="github-icon"
              :icon="['fab', 'github']" />
          </a>
          <a href="mailto:ronny.gabi@gmail.com" class="envelope-link">
            <font-awesome-icon
              class="envelope-icon"
              :icon="['fas', 'envelope']" />
          </a>
        </div>
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
  &-article {
    opacity: 0;
  }

  &-paragraph {
    margin-bottom: 15px;
    line-height: 1.3;
    font-size: clamp(1.7rem, calc(1.552rem + 0.45vw), 2rem);
  }

  &-social-acct {
    margin-top: 15px;
    text-align: center;

    & > a {
      display: inline-block;
      font-size: 2.4rem;
      margin: 0 5px;
      color: $color-secondary;
      transform: scale(0);
      opacity: 0;
    }
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

.tech-skills-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-family: $josefin-sans;
  padding-inline-start: 20px;
  row-gap: 2px;

  & > li {
    font-size: 1.6rem;

    &::before {
      content: '\2022';
      display: inline-block;
      width: 1em;
      font-weight: bold;
      margin-left: -1em;
      color: $color-primary;
    }
  }
}

.img-container {
  width: 320px;
  height: 320px;
  margin: 0 auto;
  border: 20px solid rgb($color-black, 7%);
  border-radius: 50%;
  opacity: 0;
}

.profile-pic {
  border: 20px solid rgb($color-black, 17%);
  border-radius: 50%;
  max-width: 100%;
}

.about-section.active {
  @for $i from 1 through length($about-component-class-list) {
    .#{nth($about-component-class-list, $i)} {
      animation: fadeInUp 0.5s ease-out $i * 0.2s forwards;
    }
  }
  @for $i from 1 through 3 {
    .about-social-acct :nth-child(#{$i}) {
      animation: fadeInScaleUp
        0.5s
        ease
        (($i * 0.2) + 1) -
        0.2s
        forwards;
    }
  }
}
</style>
