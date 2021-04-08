<template>
  <v-dialog v-model="dialog" max-width="1024" persistent>
    <v-card v-if="imageViewDialog" class="pa-2">
      <div
        v-if="
          this.showcase.data && this.showcase.data.link && isLinkContainIframe
        "
        v-html="showcase.data.link"
        class="iframe-container"
      ></div>
      <div
        v-else-if="
          this.showcase.data && this.showcase.data.link && !isLinkContainIframe
        "
        class="iframe-container"
      >
        <iframe
          :src="this.showcase.data.link"
          height="280"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          @click="show()"
        ></iframe>
      </div>
      <v-img class="white--text align-end" :src="url" v-else />
      <p class="caption py-2">{{ subtitle }}</p>
      <p class="h6 font-weight-black pt-4 pb-2">{{ title }}</p>
      <p class="body-2">{{ description }}</p>
    </v-card>
    <v-btn
      @click="prev()"
      class="mx-2"
      fab
      color="#FDB912"
      dark
      small
      style="position: absolute; top: 50%; left: 10px"
    >
      <v-icon dark>mdi-chevron-left</v-icon>
    </v-btn>

    <v-btn
      @click="next()"
      class="mx-2"
      fab
      color="#FDB912"
      dark
      small
      style="position: absolute; top: 50%; right: 10px"
    >
      <v-icon dark>mdi-chevron-right</v-icon>
    </v-btn>
    <v-btn
      @click="dialog = !dialog"
      class="mx-2"
      fab
      color="white"
      small
      style="position: absolute; top: 10px; right: 10px"
    >
      <v-icon dark>mdi-close</v-icon>
    </v-btn>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
import { get } from "lodash";
import moment from "moment";
export default {
  data() {
    return {
      dialog: false,
      i: 0,
      subtitle: "",
      title: "",
      description: "",
      url: "",
      showcase: {},
    };
  },
  computed: {
    ...mapState(["imageViewDialog"]),
    items() {
      return this.imageViewDialog.showcases;
    },
    isLinkContainIframe() {
      if (
        this.showcase.data &&
        this.showcase.data.link &&
        /^(http|https)/.test(this.showcase.data.link)
      )
        return false;
      return true;
    },
  },
  created() {
    console.log(this.imageViewDialog);
  },
  methods: {
    prev() {
      if (this.i - 1 < 0) this.i = this.showcases.length - 1;
      else this.i = this.i - 1;
      this.update();
    },
    next() {
      if (this.i + 1 > this.showcases.length - 1) this.i = 0;
      else this.i = this.i + 1;
      this.update();
    },
    getImage() {
      const imgUrl = get(
        this.showcase,
        "image[0].url",
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      );
      if (!/^http/.test(imgUrl))
        return `${process.env.VUE_APP_API_ENDPOINT}${imgUrl}`;
      return imgUrl;
    },
    update() {
      this.showcase = this.imageViewDialog.showcases[this.i];
      console.log(this.i);
      this.subtitle = moment(this.showcase.createdAt).format("DD/MM/YYYY");
      this.title = this.showcase.title;
      this.description = this.showcase.description;
      this.dialog = this.imageViewDialog.show;
      this.url = this.getImage();
    },
    refresh() {
      this.i = this.imageViewDialog.index;
      this.showcases = this.imageViewDialog.showcases;
      this.update();
    },
  },
  watch: {
    imageViewDialog() {
      this.refresh();
    },
  },
};
</script>
<style scoped>
p {
  margin: 0 !important;
}
</style>

<style>
.iframe-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 56.25%;
}
.iframe-container iframe {
  position: absolute;
  left: 0;
  top: 0;
  height: 100% !important;
  width: 100% !important;
}
</style>
