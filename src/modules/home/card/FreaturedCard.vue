<template>
  <div v-if="item" width="100%" class="mx-auto elevation-0" tile>
    <v-img class="align-end" :src="getUrl(item)" contain />
    <v-btn
      v-if="item.link"
      color="#FDB912"
      link
      depressed
      small
      :href="item.link"
      >Xem thêm</v-btn
    >
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
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapMutations(["displayImage"]),
    getUrl(item) {
      const provider = get(item, "image[0].provider", "unknown");
      const imgUrl = get(
        item,
        "image[0].url",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      );
      if (provider === "local")
        return `${process.env.VUE_APP_API_ENDPOINT}${imgUrl}`;
      else if (provider == "aws-s3") return imgUrl;
      return "https://cdn.vuetifyjs.com/images/cards/docks.jpg";
    },
    show(item) {
      this.displayImage({
        url: this.getUrl(item),
        subtitle: moment(item.createdAts).format("DD/MM/YYYY"),
        title: item.title,
        description: item.description,
      });
    },
  },
};
</script>
<style>
.v-image__image--cover {
  background-size: 100% auto !important;
}
</style>
