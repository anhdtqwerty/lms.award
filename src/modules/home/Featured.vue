<template>
  <div>
    <v-carousel
      dark
      cycle
      :show-arrows="false"
      v-model="model"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        transition="fade-transition"
      >
        <v-sheet max-width="1140px" tile>
          <v-row class="fill-height" align="center" justify="center" no-gutters>
            <card :item="item" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import Card from "@/modules/home/card/FreaturedCard.vue";
export default {
  data() {
    return {
      model: 0,
    };
  },
  components: { Card },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.theme--dark.v-sheet {
  background-color: black;
}
</style>
