<template>
  <div class="tourList-container">
    <ul>
      <li v-for="(tour, index) in tour_list" :key="index">
        <div class="tour-img" />
        <div class="tour-detail">
          <div class="tour-agency">{{tour.agency}}</div>
          <div class="tour-title">{{tour.title}}</div>
          {{tour.min_price}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { TourListStore } from "../../../../Stores/TourListStore/MainStore";

export default {
  setup() {
    // 監聽當列表，當列表有變動時將結果指向給 tour_list
    const tour_list = computed(() => TourListStore.state.tour_list);

    return {
      tour_list
    };
  }
};
</script>

<style scoped>
@import "../../../../Styles/tourBox.css";
</style>
