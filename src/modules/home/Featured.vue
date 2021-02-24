<template>
  <div>
    <v-carousel
      dark
      cycle
      :show-arrows="false"
      hide-delimiter-background
      v-model="model"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              <card :item="item" />
            </div>
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
