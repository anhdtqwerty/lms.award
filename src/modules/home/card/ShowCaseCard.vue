<template>
  <a :href="`/gallery/${major.id}`">
    <div v-if="major" class="mr-4 elevation-0" tile>
      <v-img
        class="white--text align-end"
        :src="getImage()"
        @click="show()"
      />

      <p class="subtitle-1 pb-n10 white--text">{{ major.title }}</p>
    </div>
    <div v-else />
  </a>
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
    major: {
      type: Object,
      default: () => {},
    },
    showcase: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      slides: ["First", "Second", "Third"],
    };
  },
  methods: {
    ...mapMutations( ["displayImage"]),
    getImage() {
      return get(
        this.showcase,
        "image[0].url",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      );
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
</style>
