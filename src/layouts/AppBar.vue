<template>
  <v-app-bar
    color="#FDB912"
    fixed
    dense
    hide-on-scroll
    class="elevation-0 app-bar pa-0"
    app
    height="90"
  >
    <div style="width:100%" class="hidden-sm-and-down">
      <div class="top-container">
        <div class="top-container-inner">
          <v-img src="/logo.svg" max-width="180px" class="mr-2" contain />
          <v-img class="mb-1" src="/slogan.svg" max-width="180px" contain />
        </div>
      </div>
      <div justify="end" class="bottom-container hidden-sm-and-down">
        <div class="bottom-container-inner">
          <a href="https://www.monsterlab.vn">TRANG CHỦ</a>
          <a href="https://www.monsterlab.vn/daotaodoanhnghiep/">ĐÀO TẠO DN</a>
          <a href="https://www.monsterlab.vn/khoa-hoc-dai-han/">KHÓA DÀI HẠN</a>
          <a href="https://www.monsterlab.vn/khoa-hoc-ngan-han/">KHÓA NGẮN HẠN</a>
          <a href="https://www.monsterlab.edu.vn">KHÓA ONLINE</a>
          <a href="https://www.monsterlab.vn/dang-ky-hoc/">ĐĂNG KÝ</a>
          <a href="https://www.monsterlab.vn/dang-ky-opencamp/">OPEN CAMPUS</a>
          <a href="https://www.monsterlab.vn/blog/">BLOG</a>
        </div>
      </div>
    </div>
    <div
      style="width:100%"
      class="hidden-xs-and-up d-flex justify-space-between"
      v-if="isMobile"
    >
      <v-img src="/logo.svg" max-width="180px" class="mr-2" contain />
      <v-app-bar-nav-icon @click.stop="setDrawer(true)"></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
  
</template>

<script>

import {mapActions} from 'vuex'
export default {
  data() {
    return {
     
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    }
  },
  methods: {
    ...mapActions(['setDrawer'])
  }
};
</script>
<style scoped>
.top-container {
  display: flex;
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}
.top-container-inner {
  display: flex;
  width: 100%;
  max-width: 720px;
  justify-content: flex-start;
  align-items: flex-end;
}
.v-application p {
  margin: 0 !important;
}
.bottom-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
  color: white;
  background-color: #3f2842;
  width: 100%;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 36px;
}
.bottom-container-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  max-width: 720px;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 36px;
}
.bottom-container-inner a {
  font-size: 13px;
  font-weight: 200;
  color: white;
  text-decoration: none;
}
</style>
