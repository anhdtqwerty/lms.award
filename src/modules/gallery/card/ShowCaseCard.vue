<template>
  <div>
    <iframe
      v-if="this.showcase.data"
      :src="this.showcase.data.link"
      height="280"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      @click="show()"
    ></iframe>
    <v-img
      v-else
      class="white--text align-end"
      height="280"
      :src="getImage()"
      @click="show()"
    />
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
      const imgUrl = get(
        this.showcase,
        "image[0].url",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      );
      if (!/^http/.test(imgUrl))
        return `${process.env.VUE_APP_API_ENDPOINT}${imgUrl}`;
      return imgUrl
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
