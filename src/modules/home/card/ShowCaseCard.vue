<template>
  <a :href="`/gallery/${major.id}`">
    <div v-if="major" class="mr-4 elevation-0" tile style="max-width: 300px">
      <v-img
        class="white--text align-end"
        :src="getImage()"
        style="max-height: 240px;min-height: 240px;"
        @click="show()"
      />

      <p class="subtitle-1 mb-1">{{ major.title }}</p>

      <p class="caption gray--text ma-0">
        <v-icon x-small>mdi-arrow-left</v-icon>Thông tin
      </p>
      <p class="caption gray--text ma-0">
        Sản phẩm học viên
        <v-icon x-small>mdi-arrow-right</v-icon>
      </p>
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
