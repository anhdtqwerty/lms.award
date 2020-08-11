<template>
  <div>
    <MajorList :title="major.title" :showcases="showcases" />
  </div>
</template>

<script>
import MajorList from '@/modules/gallery/Major.vue'
import { Showcase, Major } from '@/plugins/api.js'
export default {
  components: {
    MajorList
  },
  data () {
    return {
      major: {},
      showcases: []
    }
  },
  async mounted () {
    this.major = await Major.fetchOne(this.$route.params.id)
    this.showcases = await Showcase.fetch({ major: this.$route.params.id })
  }
}
</script>
<style scoped>
.notes {
  position: absolute;
  background-color: #fdb912 !important;
  right: 0;
  bottom: 0;
  width: 400px;
  padding: 50px 20px;
}
</style>
