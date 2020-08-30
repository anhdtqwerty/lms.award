<template>
  <div style="background-color: #3F2842;">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" sm="12" md="4">
          <iframe
            width="100%"
            height="250"
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDExgcsNfRWYtjLAJxz_WUVGs2EGSNS8jQ&q=Space+Needle,Seattle+WA"
            allowfullscreen
          ></iframe>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="4"
          style="background-color: #3F2842; color: white;"
          class="pa-4"
          sm12
        >
          <p class="h1 mb-2 font-weight-bold">ĐỊA CHỈ LIÊN HỆ</p>
          <p class="mb-2 subtitle-1">
            <v-icon color="white" class="mr-2">mdi-google-maps</v-icon>85 Lương Định Của – Đống Đa – Hà Nội
          </p>
          <p class="mb-2 subtitle-1">
            <v-icon color="white" class="mr-2">mdi-phone</v-icon>0919 46 2356 - 0989 039 866
          </p>
          <p class="mb-2 subtitle-1" style="color: #FDB912">
            <v-icon color="white" class="mr-2">mdi-email</v-icon>hotro@monsterlab.vn
          </p>
          <p class="mb-2 subtitle-1" style="color: #FDB912">
            <v-icon color="white" class="mr-2">mdi-web</v-icon>http://monsterlab.vn
          </p>
          <v-icon color="#FDB912" class="mt-4" large>mdi-facebook</v-icon>
          <v-icon color="#FDB912" class="mt-4 ml-4" large>mdi-youtube</v-icon>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="4"
          style="background-color: #3F2842; color: white;"
          class="pa-4"
          sm12
        >
          <p class="h1 mb-2 font-weight-bold">ĐĂNG KÝ NHẬN THÔNG TIN ƯU ĐÃI</p>
          <p class="caption" style="text-align: right">* Thông tin bắt buộc</p>
          <p class="caption">Họ Và Tên</p>
          <v-text-field label="Họ Và Tên" solo dense></v-text-field>
          <p class="caption">*Địa Chỉ Email</p>
          <v-text-field label="Email *" solo dense></v-text-field>
          <v-btn dark color="#aaa">Đăng Ký</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <div style="background-color: #1A0A1F; width: 100%; color: white; font-size: 80%;" class="pa-2">
      <v-layout class="pt-2 subtitle-2 caption">
        <p>@ 2017 by Monster Lab Vietnam</p>
        <v-spacer />
        <p class="pr-4 mb-0 caption">Giới thiệu</p>
        <p class="pr-4 mb-0 caption">Không gian lab</p>
        <p class="pr-4 mb-0 caption">blog</p>
        <p class="pr-4 mb-0 caption">Liên Hệ</p>
        
      </v-layout>
    </div>
  </div>
</template>
