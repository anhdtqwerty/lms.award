<template>
  <v-dialog v-model="dialog" width="700">
    <v-card v-if="imageViewDialog" class="pa-2">
      <v-img class="white--text align-end" :src="imageViewDialog.url" />
      <p class="caption py-2">{{ imageViewDialog.subtitle }}</p>
      <p class="h6 font-weight-black pt-4 pb-2">{{ imageViewDialog.title }}</p>
      <p class="body-2">{{ imageViewDialog.description }}</p>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapState('view', ['imageViewDialog'])
  },
  watch: {
    imageViewDialog () {
      this.dialog = this.imageViewDialog.show
    }
  }
}
</script>
<style scoped>
p {
    margin: 0!important;
}
</style>
