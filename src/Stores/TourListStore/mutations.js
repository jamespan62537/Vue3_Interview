import GetTourListModules from "../TourListStore/modules/GetTourListModule"
import TourApiParamsModule from "../TourListStore/modules/TourApiParamsModule"

export const mutations = {
  TOURLIST: GetTourListModules.mutations.TOURLIST,
  UPDATE_TOUR_API_PARAMS: TourApiParamsModule.mutations.UPDATE_TOUR_API_PARAMS,
};
