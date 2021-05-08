<template>
  <div
    style="position: relative; width: 100%"
    v-if="major"
    class="elevation-0"
    tile
  >
    <a :href="`/gallery/${major.id}`">
      <v-img
        class="white--text align-end"
        max-height="420px"
        :src="getImage()"
        :width="window.width"
        @click="show()"
        cover
      />
      <p class="show-case-title subtitle-1">{{ major.title }}</p>
    </a>
  </div>
  <div v-else />
</template>
<script>
import moment from "moment";
import { get } from "lodash";
import { mapMutations } from "vuex";
export default {
  filters: {
    getTime(time) {
      return moment(time).format("DD/MM/YYYY");
    },
  },
  props: {
    index: {
      type: Number,
      default: () => 0,
    },
    major: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      slides: ["First", "Second", "Third"],
    };
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    ...mapMutations(["displayImage"]),
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    getImage() {
      const provider = get(this.major, "avatar.provider", "unknown");
      const imgUrl = get(
        this.major,
        "avatar.url",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      );
      if (provider === "local")
        return `${process.env.VUE_APP_API_ENDPOINT}${imgUrl}`;
      else if (provider == "aws-s3") return imgUrl;
      return "https://cdn.vuetifyjs.com/images/cards/docks.jpg";
    },
    show() {
      this.displayImage({
        url: this.getImage(),
        subtitle: moment(this.showcase.createdAts).format("DD/MM/YYYY"),
        title: this.showcase.title,
        description: this.showcase.description,
      });
    },
  },
};
</script>
<style scoped>
a p {
  text-decoration: none;
  color: black;
}
a {
  text-decoration: none !important;
}
.show-case-title {
  margin-top: -100px;
  padding-top: 40px;
  position: absolute;
  width: 100%;
  height: 100px;
  color: #fdb913;
  font-weight: bold;
  background-color: rgba(22, 22, 22, 0.8);
}
</style>
