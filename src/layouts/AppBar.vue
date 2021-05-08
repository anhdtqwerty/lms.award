<template>
  <v-app-bar
    dense
    fixed
    app
    hide-on-scroll
    color="#FDB912"
    class="elevation-0 px-0"
    :height="getNavBarHeight"
  >
    <div style="width: 100%" v-if="$vuetify.breakpoint.lgAndUp">
      <div
        style="max-width: 1140px; height: 90px"
        class="mx-auto d-flex align-center"
      >
        <a href="https://www.monsterlab.vn"
          ><v-img src="/full-logo.png" max-width="540px" contain
        /></a>
      </div>
      <div class="nav-menu">
        <div
          style="max-width: 1140px; height: 55px"
          class="mx-auto d-flex align-center justify-space-between"
        >
          <a href="https://www.monsterlab.vn">TRANG CHỦ</a>
          <a href="https://www.monsterlab.vn/daotaodoanhnghiep/">ĐÀO TẠO DN</a>
          <a href="https://www.monsterlab.vn/khoa-hoc-dai-han/">KHÓA DÀI HẠN</a>
          <a href="https://www.monsterlab.vn/khoa-hoc-ngan-han/"
            >KHÓA NGẮN HẠN</a
          >
          <a href="https://www.monsterlab.edu.vn">KHÓA ONLINE</a>
          <a href="https://award.monsterlab.vn/">SẢN PHẨM HỌC VIÊN</a>
          <a href="https://www.monsterlab.vn/dang-ky-hoc/">ĐĂNG KÝ</a>
          <a href="https://www.monsterlab.vn/dang-ky-opencamp/">OPEN CAMPUS</a>
          <a href="https://www.monsterlab.vn/blog/">BLOG</a>
        </div>
      </div>
    </div>
    <div style="width: 100%" class="d-flex align-center" v-else>
      <v-img
        class="mt-n2"
        src="/full-logo.png"
        max-width="480px"
        v-if="$vuetify.breakpoint.smAndUp"
        contain
      />
      <v-img
        class="mt-n1 ml-4"
        max-width="180px"
        src="/logo.svg"
        v-else
        contain
      />
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="setDrawer(true)"></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    getNavBarHeight() {
      if (this.$vuetify.breakpoint.lgAndUp) return "145px";
      else return "90px";
    },
  },
  methods: {
    ...mapActions(["setDrawer"]),
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
.v-application p {
  margin: 0 !important;
}
.nav-menu {
  background-color: #383838;
  width: 100%;
}
.nav-menu a:hover {
  color: #ffb300;
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
<style>
.v-toolbar__content {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style>      
