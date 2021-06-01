<template>
  <section class="main container p--1">
    <RectBox />
    <RectBox />
  </section>
</template>

<script>
import RectBox from "../components/Analytics/Rectangle";

export default {
  name: "Main",
  components: {
    RectBox,
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-wrap: wrap;
}
</style>
