<template>
  <div class="py-6 px-4">
    <p class="headline ma-0">Sản phẩm nổi bật</p>
    <v-carousel cycle style="max-height: 600px" show-arrows-on-hover hide-delimiters>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-layout class="py-6">
          <v-flex md6 sm6 class="mr-4">
            <card :item="items[i *2]" />
          </v-flex>
          <v-flex md6 sm6>
            <card :item="items[i *2 + 1]" />
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import Card from '@/modules/home/card/FreaturedCard.vue'
export default {
  components: { Card },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
    }
  }
}
</script>
