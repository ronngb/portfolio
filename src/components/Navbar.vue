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
          <a class="nav-link" href="#intro">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about" @click="showMenu = false">
            ABOUT
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#project">PROJECTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">RESUME</a>
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
      }
    },
  },
};
</script>
<style>
header {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
  background-color: white;
  transition: all 0.2s ease-in-out;
}

header nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 9%;
}

.website-logo {
  width: 30px;
  height: 30px;
}

.site-nav {
  display: flex;
  margin-bottom: 0;
  padding-left: 0;
}

.toggle-button {
  padding: 0.25rem 0.75rem;
  background-color: transparent;
  border: 1px solid #c5c3c6;
  border-radius: 0.25rem;
}

.toggle-icon {
  width: 30px;
  height: 30px;
}

.toggle-icon path {
  stroke: #46494c;
  stroke-width: 3;
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
  font-size: 1.2rem;
}

@media screen and (max-width: 768px) {
  header {
    padding: 0 !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  }

  header nav {
    padding: 8px 10px;
  }

  .site-nav {
    position: fixed;
    top: 57px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 57px);
    background-color: white;
    transform: translateX(-20rem);
    opacity: 0;
    transition: opacity 0.2s ease-in-out, transform 0.5s ease-in-out;
  }

  .site-nav.active {
    transform: translateX(0);
    opacity: 1;
  }

  .nav-link {
    text-align: center;
  }
}

@media screen and (min-width: 769px) {
  li.nav-item:nth-child(n + 1) {
    transform: translateY(-10px);
    opacity: 0;
    animation: navbar-trans 0.5s ease-out forwards;
  }

  li.nav-item:nth-child(1) {
    animation-delay: 0.1s;
  }
  li.nav-item:nth-child(2) {
    animation-delay: 0.3s;
  }
  li.nav-item:nth-child(3) {
    animation-delay: 0.5s;
  }
  li.nav-item:nth-child(4) {
    animation-delay: 0.7s;
  }

  .toggle-button {
    display: none;
  }

  .site-nav {
    flex: 0 0 45%;
  }
  a.nav-link:hover,
  a.nav-link:focus {
    color: #00a69a;
  }

  a.nav-link::before {
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

  a.nav-link:hover::before {
    transform: scaleX(1);
  }
}

@keyframes navbar-trans {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
