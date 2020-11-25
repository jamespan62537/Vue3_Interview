<template>
  <div class="filterBox-container">
    <ul>
      <li class="filter-string">
        <a href>排序</a>
      </li>
      <li>
        <a href>精選評分</a>
      </li>
      <li>
        <a href>價格</a>
        <ul>
          <li @click="priceSort('price_asc')">價格：低到高</li>
          <li @click="priceSort('price_desc')">價格：高到低</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
// import { TourListStore } from "../../../../Stores/TourListStore/MainStore";

export default {
  setup() {
    // 根據升降冪排列更新列表 api param
    function priceSort(sort_string) {
      this.TourListStore.dispatch("updateTourApiParams", {
        page: 1,
        row_per_page: 20,
        sort: sort_string
      });
    }

    return {
      priceSort
    };
  }
};
</script>

<style scoped>
@import "../../../../Styles/filterBox.css";
</style>
