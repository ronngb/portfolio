<template>
  <!-- TODO: Create github acct. also new vue project-->
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand">
        <img class="" width="30" height="30" src="./../assets/logo.png" />
      </a>
      <!-- TODO: fix prettyfy in code -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse d-md-block justify-content-md-end justify-content-center">
        <ul id="main-nav" class="navbar-nav justify-content-center">
          <li class="nav-item active">
            <a class="nav-link" href="#">HOME </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">ABOUT</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">PROJECTS</a>
          </li>
          <li class="nav-item active">
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
};
</script>
<style>
.nav-cont {
  margin: 0px 15px !important;
}

/*Add this rules in portrait*/
.navbar-collapse {
  /*display: flex;*/
  /*height: calc(100vh - 45px);*/
}

#main-nav li {
  padding: 0px 15px;
}

#main-nav a {
  font-family: Neutra Text, sans-serif;
  font-size: 20px;
  font-weight: 700;
}
</style>