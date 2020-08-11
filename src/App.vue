<template>
  <v-app>
    <app-bar />

    <v-content>
      <v-main>
        <router-view />
      </v-main>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/layouts/AppBar.vue";
export default {
  components: {
    AppBar
  },
  name: "App",

  data: () => ({
    //
  })
};
</script>
<style scoped>
@import url("https://rsms.me/inter/inter.css");
  .v-main {
    padding: 60px 0 0 0 !important;
    font-family: 'Inter', sans-serif !important;
  }
  body {
    font-family: 'Inter', sans-serif !important;
  }
</style>