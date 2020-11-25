<template>
<div class="result-container">
    <StrokeBox />
    <FilterBox />
    <TourBox />
</div>
</template>

<script>
import StrokeBox from "./Box/StrokeBox";
import FilterBox from "./Box/FilterBox";
import TourBox from "./Box/TourBox";

export default {
    components: {
        StrokeBox,
        FilterBox,
        TourBox
    }
};
</script>

<style src="../../../Styles/tourList.css"></style>
