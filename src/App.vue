<template>
  <v-app>
    <app-bar />
    <v-navigation-drawer class="hidden-md-and-up" v-model="drawer" fixed app right v-if="isMobile"></v-navigation-drawer>
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
    drawer: null,
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ]
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    }
  }
};
</script>
<style scoped>
@import url("https://rsms.me/inter/inter.css");
.v-main {
  padding: 60px 0 0 0 !important;
  font-family: "Inter", sans-serif !important;
}
body {
  font-family: "Inter", sans-serif !important;
}
</style>