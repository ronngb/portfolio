<template>
  <section id="resume" class="content-wrapper">
    <h2 class="secondary-heading resume-heading">Resume</h2>
    <ul class="resume-list">
      <div class="resume-timeline"></div>
      <li v-for="data in resume" class="resume-item">
        <font-awesome-layers class="circle-icon">
          <font-awesome-icon
            icon="fas fa-circle"
            :style="{ color: '#00a69a' }" />
          <font-awesome-icon
            icon="fas fa-circle"
            transform="shrink-6"
            inverse />
        </font-awesome-layers>
        <h3 class="resume-details-heading tertiary-heading">
          <span class="tertiary-heading-main">
            {{ data.position }}
          </span>
          <span class="tertiary-heading-sub">
            <em>{{ data.company }}</em>
          </span>
        </h3>
        <p class="resume-details-paragraph">
          <b>
            <font-awesome-icon icon="fas fa-location-dot" />
            {{ data.location }}
          </b>
          <span class="sub">
            <font-awesome-icon icon="fas fa-calendar" />
            {{ data.hired }}
          </span>
        </p>
      </li>
    </ul>
  </section>
</template>
<script>
import data from '@/data/resume.json'

export default {
  name: 'resume',
  data() {
    return {
      resume: data,
    }
  },
}
</script>
<style lang="scss" scoped>
.circle-icon {
  display: none;
  font-size: 2em;
  position: absolute;
  top: -10px;
  opacity: 0;
  transform: scale(0);
  @include responsive(sm) {
    display: block;
  }
}

.resume {
  &-timeline {
    display: none;
    position: absolute;
    width: 5px;
    height: 100%;
    background-color: $color-primary;
    transform: scale(0);
    transform-origin: 50% 100%;
    @include responsive(sm) {
      display: block;
    }
  }

  &-list {
    padding: 0;
    display: grid;
    grid-template-columns: minmax(290px, 1fr);
    gap: 30px 50px;
    position: relative;
    justify-items: center;
    @include responsive(sm) {
      grid-template-columns: repeat(2, minmax(290px, 1fr));
      padding-bottom: 30px;
    }
  }

  &-item {
    display: flex;
    opacity: 0;
    position: relative;
    width: min(100%, 456px);

    &:nth-of-type(odd) {
      transform-origin: 100% 50%;
      transform: translateX(30px) scaleX(0.2);
      @include responsive(sm) {
        justify-self: end;
        grid-column: 1/2;

        .circle-icon {
          right: -35px;
        }

        p {
          border-top-right-radius: 0;
        }
      }
    }
    &:nth-of-type(even) {
      transform-origin: 0% 50%;
      transform: translateX(-30px) scaleX(0.2);
      @include responsive(sm) {
        justify-self: start;
        grid-column: 2/-1;

        .circle-icon {
          left: -35px;
        }

        h3 {
          border-top-left-radius: 0;
        }
      }
    }

    & > *:not(div) > * {
      opacity: 0;
      transform: translateY(10px);
    }

    &:not(li:last-of-type)::after {
      content: '';
      height: 30px;
      position: absolute;
      bottom: -30px;
      left: 15px;
      width: 5px;
      background-color: $color-primary;
      transform-origin: 50% 0;
      transform: scale(0);
      @include responsive(sm) {
        display: none;
      }
    }

    @include responsive(sm) {
      &:last-of-type {
        position: absolute;
        top: 30px;
      }

      @for $i from 1 through 4 {
        &:nth-of-type(#{$i}) {
          @if $i % 2 == 0 {
            grid-row: $i #{'/'} ($i + 1);
          } @else {
            grid-row: $i #{'/'} ($i + 1);
          }
        }
      }
    }
  }

  &-details {
    &-heading {
      border-radius: 0.8rem 0 0 0.8rem;
      padding: clamp(0.8rem, calc(0.704rem + 0.3vw), 1rem);
      background-color: $color-quartet;
      flex: 1 1 56%;
    }

    &-paragraph {
      color: #fff;
      padding: clamp(0.8rem, calc(0.704rem + 0.3vw), 1rem);
      border-radius: 0 0.8rem 0.8rem 0;
      background-color: $color-primary;
      flex: 1 1 36%;
      & > * {
        display: inherit;
      }

      & :nth-child(1) {
        font-size: clamp(1.28rem, calc(1.12rem + 0.48vw), 1.6rem);
        line-height: 1.6;
        font-style: italic;
      }
      & :nth-child(2) {
        font-size: clamp(1.1rem, calc(0.96rem + 0.45vw), 1.4rem);
        font-weight: 100;
      }
    }
  }
}

section.active .resume {
  &-heading {
    animation: fadeInUp 0.5s ease-out 0.2s forwards;
  }

  &-timeline {
    animation: fadeInScaleUp 0.3s $easeOutCubic 0.4s forwards;
  }

  @for $i from 1 through 4 {
    &-item:nth-of-type(#{$i}) {
      animation: fadeInScaleX 0.3s $easeOutCubic 0.6s forwards;

      > *:not(div) > * {
        animation: fadeInUp 0.3s $easeOutCubic 0.9s forwards;
      }

      .circle-icon {
        animation: fadeInScaleUp
          0.3s
          $easeOutBack
          $i *
          0.2 +
          1s
          forwards;
      }

      &::after {
        animation: fadeInScaleUp
          0.3s
          $easeOutBack
          $i *
          0.2 +
          1s
          forwards;
      }
    }
  }
}
</style>
