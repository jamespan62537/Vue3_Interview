import { TourListStore } from "../../TourListStore/MainStore";

const state = {
  city: "台北市",
};

const mutations = {
  UPDATE_CITY: function(state, city) {
    console.log("*** We are in CityModule mutations ***")
    state.city = city;
  },
};

const actions = {
  updateCity: function(context, city) {
    console.log("*** We are in CityModule Actions ***")
    context.commit("UPDATE_CITY", city);
    TourListStore.dispatch("updateTourList");
  },
};

export default {
  state,
  actions,
  mutations,
};
