<template>
  <header v-scroll="navbarTransition">
    <nav>
      <a>
        <img
          class="website-logo"
          alt="website logo"
          src="./../assets/logo.png"
        />
      </a>
      <button class="toggle-button" type="button" @click="showMenu = !showMenu">
        <svg class="toggle-icon" viewBox="0 0 60 60">
          <path d="M1 9 H58 M20 29 H58 M38 49 H58" />
        </svg>
      </button>
      <ul :class="{ active: showMenu }" class="site-nav">
        <li class="nav-item">
          <a class="nav-link" href="#intro" @click="showMenu = false">home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about" @click="showMenu = false">
            about
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#project" @click="showMenu = false">
            projects
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">resume</a>
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
          binding.value(el);
        });

        window.addEventListener('resize', () => {
          binding.value(el);
        });
      },
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    navbarTransition(el) {
      let cssProperty =
        window.scrollY == 0
          ? 'padding: 1.3rem 0;'
          : 'padding: .7rem 0;box-shadow: 0 0 20px rgba(0,0,0,.16);';

      if (window.screen.width > 768) {
        el.setAttribute('style', cssProperty);
      } else {
        el.setAttribute('style', 'padding: 0;');
      }
    },
  },
};
</script>
<style lang="scss">
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: $color-white;
  border-bottom: 1px solid rgba($color-black, 0.16);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 10px;
  }
}

.website-logo {
  width: 30px;
  height: 30px;
}

.site-nav {
  display: flex;
  padding-left: 0;
  position: fixed;
  top: 57px;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 57px);
  background-color: $color-white;
  transform: translateX(-320px);
  opacity: 0;
  transition: opacity 0.2s ease-in-out, transform 0.5s ease-in-out;

  &.active {
    transform: translateX(0);
    opacity: 1;
  }
}

.toggle {
  &-button {
    padding: 0.25rem 0.75rem;
    background-color: transparent;
    border: 1px solid #c5c3c6;
    border-radius: 0.25rem;
  }

  &-icon {
    width: 30px;
    height: 30px;
  }

  &-icon path {
    stroke: #46494c;
    stroke-width: 3;
  }
}

.nav-item {
  padding: 0 1.6rem;
}

.nav-link {
  position: relative;
  display: block;
  padding: 0.5rem 0;
  color: black;
  font-weight: 700;
  font-size: 1.4rem;
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
  header {
    padding: 1rem 0;
    transition: all 0.2s ease-in-out;
    border-bottom: 0;

    nav {
      padding: 0.37rem 7rem;
    }
  }

  .site-nav {
    position: static;
    flex-direction: row;
    flex: 0 0 45%;
    opacity: 1;
    height: 0;
    transform: none;
  }

  .nav-link {
    font-size: 1.2rem;

    &:hover,
    &:focus {
      color: #00a69a;
    }

    &::before {
      position: absolute;
      bottom: 7px;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #00a69a;
      border-radius: 25px;
      transform: scaleX(0);
      transition: all 0.12s ease-in-out;
      content: '';
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }

  .toggle-button {
    display: none;
  }

  @for $i from 1 through 4 {
    .nav-item:nth-child(#{$i}) {
      transform: translateY(-10px);
      opacity: 0;
      animation: navbar-trans 0.5s ease-out (($i - 1) + $i) * 0.1s forwards;
    }
  }
}

@keyframes navbar-trans {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
