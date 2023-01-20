<template>
  <header v-scroll="navbarTransition" class="navbar-header">
    <a class="navbar-logo-link" href="/">
      <img
        class="navbar-logo"
        alt="website logo"
        src="@/assets/img/logo.svg" />
    </a>
    <button
      class="navbar-button border-solid"
      type="button"
      ref="navbarBtn"
      @click="toggleMenu()">
      <i class="navbar-icon"></i>
    </button>
    <div class="navbar-bg"></div>
    <nav class="navbar-nav">
      <ul class="navbar-list">
        <li class="navbar-item">
          <a href="#intro" class="navbar-link" @click="toggleMenu()">
            Home
          </a>
        </li>
        <li class="navbar-item">
          <a href="#about" class="navbar-link" @click="toggleMenu()"
            >About
          </a>
        </li>
        <li class="navbar-item">
          <a
            href="#project"
            class="navbar-link"
            @click="toggleMenu()">
            Project
          </a>
        </li>
        <li class="navbar-item">
          <a href="#resume" class="navbar-link" @click="toggleMenu()">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  directives: {
    scroll: {
      inserted(el, binding) {
        window.addEventListener('scroll', () => {
          binding.value(el)
        })
      },
    },
  },
  data() {
    return {
      showMenu: false,
      lastScroll: 0,
    }
  },
  methods: {
    toggleMenu() {
      if (window.screen.width < 992) {
        this.$refs.navbarBtn.classList.toggle('active')
        document.body.classList.toggle('backdrop-open')
      }
    },
    navbarTransition(el) {
      if (window.screen.width > 992) {
        if (window.scrollY == 0) {
          el.classList.remove('shadow')
        } else if (window.scrollY < this.lastScroll) {
          el.classList.add('shadow')
          el.classList.remove('hide')
        } else {
          el.classList.add('hide')
        }
        this.lastScroll = window.scrollY
      }
    },
  },
}
</script>
<style lang="scss" scoped>
%icon-init {
  content: '';
  position: absolute;
  width: 3rem;
  height: 0.3rem;
  background: $color-secondary;
  border-radius: 5px;
  transition: all 0.3s ease-out;
}

.navbar {
  &-header {
    position: relative;
    z-index: 100;
    background-color: #fcfcfc;
    padding: 1.5rem clamp(0.96rem, calc(-1.456rem + 9.55vw), 10rem);
    transition: transform 0.18s ease-out, box-shadow 0.18s ease-in-out,
      padding 0.18s ease-in-out;
    @include responsive(lg) {
      position: sticky;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &.shadow {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
      padding: 0.5rem clamp(0.96rem, calc(-1.456rem + 9.55vw), 10rem);
    }
    &.hide {
      transform: translateY(-100%);
      transition: transform 0.18s ease-in-out;
    }
  }

  &-logo {
    width: 5.6rem;
  }

  &-button {
    border-radius: 50%;
    height: 5.6rem;
    width: 5.6rem;
    border: 1px solid black;
    border: none;
    position: fixed;
    top: 1.4rem;
    right: 3rem;
    z-index: 10;
    background: #fff;
    box-shadow: 0 1rem 3rem rgba($color-black, 0.1);
    text-align: justify;
    transition: all 0.5s ease-in-out;
    @include responsive(lg) {
      display: none;
    }

    &.active {
      .navbar-icon {
        transform: translateX(-50px);
        background: transparent;
        box-shadow: none;

        &::before {
          transform: rotate(45deg) translate(35px, -35px);
        }
        &::after {
          transform: rotate(-45deg) translate(35px, 35px);
        }
      }

      & ~ .navbar-nav {
        opacity: 1;
        transform: translateX(0);
      }

      & ~ .navbar-bg {
        transform: scale(80);
      }
    }
  }
  &-icon {
    display: block;
    width: 3rem;
    height: 0.3rem;
    background: $color-secondary;
    border-radius: 5px;
    margin: 0 auto;
    transition: all 0.3s ease-out;

    &::before {
      @extend %icon-init;
      transform: translateY(-10px);
    }
    &::after {
      @extend %icon-init;
      transform: translateY(10px);
    }
  }

  &-bg {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    position: fixed;
    top: 1.9rem;
    right: 3.3rem;
    background-image: radial-gradient(
      $color-gradient,
      $color-primary
    );
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    @include responsive(lg) {
      display: none;
    }
  }

  &-nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    transform: translateX(-100vw);
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    @include responsive(lg) {
      position: unset;
      opacity: 1;
      height: 100%;
      width: fit-content;
      transform: translateX(0);
    }
  }

  &-list {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding-inline-start: 0;
    @include responsive(lg) {
      display: list-item;
    }
  }
  &-item {
    @include responsive(lg) {
      display: inline-block;
      margin: 0 2.5rem;
      opacity: 0;
      transform: translateY(-10px);

      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          animation: fadeInUp
            0.5s
            ease-out
            (($i - 1) + $i) *
            0.1s
            forwards;
        }
      }
    }
  }

  &-link {
    font-size: 3rem;
    font-weight: 300;
    color: $color-white;
    text-transform: uppercase;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      $color-white 50%
    );
    background-size: 225%;
    transition: all 0.4s;
    @include responsive(lg) {
      font-size: 1.92rem;
      color: $color-secondary;
      font-weight: 700;
      background-image: unset;
    }

    &:hover,
    &:active,
    &:focus {
      color: $color-black;
      transform: translateX(1rem);
      @include responsive(lg) {
        color: $color-primary;
        transform: unset;
        &::after {
          transform: scaleX(1);
        }
      }
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: $color-primary;
      border-radius: 25px;
      transform: scaleX(0);
      transition: all 0.12s ease-in-out;
    }
  }
}
</style>
