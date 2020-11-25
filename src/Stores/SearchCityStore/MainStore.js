import { createStore } from "vuex";
import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";

export const SearchCityStore = createStore({
  state,
  mutations,
  actions,
});
