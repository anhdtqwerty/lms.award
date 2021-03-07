<template>
  <div class="py-6 px-4">
    <p>{{ major.root.descriptions }}</p>
    <div v-for="item in majors" :key="item.id">
      <p v-if="item.root.id == major.root.id">{{item.title}}</p>
    </div>
    <p class="headline font-weight-bold ma-0">{{ title }}</p>

    <div
      style="background-color: #f2f2f2; border-radius: 4px"
      class="pt-6 pl-6 mt-2 d-flex"
    >
      <v-select
        v-show="false"
        v-model="data"
        v-if="major.courses"
        :items="major.courses"
        item-value="id"
        item-text="title"
        dense
        outlined
        label="Loại Môn"
        style="max-width: 200px"
      ></v-select
      ><v-select
        v-model="majorFilter"
        :items="['Chuyên Ngành', 'Cơ Bản', 'All']"
        item-value="id"
        item-text="title"
        dense
        outlined
        label="Môn học"
        style="max-width: 200px"
      ></v-select>
    </div>

    <v-row class="py-6 no-gutters">
      <v-col
        v-for="(showcase, index) in list"
        :key="showcase.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
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
import { Major } from "@/plugins/api.js";
import { get } from "lodash";
const DEPARTMENT_ID = "5d9a197d26689a901d8d945d";

export default {
  components: { Card },
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
    console.log(this.majors)
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
    };
  },
};
</script>
