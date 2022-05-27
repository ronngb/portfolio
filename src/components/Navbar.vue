<template>
  <header v-scroll="navbarTransition" class="navbar-header">
    <div class="flex-container">
      <a>
        <img
          class="website-logo"
          alt="website logo"
          src="./../assets/logo.png"
        />
      </a>
      <nav class="navbar-nav">
        <!-- ul -> .site-nav -->
        <ul :class="{ active: showMenu }" class="navbar-list">
          <li class="navbar-item">
            <!-- NOTE: navbar-link font-size:19.2px -->
            <a class="navbar-link" href="#intro" @click="showMenu = false"
              >home</a
            >
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="#about" @click="showMenu = false">
              about
            </a>
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="#project" @click="showMenu = false">
              projects
            </a>
          </li>
          <li class="navbar-item">
            <a class="navbar-link" href="#">resume</a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- TODO: place the button outside the <nav> -->
    <!-- <button class="toggle-button" type="button" @click="showMenu = !showMenu">
        <svg class="toggle-icon" viewBox="0 0 60 60">
          <path d="M1 9 H58 M20 29 H58 M38 49 H58" />
        </svg>
      </button> -->
  </header>
</template>
<script>
export default {
  directives: {
    scroll: {
      inserted(el, binding) {
        window.addEventListener('scroll', () => {
          console.log(binding.value)
          binding.value(el)
        })

        // window.addEventListener('resize', () => {
        //   binding.value(el)
        // })
      },
    },
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    navbarTransition(el) {
      let cssProperty =
        window.scrollY == 0
          ? 'padding: 1.8rem 0;'
          : 'padding: 1.2rem 0;box-shadow: 0 0 20px rgba(0,0,0,.16);'

      if (window.screen.width > 768) {
        el.setAttribute('style', cssProperty)
      } else {
        el.setAttribute('style', 'padding: 0;')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.flex-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 16px;
  padding: 0.5rem 0;
  @include responsive(md) {
    margin: 0 32px;
  }
  @include responsive(xl) {
    margin: 0 100px;
  }
}

.website-logo {
  // NOTE: try rem or ems here
  width: 30px;
  height: 30px;
}

.navbar {
  &-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: $color-white;
    padding: 2.1rem 0;
    transition: all 0.2s ease-in-out;
  }
  &-list {
    padding-left: 0;
    text-align: center;
  }
  &-item {
    display: inline-block;
    padding: 0 2.5rem;
    opacity: 0;
    transform: translateY(-10px);

    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        animation: fadeInUp 0.5s ease-out (($i - 1) + $i) * 0.1s forwards;
      }
    }
  }
  &-link {
    // display: inline-block;
    position: relative;
    font-size: 1.92rem;
    text-transform: uppercase;
    font-weight: 700;

    &:hover,
    &:focus {
      color: $color-primary;
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

    &:hover::after {
      transform: scaleX(1);
    }
  }
}

// header {
//   position: sticky;
//   top: 0;
//   z-index: 100;
//   background-color: $color-white;
//   border-bottom: 1px solid rgba($color-black, 0.16);

//   nav {
//     @include style-all-flex(center, space-between);
//     width: 100%;
//     margin: 0 auto;
//     padding: 0.5rem 0.62rem;
//   }
// }

// NOTE: EFFECT ON MOBILE
// .site-nav {
//   @include style-all-flex(center, center, column);
//   padding-left: 0;
//   position: fixed;
//   top: 57px;
//   left: 0;
//   width: 100vw;
//   height: calc(100vh - 57px);
//   background-color: $color-white;
//   transform: translateX(-320px);
//   opacity: 0;
//   transition: opacity 0.2s ease-in-out, transform 0.5s ease-in-out;

//   &.active {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }

// .toggle {
//   &-button {
//     padding: 0.25rem 0.75rem;
//     background-color: transparent;
//     border: 1px solid #c5c3c6;
//     border-radius: 4px;
//   }

//   &-icon {
//     width: 30px;
//     height: 30px;
//   }

//   &-icon path {
//     stroke: #46494c;
//     stroke-width: 3;
//   }
// }

// .nav-link {
//   position: relative;
//   display: block;
//   padding: 0.5rem 0;
//   color: black;
//   font-weight: 700;
//   font-size: 1.4rem;
//   text-transform: uppercase;
// }

// START HERE FOR REFACTORING
@media screen and (min-width: 768px) {
  // header {
  //   padding: 1rem 0;
  //   transition: all 0.2s ease-in-out;
  //   border-bottom: 0;

  //   nav {
  //     width: 84%;
  //     padding: 1rem 0;
  //   }
  // }

  // .site-nav {
  //   position: static;
  //   flex-direction: row;
  //   flex: 0 0 45%;
  //   opacity: 1;
  //   height: 0;
  //   transform: none;
  // }

  // .nav-item {
  //   padding: 0 1.1rem;
  // }

  // .nav-item:last-child {
  //   padding-right: 0;
  // }

  // .nav-link {
  //   font-size: 1.2rem;

  //   &:hover,
  //   &:focus {
  //     color: #00a69a;
  //   }

  //   &::before {
  //     position: absolute;
  //     bottom: 7px;
  //     left: 0;
  //     width: 100%;
  //     height: 4px;
  //     background-color: #00a69a;
  //     border-radius: 25px;
  //     transform: scaleX(0);
  //     transition: all 0.12s ease-in-out;
  //     content: '';
  //   }

  //   &:hover::before {
  //     transform: scaleX(1);
  //   }
  // }

  // .toggle-button {
  //   display: none;
  // }
}

@media screen and (min-width: 1100px) {
  // header {
  //   nav {
  //     width: 82%;
  //     padding: 0.37rem 0;
  //   }
  // }

  // .nav-item {
  //   padding: 0 1.6rem;
  // }
}
</style>
