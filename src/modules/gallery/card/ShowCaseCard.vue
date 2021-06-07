<template>
  <div style="position: relative" class="d-flex justify-center flex-column">
    <v-img
      class="white--text align-end"
      max-height="280"
      aspect-ratio="1.6667"
      :src="getImage()"
      @click="show()"
      cover
    />
    <v-btn
      class="btn-play elevation-3"
      @click="show()"
      v-if="showcase.data && showcase.data.link"
      icon
      ><v-icon color="white" x-large>mdi-play-circle-outline</v-icon></v-btn
    >
  </div>
</template>

<script>
import { get } from "lodash";
import { mapMutations } from "vuex";
export default {
  props: {
    showcase: {
      type: Object,
      default: () => {},
    },
    showcases: Array,
    index: Number,
  },
  data() {
    return {
      i: 0,
    };
  },
  methods: {
    ...mapMutations(["displayImage"]),
    getImage() {
      const provider = get(this.showcase, "image[0].provider", "unknown");
      const imgUrl = get(
        this.showcase,
        "image[0].url",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      );
      if (provider === "local")
        return `${process.env.VUE_APP_API_ENDPOINT}${imgUrl}`;
      else if (provider == "aws-s3") return imgUrl;
      return "https://cdn.vuetifyjs.com/images/cards/docks.jpg";
    },
    show() {
      this.displayImage({
        index: this.index,
        showcases: this.showcases,
      });
    },
    next() {},
  },
};
</script>

<style scoped>
.btn-play {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  width: 24px;
  height: 24px;
  margin: 0px auto;
  margin-top: -12px;
}
</style>
