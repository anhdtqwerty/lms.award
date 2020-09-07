<template>
  <v-row class="py-6 px-4" :style="'background-color: ' + background">
    <v-col cols="12" sm="12" md="3" lg="2">
      <p class="headline pt-2" style="text-transform: capitalize;">Chương trình<br> {{ major.title.toLowerCase() }}</p>
    </v-col>
    <v-col cols="12" sm="12" md="9" lg="10" style="overflow-x: scroll">
      <div style="display: flex; flex-wrap: nowrap">
        <card
          v-for="item in major.majors"
          :key="item.id"
          :major="item"
          :showcase="getShowCase(item)"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Card from "@/modules/home/card/ShowCaseCard.vue";
export default {
  components: { Card },
  props: {
    major: {
      type: Object,
      default: () => {}
    },
    background: {
      type: String,
      default: "white"
    },
    showcases: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
    };
  },
  methods: {
    getShowCase(major) {
      return this.showcases.find(s => s.major.id === major.id && (s.position || '').includes('highlight'));
    }
  }
};
</script>
