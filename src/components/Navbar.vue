<template>
  <!-- PROBLEM: Overflow try to fixed -->
  <!-- TODO: alternative to event scroll directice? -->
  <header v-scroll="navbarTransition" class="sticky-top">
    <nav class="navbar navbar-expand-md navbar-light bg-white">
      <div class="container">
        <a class="navbar-brand">
          <img class="" width="30" height="30" src="./../assets/logo.png" />
        </a>
        <button class="navbar-toggler" type="button" @click="toggleMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbar_list-item" :style="{ left: posLeft + '%'}" class="d-md-block">
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
  </header>
</template>
<script>
export default {
  data() {
    return {
      posLeft: -100,
      cssProperty: ''
    };
  },
  methods: {
    navbarTransition(evt, el) {
      this.cssProperty = window.scrollY == 0 ?
        'padding: 1rem 0rem;' :
        'padding: .5rem 0rem;box-shadow: 0 0 20px rgba(0,0,0,.16);'

      el.setAttribute('style', this.cssProperty)
    },
    toggleMenu() {
      this.posLeft = this.posLeft == 1 ? -100 : 1
    }

  }
};
</script>
<style>
/*header*/
header {
  background-color: white;
  padding: 1rem 0rem;
  transition: all .2s ease-in-out;
}

/*navbar*/
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
  #navbar_list-item {
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