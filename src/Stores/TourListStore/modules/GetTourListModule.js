import { getTourListSupport } from "../../../Support/api/GetTourListSupport";
import { SearchCityStore } from "../../SearchCityStore/MainStore";

const state = {
  tour_list: [],
};

const mutations = {
  TOURLIST(state, tour_list) {
    state.tour_list = tour_list;
  },
};

const actions = {
  async updateTourList(context) {
    console.log("We are now in: ", SearchCityStore.state.city);
    let tour_list = [];
    tour_list = await getTourListSupport();

    context.commit("TOURLIST", tour_list);
  },
};

export default { state, mutations, actions };
