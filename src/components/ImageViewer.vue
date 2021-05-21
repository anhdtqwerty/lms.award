<template>
  <v-dialog
    v-model="dialog"
    max-width="1024"
    overlay-opacity="0.8"
    :fullscreen="$vuetify.breakpoint.smAndDown"
  >
    <div class="d-flex flex-column" style="height: 100%">
      <div
        v-if="imageViewDialog"
        class="pa-0 d-flex align-center justify-center img-max-height"
        style="height: 100%"
      >
        <v-btn @click="prev()" dark small icon width="48px" height="48px">
          <v-img src="../assets/prev.png" max-width="24px"></v-img>
        </v-btn>
        <div
          v-if="
            this.showcase.data && this.showcase.data.link && isLinkContainIframe
          "
          v-html="showcase.data.link"
          class="iframe-container"
        ></div>
        <div
          v-else-if="
            this.showcase.data &&
            this.showcase.data.link &&
            !isLinkContainIframe
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
        <v-img
          class="white--text align-end img-max-width"
          :height="maxImageHeight"
          :src="url"
          contain
          v-else
        />
        <v-btn @click="next()" dark small icon width="48px" height="48px">
          <v-img src="../assets/next.png" max-width="24px"></v-img>
        </v-btn>
      </div>
      <div class="d-flex justify-center">
        <span
          style="color: #fdb912; min-height: 96px"
          class="d-flex align-center py-4"
          >{{ title }}</span
        >
      </div>
      <v-btn
        @click="dialog = !dialog"
        class="mx-2"
        small
        icon
        width="48px"
        height="48px"
        style="position: absolute; top: 10px; right: 10px"
      >
        <v-img src="../assets/close.png" max-width="24px"></v-img>
      </v-btn>
    </div>
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
      window: {
        width: 0,
        height: 0,
      },
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
    maxImageHeight() {
      return this.window.height * 0.9 - 96;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
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
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
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
.v-dialog {
  box-shadow: none !important;
}
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
.img-max-width {
  max-width: calc(100% - 48px - 48px - 24px - 24px);
}
@media only screen and (max-width: 1023px) {
  .v-dialog {
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>
