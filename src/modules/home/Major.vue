<template>
  <div class="text-center">
    <p class="mt-10 mb-1 headline white--text text-uppercase text-center">
      Chương trình {{ major.title.toLowerCase() }}
    </p>
    <hr />
    <v-row class="mt-10">
      <v-col v-for="item in majors" :key="item.id" cols="6">
        <card :major="item" :showcase="getShowCase(item)" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Card from "@/modules/home/card/ShowCaseCard.vue";
import { get } from "lodash";
export default {
  components: { Card },
  props: {
    major: {
      type: Object,
      default: () => ({ majors: [] }),
    },
    showcases: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
    };
  },
  computed: {
    majors() {
      return this.major.majors.filter((m) =>
        get(m, "metadata.enableShowcase", false)
      );
    },
  },
  methods: {
    getShowCase(major) {
      return this.showcases.find(
        (s) =>
          s.major.id === major.id && (s.position || "").includes("highlight")
      );
    },
  },
};
</script>

<style scoped>
hr {
  width: 10%;
  margin-left: auto;
  margin-right: auto;
  border-color: #fdb913;
  border-width: 2px;
}
</style>
