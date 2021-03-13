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
    <v-img v-else
      class="white--text align-end"
      :src="getImage()"
      height="280"
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
      return get(
        this.showcase,
        "image[0].url",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      );
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
