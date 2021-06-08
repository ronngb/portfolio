<template>
  <header v-scroll="navbarTransition" class="sticky-top">
    <nav class="navbar navbar-expand-md navbar-light bg-white">
      <div class="container">
        <a class="navbar-brand">
          <figure class="logo" style="margin-bottom: 0rem;">
            <img alt="website logo" src="./../assets/logo.png" />
          </figure>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          @click="showMenu = !showMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbar_list-item"
          class="d-md-block"
          :class="{ active: showMenu }"
        >
          <ul id="nav-links" class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">HOME</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#about" @click="showMenu = false">
                ABOUT
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">PROJECTS</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">RESUME</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    navbarTransition(evt, el) {
      let cssProperty =
        window.scrollY == 0
          ? "padding: 1rem 0rem;"
          : "padding: .5rem 0rem;box-shadow: 0 0 20px rgba(0,0,0,.16);";

      if (window.screen.width > 768) {
        el.setAttribute("style", cssProperty);
      }
    },
  },
};
</script>
<style>
/*header*/
header {
  background-color: white;
  padding: 1rem 0rem;
  transition: all 0.2s ease-in-out;
}

/*navbar*/
#nav-links li {
  padding: 0px 15px;
}

#nav-links li > a {
  position: relative;
  font-size: 1.2rem;
  font-weight: 700;
  color: black;
}

.logo img {
  width: 30px;
  height: 30px;
}

@media (max-width: 768px) {
  header {
    padding: 0rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  }

  #navbar_list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 57px;
    z-index: 100;
    opacity: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.16);
    background-color: white;
    height: calc(100vh - 57px);
    width: 100vw;
    transition: opacity 0.2s ease-in-out, transform 0.5s ease-in-out;
    transform: translateX(-20rem);
  }

  #navbar_list-item.active {
    opacity: 1;
    transform: translateX(0px);
  }

  #nav-links li > a {
    font-size: 1.4rem;
    text-align: center;
  }
}

@media (min-width: 768px) {
  #nav-links li > a:hover,
  #nav-links li > a:focus {
    color: #00a69a;
  }

  /*Recreate*/
  #nav-links li > a::before {
    content: "";
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

  #nav-links li > a:hover::before {
    transform: scaleX(1);
  }
}
</style>
