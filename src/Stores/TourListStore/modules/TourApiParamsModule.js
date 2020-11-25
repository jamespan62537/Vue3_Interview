const state = {
  TourApiParams: {
    page: 1,
    row_per_page: 20,
    sort: "",
  },
};

const mutations = {
  UPDATE_TOUR_API_PARAMS: function(state, params) {
    state.TourApiParams = params;
  },
};

const actions = {
  updateTourApiParams: async function(context, params) {
    // 更新 param
    await context.commit("UPDATE_TOUR_API_PARAMS", params);

    // 更新完 param 重新呼叫取得列表 api
    this.dispatch("updateTourList");
  },
};

export default {
  state,
  actions,
  mutations,
};
