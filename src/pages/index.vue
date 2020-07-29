<template>
  <div>
    <Featured :items="featuredShowcases" />
    <MajorList
      v-for="(item, index) in rootMajors"
      :key="item.id"
      :major="item"
      :showcases="showcases"
      :background="getColor(index)"
    />
    <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
      <div class="notes">
        <p class="font-weight-bold">Chiêm ngưỡng trực tiếp các Sản phẩm Sáng tạo!</p>
        <p>Nếu bạn ở Hà Nội, hãy ghé thăm và cảm nhận trực tiếp các tác phẩm từ sinh viên của chúng tôi được trưng bày tại không gian của Học viện Nghệ thuật & Thiết kế Monster Lab.</p>
        <p>
          <v-icon>mdi-google-maps</v-icon>Tầng 5-6 Nhà B, 85 Lương Định Của, Đống Đa, Hà Nội
        </p>
      </div>
    </v-img>
  </div>
</template>

<script>
import Featured from '~/modules/home/Featured.vue'
import MajorList from '~/modules/home/Major.vue'
import { Showcase, Major } from '~/plugins/api.js'
export default {
  components: {
    Featured,
    MajorList
  },
  data () {
    return {
      rootMajors: [],
      majors: [],
      showcases: [],
      featuredShowcases: []
    }
  },
  async mounted () {
    await this.fetchData()
  },
  methods: {
    getColor (index) {
      return index % 2 === 0 ? '#e5e5e5' : 'white'
    },
    async fetchData () {
      const majors = await Major.fetch({
        department: '5d9a197d26689a901d8d945d'
      })
      this.rootMajors = majors.filter(m => m.type === 'root')
      this.majors = majors.filter(m => m.type !== 'root')
      const showcases = await Showcase.fetch({
        department: '5d9a197d26689a901d8d945d'
      })
      this.featuredShowcases = showcases.filter(s => s.position === 'home-page')
      this.showcases = showcases
    }
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
