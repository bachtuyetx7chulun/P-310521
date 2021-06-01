<template>
  <div id="main">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Widgets/Header";
import Footer from "./components/Widgets/Footer";
import Main from "./pages/index";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Main,
  },
};
</script>

<style></style>
