<template>
  <div style="margin: 20px;">
    <p>當前搜尋的縣市為：{{member_name}}</p>
    <input type="text" v-model="member_name" />
    <button @click="changeCity">確認</button>

    <p>當前搜尋的縣市為：{{city_name.name}}</p>
    <input type="text" v-model="city_name.name" />
    <button @click="changeCity">確認</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";
import { SearchCityStore } from "../../../Stores/SearchCityStore/MainStore";
export default {
  setup() {
    const name = computed(() => SearchCityStore.state.city);
    let member_name = ref("James");
    console.log(member_name)

    watch(member_name, (newVal)=>{
      console.log("ref:", newVal)
    })

    let city_name = reactive({name: "J"});
    console.log(city_name)

     watch(city_name, (newVal)=>{
      console.log("reactive:", newVal)
    })

    function changeCity() {
      // SearchCityStore.commit("updateCity", member_name.value);
      SearchCityStore.commit("UPDATE_CITY", member_name.value);
    }

    return {
      name,
      member_name,
      city_name,
      changeCity
    };
  }
};
</script>
