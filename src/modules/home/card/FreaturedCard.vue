<template>
  <div v-if="item" class="mx-auto elevation-0" tile>
    <v-img class="align-end" :src="getUrl(item)" />
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
      return get(
        item,
        "image[0].url",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      );
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
