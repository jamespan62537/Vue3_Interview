<template>
  <div class="interview-container">
    <KvHeader />
    <SearchCity />
    <TourListContent />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { TourListStore } from "../../Stores/TourListStore/MainStore";

import KvHeader from "../../Components/TourSearchComponent/Header/KvHeader";
import TourListContent from "../../Components/TourSearchComponent/Content/TourListContent";
import SearchCity from "../../Components/TourSearchComponent/VuexModuleTest/SearchCity";

export default {
  name: "App",
  components: {
    KvHeader,
    TourListContent,
    SearchCity
  },

  setup() {
    // 呼叫 updateTourList 取得初始列表
    async function getTourListService() {
      await TourListStore.dispatch("updateTourList");
    }

    onMounted(() => {
      getTourListService();
    });
  }
};
</script>

<style scoped>
@import "../../Styles/home.css";
</style>
