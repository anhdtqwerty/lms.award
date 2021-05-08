<template>
  <div class="d-flex flex-column align-center">
    <div style="max-width: 1140px" class="mx-auto">
      <Featured :items="featuredShowcases" />
    </div>
    <MajorList
      v-for="item in rootMajors"
      :key="item.id"
      :major="item"
      :showcases="showcases"
    />
    <div class="d-flex justify-center align-center">
      <v-img
        src="../assets/footer.png"
        class="hidden-xs-only"
        height="auto"
        max-width="1140px"
        contain
      >
        <!-- <div class="notes">
        <p class="font-weight-bold">Chiêm ngưỡng trực tiếp các Sản phẩm Sáng tạo!</p>
        <p>Nếu bạn ở Hà Nội, hãy ghé thăm và cảm nhận trực tiếp các tác phẩm từ sinh viên của chúng tôi được trưng bày tại không gian của Học viện Nghệ thuật & Thiết kế Monster Lab.</p>
        <p>
          <v-icon>mdi-google-maps</v-icon>Tầng 5-6 Nhà B, 85 Lương Định Của, Đống Đa, Hà Nội
        </p>
      </div> -->
      </v-img>
    </div>
  </div>
</template>

<script>
import Featured from "@/modules/home/Featured.vue";
import MajorList from "@/modules/home/Major.vue";
import { Showcase, Major } from "@/plugins/api.js";
import { get } from "lodash";
const DEPARTMENT_ID = "5d9a197d26689a901d8d945d";
export default {
  components: {
    Featured,
    MajorList,
  },
  data() {
    return {
      rootMajors: [],
      majors: [],
      showcases: [],
      featuredShowcases: [],
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    getColor(index) {
      return index % 2 === 0 ? "#e5e5e5" : "white";
    },
    async fetchData() {
      const majors = await Major.fetch({
        department: DEPARTMENT_ID,
        _sort: "createdAt:ASC",
      });
      this.rootMajors = majors.filter((m) => m.type === "root");
      this.majors = majors.filter(
        (m) => m.type !== "root" && get(m, "metadata.enableShowcase", false)
      );
      const showcases = await Showcase.fetch({
        department: DEPARTMENT_ID,
        _sort: "createdAt:DESC",
      });
      this.featuredShowcases = showcases.filter((s) =>
        (s.position || "").includes("home-page")
      );
      this.showcases = showcases;
    },
  },
};
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
