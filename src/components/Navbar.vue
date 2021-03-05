<template>
  <!-- PROBLEM: Overflow try to fixed -->
  <!-- TODO: alternative to event scroll directice? -->
  <nav v-scroll="handleScroll" id="navbar" class="navbar sticky-top navbar-expand-md navbar-light bg-white">
    <div class="container">
      <a class="navbar-brand">
        <img class="" width="30" height="30" src="./../assets/logo.png" />
      </a>
      <button class="navbar-toggler" type="button" @click="menuToggle">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbar__list-item" :style="{ left: posLeft + '%'}" class="d-md-block">
        <ul id="nav-links" class="navbar-nav">
          <!-- TODO: after clicking the anchor tag add .active class -->
          <li class="nav-item ">
            <a class="nav-link" href="#">HOME</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#">ABOUT</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#">PROJECTS</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#" @click="menuToggle">RESUME</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      posLeft: -100
    };
  },
  methods: {
    handleScroll: function(evt, el) {
      /*Make this code smaller if possible*/
      if (window.scrollY == 0) {
        el.setAttribute(
          'style',
          'padding: 1.25rem 1rem;'
        )
      } else {
        el.setAttribute(
          'style',
          'padding: .5rem 1rem;box-shadow: 0 0 20px rgba(0,0,0,.16);'
        )
      }

    },

    menuToggle: function() {
      /*Make the this code block smaller*/
      if (this.posLeft == 1) {
        this.posLeft = -100
      } else {
        this.posLeft = 1
      }
    }

  }
};
</script>
<style>
#app {
  font-family: Neutra Text, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --teal: #00a89c;
}

#navbar {
  padding: 1.25rem 1rem;
  transition: all .2s ease-in-out;
}

#nav-links li {
  padding: 0px 15px;
}

#nav-links>li>a {
  position: relative;
  font-size: 20px;
  font-weight: 700;
  color: black;
}


/*CURRENT NAVBAR:OK
make the font bigger*/
@media (max-width: 768px) {
  #navbar__list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    background-color: white;
    z-index: 100;
    transition: all .2s ease-in-out;
    height: 100vh;
    width: 100vw;
  }
}

@media (min-width: 768px) {

  #nav-links>li>a:hover,
  #nav-links>li>a:focus {
    color: var(--teal);
  }

  #nav-links>li>a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 7px;
    left: 0;
    background-color: var(--teal);
    border-radius: 25px;
    transform: scaleX(0);
    transition: all 0.12s ease-in-out 0s;
  }

  #nav-links>li>a:hover::before {
    transform: scaleX(1);
  }
}
</style>