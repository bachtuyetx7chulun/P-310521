<template>
  <section class="main container p--1 mt--3">
    <RectBox :rectType="`Youtube`" :count="youtubeCount" />
    <RectBox :rectType="`Github`" :count="githubCount" />
    <!-- <SquaBox :rectType="`Creation`" /> -->
    <SquaBox />
    <SquaBox />
    <SquaBox />
    <SquaBox />
    <!-- {{ youtubeData.statistics.videoCount }} -->
  </section>
</template>

<script>
import RectBox from "../components/Analytics/Rectangle";
import SquaBox from "../components/Analytics/Square";
import axios from "../configs/axios.js";

export default {
  name: "Main",
  data() {
    return {
      youtubeData: null,
      githubData: null,
      youtubeCount: "0",
      githubCount: "0",
    };
  },
  components: {
    RectBox,
    SquaBox,
  },
  methods: {
    getYoutubeData() {
      axios
        .get("/youtube")
        .then((result) => {
          const { data } = result;
          // console.log(data.data);
          this.youtubeData = data.data;
          this.youtubeCount =
            this.youtubeData?.items[0]?.statistics?.videoCount;
        })
        .catch((error) => {
          setTimeout(() => {
            this.getYoutubeData();
          }, 10000);
        });
    },

    getGithubData() {
      axios
        .get("/github/user")
        .then((result) => {
          const { data } = result;
          // console.log(data.data);
          this.githubData = data.data;
          this.githubCount = this.githubData?.public_repos + "";
        })
        .catch((error) => {
          setTimeout(() => {
            this.getGithubData();
          }, 10000);
        });
    },
  },
  mounted() {
    this.getYoutubeData();
    this.getGithubData();
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-wrap: wrap;
}
</style>
