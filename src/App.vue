<template>
  <v-app id="app">
    <app-bar />
    <v-navigation-drawer
      class="pt-16 font-setup"
      color="#363636"
      v-model="navDrawer"
      fixed
      app
      right
      height="100%"
      v-if="isMobile"
    >
      <v-list class="nav-menu">
        <v-divider class="grey darken-2"></v-divider>
        <v-list-item>
          <a href="https://www.monsterlab.vn/khoa-hoc-ngan-han/">TRANG CHỦ</a>
        </v-list-item>
        <v-divider class="grey darken-2"></v-divider>
        <v-list-item>
          <a href="/gallery/5e72e401f1c1b75f045aa1f4"
            >ĐÀO TẠO DN</a
          > </v-list-item
        ><v-divider class="grey darken-2"></v-divider>
        <v-list-item>
          <a href="https://www.monsterlab.vn/khoa-hoc-dai-han/"
            >KHÓA DÀI HẠN</a
          > </v-list-item
        ><v-divider class="grey darken-2"></v-divider>
        <v-list-item>
          <a href="https://www.monsterlab.vn/khoa-hoc-dai-han/"
            >KHÓA NGẮN HẠN</a
          > </v-list-item
        ><v-divider class="grey darken-2"></v-divider>
        <v-list-item>
          <a href="https://www.monsterlab.edu.vn">KHÓA ONLINE</a> </v-list-item
        ><v-divider class="grey darken-2"></v-divider>
        <v-list-item>
          <a href="https://award.monsterlab.vn/"
            >SẢN PHẨM HỌC VIÊN</a
          > </v-list-item
        ><v-divider class="grey darken-2"></v-divider>
        <v-list-item>
          <a href="/gallery/5e60e04d36d9ef43ae8aa099">ĐĂNG KÝ</a> </v-list-item
        ><v-divider class="grey darken-2"></v-divider>
        <v-list-item>
          <a href="https://www.monsterlab.vn/dang-ky-opencamp/"
            >OPEN CAMPUS</a
          > </v-list-item
        ><v-divider class="grey darken-2"></v-divider>
        <v-list-item>
          <a href="https://www.monsterlab.vn/dang-ky-opencamp/"
            >BLOG</a
          > </v-list-item
        ><v-divider class="grey darken-2"></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-main class="py-0">
        <router-view />
      </v-main>
    </v-content>
    <ImageViewer />
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "@/layouts/AppBar.vue";
import Footer from "@/layouts/Footer.vue";
import ImageViewer from "@/components/ImageViewer.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    AppBar,
    Footer,
    ImageViewer,
  },
  name: "App",
  data: () => ({
    navDrawer: null,
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" },
    ],
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    ...mapGetters(["drawer"]),
  },
  watch: {
    drawer() {
      this.navDrawer = true;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600");

.v-list-item a {
  color: white;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
}

#app {
  background-color: black;
}
.nav-menu a {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding-right: 20px !important;
  padding-left: 20px !important;
  text-decoration: none;
}
</style>