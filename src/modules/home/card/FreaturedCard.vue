<template>
  <div v-if="item" class="mx-auto elevation-0" tile>
    <v-img
      class="white--text align-end"
      :src="getUrl(item)"
      style="max-height: 320px"
      @click="show(item)"
    />
    <p class="caption my-3 font-weight-thin" style="color: #808080">{{ item.createdAt | getTime }}</p>
    <p class="title font-weight-black my-2">{{ item.title }}</p>
    <p class="caption gray--text mb-2">{{ item.description }}</p>
    <v-btn outlined color="#BDBDBD" small>Xem thêm</v-btn>
  </div>
  <div v-else />
</template>

<script>
import moment from 'moment'
import { get } from 'lodash'
import { mapMutations } from 'vuex'
export default {
  filters: {
    getTime (time) {
      return moment(time).format('DD/MM/YYYY')
    }
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapMutations('view', ['displayImage']),
    getUrl (item) {
      return get(
        item,
        'image[0].url',
        'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
      )
    },
    show (item) {
      this.displayImage({
        url: this.getUrl(item),
        subtitle: moment(item.createdAts).format('DD/MM/YYYY'),
        title: item.title,
        description: item.description
      })
    }
  }
}
</script>
