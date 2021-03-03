<template>
  <!-- BUGS: conflict with sticky-top class
        FIX: make the effect in navbar avialable to Desktop only   -->
  <nav v-scroll="handleScroll" id="navbar" class="navbar sticky-top navbar-expand-md navbar-light bg-white">
    <div class="container">
      <a class="navbar-brand">
        <img class="" width="30" height="30" src="./../assets/logo.png" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse d-md-block justify-content-md-end justify-content-center">
        <ul id="nav-links" class="navbar-nav justify-content-center">
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
            <a class="nav-link" href="#">RESUME</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  components: {},
  methods: {
    handleScroll: function(evt, el) {
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

/*Add this rules in portrait*/
.navbar-collapse {
  /*display: flex;*/
  /*height: calc(100vh - 45px);*/
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
</style>