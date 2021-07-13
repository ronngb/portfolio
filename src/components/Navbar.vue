<template>
  <header v-scroll="navbarTransition">
    <nav class="">
      <a>
        <figure class="website-logo">
          <img alt="website logo" src="./../assets/logo.png" />
        </figure>
      </a>
      <button class="toggle-button" type="button" @click="showMenu = !showMenu">
        <svg class="toggle-icon" viewBox="0 0 60 60">
          <path d="M1 9 H58 M20 29 H58 M38 49 H58" />
        </svg>
      </button>
      <ul :class="{ active: showMenu }">
        <li class="nav-item">
          <a href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a href="#about" @click="showMenu = false">
            ABOUT
          </a>
        </li>
        <li class="nav-item">
          <a href="#">PROJECTS</a>
        </li>
        <li class="nav-item">
          <a href="#">RESUME</a>
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
          ? 'padding: 1.3rem 0rem;'
          : 'padding: .7rem 0rem;box-shadow: 0 0 20px rgba(0,0,0,.16);';

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
  background-color: white;
  padding: 1rem 0rem;
  transition: all 0.2s ease-in-out;
}

header nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 9%;
}

.website-logo {
  margin-bottom: 0rem;
}

.website-logo img {
  width: 30px;
  height: 30px;
}

nav ul {
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

nav .toggle-button {
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

nav ul > li {
  padding: 0 1.6rem;
}

.nav-item a {
  position: relative;
  font-size: 1.2rem;
  font-weight: 700;
  color: black;
  padding: 0.5rem 0rem;
  display: block;
}

@media screen and (max-width: 768px) {
  header {
    padding: 0rem !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  }

  header nav {
    padding: 8px 10px;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 57px;
    opacity: 0;
    background-color: white;
    height: calc(100vh - 57px);
    width: 100vw;
    transition: opacity 0.2s ease-in-out, transform 0.5s ease-in-out;
    transform: translateX(-20rem);
  }

  nav ul.active {
    opacity: 1;
    transform: translateX(0px);
  }

  .nav-item a {
    font-size: 1.4rem;
    text-align: center;
  }
}

@media screen and (min-width: 769px) {
  @keyframes navbar {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  nav ul :nth-child(n + 1) {
    opacity: 0;
    transform: translateY(-10px);
    animation: navbar 0.5s ease-out forwards;
  }

  nav ul :nth-child(1) {
    animation-delay: 0.1s;
  }
  nav ul :nth-child(2) {
    animation-delay: 0.3s;
  }
  nav ul :nth-child(3) {
    animation-delay: 0.5s;
  }
  nav ul :nth-child(4) {
    animation-delay: 0.7s;
  }

  nav .toggle-button {
    display: none;
  }

  nav ul {
    flex: 0 0 45%;
  }
  .nav-item a:hover,
  .nav-item a:focus {
    text-decoration: none;
    color: #00a69a;
  }

  .nav-item a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 7px;
    left: 0;
    background-color: #00a69a;
    border-radius: 25px;
    transform: scaleX(0);
    transition: all 0.12s ease-in-out;
  }

  .nav-item a:hover::before {
    transform: scaleX(1);
  }
}
</style>
