<template>
  <div class="py-6 px-4">
    <p class="headline font-weight-bold ma-0">{{ title }}</p>
    <v-row class="py-6 no-gutters">
      <v-col
        v-for="showcase in showcases"
        :key="showcase.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <card :showcase="showcase" class="pa-1" />
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn outlined color="#828282">Xem thêm</v-btn>
    </v-row>
  </div>
</template>

<script>
import Card from '@/modules/gallery/card/ShowCaseCard.vue'
export default {
  components: { Card },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String,
      default: ''
    },
    showcases: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>
