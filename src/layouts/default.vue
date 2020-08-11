<template>
  <v-app dark>
    <AppBar />
    <v-content>
      <nuxt />
    </v-content>
    <div>
      <div class="pa-4">
        <v-layout class="pb-4 pt-2">
          <v-spacer />
          <v-icon class="pr-2">mdi-facebook</v-icon>
          <v-icon class="pr-2">mdi-instagram</v-icon>
          <v-icon class="pr-2">mdi-youtube</v-icon>
        </v-layout>
        <v-row class="contact pa-2" justify="center" align="center">
          <v-col sm6 md6 class="logo">
            <v-img src="/logo.svg" style="max-height: 60px" contain />
          </v-col>
          <v-col class="pa-4">
            <Contact />
          </v-col>
        </v-row>
        <v-layout class="pt-4 subtitle-2">
          <p>@ 2017 by Monster Lab Vietnam</p>
          <v-spacer />
          <p class="pr-4 mb-0">Giới thiệu</p>
          <p class="pr-4 mb-0">Không gian lab</p>
          <p class="pr-4 mb-0">blog</p>
          <p class="pr-4 mb-0">Liên Hệ</p>
        </v-layout>
      </div>
      <ImageViewer />
    </div>

  </v-app>
</template>

<script>
import Contact from '@/modules/footer/Contact.vue'
import ImageViewer from '@/components/ImageViewer.vue'
import AppBar from '@/layouts/AppBar.vue'
export default {
  components: { Contact, AppBar, ImageViewer },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Galery',
          to: '/galery'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style scoped>
.app-bar {
  background-color: white !important;
}
.contact {
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
}
.logo {
  border-right: solid 1px #000;
}
.v-application p {
  margin: 0 !important;
}
</style>
