<template>
  <div class="py-6 px-4">
    <p
      class="mb-1 headline font-weight-bold white--text text-uppercase text-center"
    >
      {{ descriptions }}
    </p>
    <hr />
    <div class="mt-6 d-flex justify-center">
      <div v-for="item in majors" :key="item.id">
        <a
          style="text-decoration: none; font-size: 18px"
          :href="`/gallery/${item.id}`"
          class="white--text text-uppercase mx-8"
          :class="{ active: item.title == title }"
          v-if="item.root.id == major.root.id"
        >
          {{ item.title }}
        </a>
        <hr class="hr2" v-if="item.title == title" />
      </div>
    </div>
    <MajorVideo :major="major" />
    <v-row class="py-6 no-gutters">
      <v-col v-if="list.length" class="mb-8" cols="12">
        <v-img :src="image0" />
      </v-col>
      <v-col
        v-for="(showcase, index) in list"
        :key="showcase.id"
        cols="12"
        sm="6"
        md="3"
      >
        <card
          :showcase="showcase"
          :showcases="showcases"
          :index="index"
          class="pa-1"
        />
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn outlined color="#828282">Xem thêm</v-btn>
    </v-row>
  </div>
</template>

<script>
import Card from "@/modules/gallery/card/ShowCaseCard.vue";
import MajorVideo from "@/modules/gallery/MajorVideo.vue"
import { Major } from "@/plugins/api.js";
import { get } from "lodash";
const DEPARTMENT_ID = "5d9a197d26689a901d8d945d";

export default {
  components: { Card, MajorVideo },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String,
      default: "",
    },
    showcases: {
      type: Array,
      default: () => [],
    },
    major: {
      type: Object,
      default: () => [],
    },
  },

  computed: {
    list() {
      if (this.majorFilter === "Chuyên Ngành") {
        return this.showcases.filter((s) => {
          return get(s.data, "major");
        });
      } else if (this.majorFilter === "Cơ Bản") {
        return this.showcases.filter((s) => {
          return !get(s.data, "major");
        });
      } else {
        return this.showcases;
      }
    },
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      let majors = await Major.fetch({
        department: DEPARTMENT_ID,
        _sort: "createdAt:ASC",
      });
      this.majors = majors.filter(
        (m) => m.type !== "root" && get(m, "metadata.enableShowcase", false)
      );
    },
  },
  data() {
    return {
      majorFilter: "All",
      data: "",
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      majors: [],
      descriptions: "",
      image0: "",
    };
  },
  watch: {
    major(major) {
      if (major.root) this.descriptions = major.root.descriptions;
    },
    list(list) {
      console.log(list);
      if (list[0].image[0]) this.image0 = list[0].image[0].url;
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
.hr2 {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border-color: #fdb913;
  border-width: 2px;
}
.active {
  color: #fdb913 !important;
}
</style>
