<template>
  <div>
    <div
      v-if="major.metadata && major.metadata.videoLink && isLinkContainIframe"
      v-html="major.metadata.videoLink"
      class="iframe-container"
    ></div>
    <div
      v-else-if="
        major.metadata && major.metadata.videoLink && !isLinkContainIframe
      "
      class="iframe-container"
    >
      <iframe
        :src="major.metadata.videoLink"
        height="280"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    major: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isLinkContainIframe() {
      if (
        this.major.metadata &&
        this.major.metadata.videoLink &&
        /^(http|https)/.test(this.major.metadata.videoLink)
      )
        return false;
      return true;
    },
  },
  created() {
    console.log(this.major);
  },
};
</script>

<style scoped>
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