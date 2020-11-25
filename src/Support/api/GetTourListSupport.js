import axios from "axios";
import { TourListStore } from "../../Stores/TourListStore/MainStore";

export async function getTourListSupport() {
  let tour_list = [];
  let TourApiParams = TourListStore.state.TourApiParams;
  let api_url = `https://interview.tripresso.com/tour/search?page=${TourApiParams.page}&row_per_page=${TourApiParams.row_per_page}`;

  if(TourApiParams.sort !== "") {
    api_url += `&sort=${TourApiParams.sort}`;
  }

  await axios
    .get(api_url)
    .then((response) => {
      if (response.statusText === "OK") {
        tour_list = response.data.data.tour_list;
      } else {
        console.log(response);
      }
    })
    .catch((error) => {
      console.log(error);
    });

    return tour_list;
}
