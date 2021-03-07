<template>
  <a :href="`/gallery/${major.id}`">
    <div style="position:relative;" v-if="major" class="mr-4 elevation-0" tile>
      <v-img
        class="white--text align-end"
        :src="getImage()"
        @click="show()"
      />

      <p class="show-case-title subtitle-1">{{ major.title }}</p>
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
.show-case-title {
  margin-top: -100px;
  padding-top: 40px;
  position: absolute;
  width: 100%;
  height: 100px;
  color: #FDB913;
  font-weight: bold;
  background-color: rgba(22, 22, 22, 0.8);
}
</style>
