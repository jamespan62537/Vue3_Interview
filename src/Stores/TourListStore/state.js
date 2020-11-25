import GetTourListModules from "../TourListStore/modules/GetTourListModule"
import TourApiParamsModule from "../TourListStore/modules/TourApiParamsModule"

export const state = {
  tour_list: GetTourListModules.state.tour_list,
  TourApiParams: TourApiParamsModule.state.TourApiParams
};
