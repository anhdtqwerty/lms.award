<template>
  <v-app-bar
    color="#FDB912"
    fixed
    dense
    hide-on-scroll
    class="elevation-0 app-bar pa-0"
    app
    height="104px"
  >
    <div style="width:100%" class=" hidden-sm-and-down">
      <div class="top-container d-flex justify-center align-center">
        <div class="top-container-inner pt-1">
          <v-img href="https://www.monsterlab.vn" src="/logo.svg" max-width="300px" class="mr-3" contain />
          <v-img href="https://www.monsterlab.vn" src="/slogan.svg" max-width="300px" class="mb-1" contain />
        </div>
      </div>
      <div class="bottom-container hidden-md-and-down">
        <div class="bottom-container-inner font-weight-bold">
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
      class="hidden-sm-and-up d-flex justify-space-between"
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
.top-container {
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}
.top-container-inner {
  
  display: flex;
  width: 70%;
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
  left: 0;
}
.bottom-container-inner {  
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  bottom: 0;
  width: 80%;
  left: 0;
}
.bottom-container-inner :hover{
  color: #FFB300;
}
.bottom-container-inner a {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  padding: 14px;
}

</style>
