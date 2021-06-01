<template>
  <div class="box box--square box__color--white shadow--blue">
    <div class="box__image">
      <!-- <img src="@/assets/images/signal-solid.svg" alt="upper" /> -->
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
          d="M208 288h-32c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V304c0-8.84-7.16-16-16-16zM80 384H48c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16zm256-192h-32c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm128-96h-32c-8.84 0-16 7.16-16 16v384c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V112c0-8.84-7.16-16-16-16zM592 0h-32c-8.84 0-16 7.16-16 16v480c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16z"
        ></path>
      </svg>
    </div>
    <div class="box__contain">
      <p class="box__data">
        23
      </p>
      <p class="box__title">
        Subscribes
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SquaBox",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.box {
  margin: 0.5rem;

  &--square {
    width: 8rem;
    height: 8rem;
    border-radius: 1rem;
  }

  &__color {
    &--blue {
      background: $blue;
      color: $white;

      .box__image > svg > path {
        fill: $white;
      }
    }

    &--white {
      background: $white;
      color: $dark;

      .box__image > svg > path {
        fill: $dark;
      }
    }
  }

  &__image {
    width: 2rem;
    margin: 0 auto;
    padding-top: 1.5rem;

    > img {
      width: 100%;
    }
  }

  &__contain {
    text-align: center;
    > p {
      margin: 0rem;
    }
  }

  &__data {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0.5rem !important;
    letter-spacing: 0.1rem;
  }

  &__title {
    font-size: 0.75rem;
  }
}
</style>
