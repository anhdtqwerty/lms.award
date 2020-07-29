<template>
  <v-app-bar fixed class="elevation-0 app-bar" app height="110px">
    <v-img src="/logo.svg" height="80%" max-width="180px" contain class="mb-12" />
    <v-spacer />
    <v-col
      col="12"
      md="10"
      sm="10"
      xs="12"
      lg="9"
      class="hidden-sm-and-down"
    >
      <v-row justify="end">
        <v-btn text small href="/" class="ml-4">TRANG CHỦ</v-btn>
        <v-btn text small href="https://www.monsterlab.vn/khoa-hoc-ngan-han/" target="_blank" class="ml-4">KHÓA DÀI HẠN</v-btn>
        <v-btn text small href="https://www.monsterlab.vn/khoa-hoc-dai-han/" class="ml-4">KHÓA NGẮN HẠN</v-btn>
        <v-btn text small href="https://www.monsterlab.vn/dang-ky-opencamp/" class="ml-4 active">SẢN PHẨM HỌC VIÊN</v-btn>
        <v-btn text small class="ml-4">ĐĂNG KÝ</v-btn>
        <v-btn text small href="https://www.monsterlab.vn/dang-ky-opencamp/" class="m-4">OPEN CAMPUS</v-btn>
      </v-row>
      <v-row justify="end" class="tag mt-2 mb-6">
        <a href="/gallery/5e72e401f1c1b75f045aa1f4">Học Phần nền Tảng</a>
        <a href="/gallery/5e60e04d36d9ef43ae8aa099">Chuyên Ngành 2D</a>
        <a href="/gallery/5e60e03836d9ef43ae8aa098">Chuyên Ngành Art</a>
        <a href="/gallery/5e60e04d36d9ef43ae8aa099">Màu Nước Cơ Bản</a>
        <a href="/gallery/5e60e04d36d9ef43ae8aa099">Character Sketch</a>
        <a href="/gallery/5e60e04d36d9ef43ae8aa099" class="mr-4">Character Sketch</a>
      </v-row>
    </v-col>
    <v-divider style="position: absolute; bottom: 0; width: 100%; background-color: black;" />
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
@import url('https://rsms.me/inter/inter.css');
.app-bar {
  background-color: white !important;
}
.logo {
  border-right: solid 1px #000;
}
.v-application p {
  margin: 0 !important;
}
.tag a {
  color: black;
  font-size: 13px;
  margin-left: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 200;
}
.active {
  color: #fdb912 !important;
  border-bottom: solid 1px #fdb912;
  font-weight: 900 !important;
}
.active .v-btn__content{
  color: #fdb912 !important;
  border-bottom: solid 1px #fdb912;
  font-weight: 900 !important;
}
</style>
