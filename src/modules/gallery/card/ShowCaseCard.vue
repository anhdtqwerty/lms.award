<template>
  <div>
    <v-img class="white--text align-end" :src="getImage()" height="280" @click="show()" />
  </div>
</template>

<script>
import { get } from "lodash";
import moment from "moment";
import { mapMutations } from "vuex";
export default {
  props: {
    showcase: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["displayImage"]),
    getImage() {
      return get(
        this.showcase,
        "image[0].url]",
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
