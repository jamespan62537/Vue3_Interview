import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { TourListStore } from "./Stores/TourListStore/MainStore"
import { SearchCityStore } from "./Stores/SearchCityStore/MainStore";

import './Styles/reset.css'

createApp(App).use(VueAxios, axios, TourListStore, SearchCityStore).mount('#app')

// user leaves the tab
document.addEventListener('blur', (e) => {
    console.log(e)
  });
  // user enters the tab (again)
  document.addEventListener('focus', (e) => {
    console.log(e)
  });