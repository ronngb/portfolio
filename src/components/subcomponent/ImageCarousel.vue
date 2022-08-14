<template>
  <transition name="fadeScale" appear>
    <div class="carousel">
      <div class="carousel-backdrop" @click="$emit('closeCarousel')"></div>
      <figure class="carousel-body">
        <transition name="fade" mode="out-in">
          <img
            v-for="i in [currentIndex]"
            :key="i"
            class="carousel-img"
            :src="require(`@/assets/${currentImg}.webp`)"
          />
        </transition>
        <button key="left" class="carousel-btn-left" @click="changeIndex(-1)">
          <font-awesome-icon
            class="chevron-left-icon"
            :icon="['fas', 'chevron-left']"
          />
        </button>
        <button key="right" class="carousel-btn-right" @click="changeIndex(1)">
          <font-awesome-icon
            class="chevron-right-icon"
            :icon="['fas', 'chevron-right']"
          />
        </button>
      </figure>
    </div>
  </transition>
</template>

<script>
// NOTE: current algorith is Static on image needs to be dynamic
export default {
  data() {
    return {
      images: ['test-proj', 'test-proj2', 'test-proj3'],
      timer: null,
      currentIndex: 0,
    }
  },
  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    },
  },
  methods: {
    changeIndex(indexVal) {
      this.currentIndex += indexVal
    },
  },
}
</script>

<style lang="scss" scoped>
svg {
  font-size: clamp(2rem, calc(1.02rem + 1.14vw), 3rem);
}

button {
  position: absolute;
  top: 50%;
  z-index: 1;
  margin-top: clamp(-1rem, calc(1.02rem + 1.14vw), -1.2rem);
  border: none;
  background-color: transparent;
}

.carousel {
  position: fixed;
  z-index: 10;
  inset: 0;

  &-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba($color-black, 0.5);
  }

  &-body {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: $color-white;
    outline: 1px solid $color-silver;
    padding: clamp(1.2rem, calc(0.57rem + 0.91vw), 2rem);
    border-radius: 10px;
  }

  &-img {
    width: clamp(29rem, calc(1.99rem + 80.68vw), 100rem);
    height: clamp(15.1rem, calc(0.49rem + 44.76vw), 51.8rem);
    border-radius: 10px;
  }

  &-btn-left {
    left: clamp(1.5rem, calc(0.48rem + 2.27vw), 3.5rem);
  }

  &-btn-right {
    right: clamp(1.5rem, calc(0.48rem + 2.27vw), 3.5rem);
  }
}

button:hover .chevron {
  &-left-icon {
    color: $color-secondary;
  }
  &-right-icon {
    color: $color-secondary;
  }
}

.chevron-left-icon,
.chevron-right-icon {
  color: $color-silver;
  transition: 0.2s color ease;
}

.fadeScale-enter-active {
  transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
  opacity: 1;
}

.fadeScale-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  opacity: 1;
}

.fadeScale-enter {
  opacity: 0;
  transform: scale(0.8);
}

.fadeScale-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
