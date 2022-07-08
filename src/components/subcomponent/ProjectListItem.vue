<template>
  <li class="project-item">
    <figure class="project-figure" @click="$emit('openCarousel')">
      <!-- TODO: make it 1 size all in img -->
      <div class="img-container">
        <img
          class="project-thumbnail"
          src="../../assets/test-proj.webp"
          alt=""
        />
      </div>
      <a href="" class="project-link">
        <font-awesome-icon
          class="external-link-icon"
          :icon="['fas', 'external-link-alt']"
        />
      </a>
    </figure>
    <div class="project-info">
      <h3 class="tertiary-heading">PassVault</h3>
      <p class="project-tech-stacks">
        <span>HTML</span>
        <span>Vue</span>
        <span>JavaScript</span>
      </p>
      <a
        href="https://github.com/ronngb"
        class="project-github-link"
        target="_blank"
      >
        <font-awesome-icon class="github-icon" :icon="['fab', 'github']" />
      </a>
    </div>
  </li>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.project {
  &-item {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    padding: 0 15px;
    border-radius: 8px;
    transition: all 0.3s linear;
    box-shadow: 0 0 20px rgba($color-black, 0.16);

    &:hover {
      box-shadow: 0 0 20px rgba($color-black, 0.3);
      transform: scale(1.02);
    }
  }

  &-figure {
    position: relative;
    cursor: pointer;
    background-color: $color-secondary;
    border-radius: 8px;
    border-radius: 10px;
    transform: translateY(-15px);
    // box-shadow: 0 0 20px rgba($color-black, 0.16);
  }

  &-thumbnail {
    width: 100%;
    opacity: 0.8;
    transition: transform 0.5s;
    overflow: hidden;

    &:hover {
      transform: scale(1.6);
    }
  }

  &-link {
    position: absolute;
    bottom: -33px;
    left: 50%;
    margin-left: -33px;
    border: 8px solid $color-white;
    border-radius: 50%;
    background: $color-tertiary;

    &:hover .external-link-icon {
      transform: scale(1);
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  &-tech-stacks {
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    column-gap: 5px;

    & > span {
      background: $color-silver;
      padding: 3px;
      border-radius: 6px;
    }
  }

  &-github-link {
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
}

.img-container {
  overflow: hidden;
  border-radius: inherit;
}

.external-link-icon {
  font-size: 3rem;
  background: $color-tertiary;
  border-radius: 50%;
  border: 10px solid $color-tertiary;
  color: $color-white;
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

.github-icon {
  font-size: 2.4rem;
}
</style>
