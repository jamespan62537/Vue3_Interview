import GetTourListModule from "./modules/GetTourListModule";
import TourApiParamsModule from "./modules/TourApiParamsModule"

export const actions = {
  updateTourList: GetTourListModule.actions.updateTourList,
  updateTourApiParams: TourApiParamsModule.actions.updateTourApiParams,
};
