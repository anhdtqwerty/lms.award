<template>
  <div class="pa-md-16">
    <MajorList :title="major.title" :showcases="showcases" :major="major" />
  </div>
</template>

<script>
import MajorList from "@/modules/gallery/Major.vue";
import { Showcase, Major } from "@/plugins/api.js";
export default {
  components: {
    MajorList,
  },
  data() {
    return {
      showcases: [],
      major: {},
    };
  },
  async created() {
    this.major = await Major.fetchOne(this.$route.params.id);
    this.showcases = await Showcase.fetch({
      major: this.$route.params.id,
      _sort: "createdAt:DESC",
    });
  },
};
</script>
<style scoped>
.notes {
  position: absolute;
  background-color: #fdb912 !important;
  right: 0;
  bottom: 0;
  width: 400px;
  padding: 50px 20px;
}
</style>
