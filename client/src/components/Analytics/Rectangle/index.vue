<template>
  <div class="box box--rectangle box__color--blue shadow--gray">
    <div class="box__image" v-if="rectType == 'Github'">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="signal"
        class="svg-inline--fa fa-signal fa-w-20"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path
          fill="white"
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        ></path>
      </svg>
      <p>{{ rectType }}</p>
    </div>
    <div class="box__image" v-else style="background: rgb(223, 93, 93)">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="signal"
        class="svg-inline--fa fa-signal fa-w-20"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path
          fill="white"
          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
        ></path>
      </svg>
      <p>{{ rectType }}</p>
    </div>
    <div class="box__contain">
      <p class="box__data">
        <span
          id="incrementCount"
          :class="[rectType == 'Github' ? '' : 'text-color--red']"
          >{{ displayCount }}</span
        >
        <sup v-if="rectType == 'Github'">/ Repositories</sup>
        <sup v-else>/ Videos</sup>
      </p>
      <div class="box__title">
        <p :class="[rectType == 'Github' ? '' : 'text-color--red']">
          Thus, 20:20 pm 01/06/2021
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RectBox",
  data() {
    return {
      speed: 20,
      displayCount: 0,
      interval: null,
    };
  },
  props: {
    count: {
      type: String,
      default: "0",
    },
    rectType: {
      type: String,
      default: "Github",
    },
  },
  methods: {
    convertCount() {
      const count = parseInt(this.count);
      if (count < 10) {
        return "0" + this.count + "";
      }
      return this.count;
    },
  },
  created() {
    setTimeout(() => {
      this.interval = setInterval(() => {
        this.displayCount += 1;
      }, this.speed);
    }, 700);
  },
  updated() {
    if (this.displayCount >= parseInt(this.count)) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.box {
  margin: 0.5rem;
  overflow: hidden;

  &--rectangle {
    width: 17rem;
    height: 8rem;
    border-radius: 1rem;
    display: flex;

    .box__image {
      margin: 0;

      > svg {
        display: block;
        // margin: 0 auto;
        margin-left: 1rem;
        width: 4rem;
        height: 4rem;
      }

      > p {
        text-align: center;
        margin: 0 auto;
      }
    }
  }

  &__color {
    &--blue {
      background: $blue;
      color: $white;

      .box__image > svg > path {
        fill: $white;
      }

      .box__contain {
        color: $blue;
      }

      .box__title > p {
        color: $blue;
      }

      .box__data > sup {
        color: $gray !important;
      }
    }

    &--white {
      background: $white;
      color: $dark;

      .box__image {
        > p {
          color: $dark;
        }

        > svg {
          > path {
            fill: $dark;
          }
        }
      }

      .box__data {
        > span {
          color: $blue;
        }

        > sup {
          color: $red;
        }
      }

      .box__title > p {
        color: $dark;
      }
    }
  }

  &__image {
    width: 5rem;
    margin: 0 auto;
    padding-top: 1.5rem;

    > p {
      font-size: 1rem;
      font-weight: 500;
    }

    > svg > path {
      fill: red;
    }
  }

  &__contain {
    // text-align: center;
    width: calc(100% - 5rem);
    background: $white;
    color: $dark;

    > p {
      margin: 0rem;
    }
  }

  &__data {
    font-weight: 600;
    margin-top: 1.5rem !important;
    padding-left: 1rem;

    > span {
      font-size: 2rem;
      letter-spacing: 0.05rem;
    }

    > sup {
      display: block;
      color: $gray;
      font-size: 0.75rem;
    }
  }

  &__title {
    font-weight: 600;
    padding-left: 1rem;

    > p {
      font-size: 0.55rem;
      letter-spacing: 0.05rem;
      margin-top: 0.25rem !important;
      color: $blue;
    }
  }
}

.text-color {
  &--red {
    color: rgb(223, 93, 93) !important;
  }
}
</style>
