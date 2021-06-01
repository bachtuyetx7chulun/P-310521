<template>
  <div id="main">
    <Header />
    <SquaBox />
    <RectBox />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Widgets/Header";
import Footer from "./components/Widgets/Footer";
import SquaBox from "./components/Analytics/Square";
import RectBox from "./components/Analytics/Rectangle";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    SquaBox,
    RectBox,
  },
};
</script>

<style></style>
