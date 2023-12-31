import { useEffect, useState } from "react";
import getData from "../util/getData";

function useSearchSelectedTab(cuisine) {
  const [searchRestaurants, setSearchRestaurants] = useState(null);
  const [searchDish, setSearchDish] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const restaurants = await getData(
        `https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.6139391&lng=77.2090212&str=${cuisine}&trackingId=undefined&submitAction=STORED_SEARCH&queryUniqueId=7f803913-f492-5687-42fe-7eb0fdb47254&selectedPLTab=RESTAURANT`,
      );
      const dish = await getData(
        `https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.6139391&lng=77.2090212&str=${cuisine}&trackingId=undefined&submitAction=STORED_SEARCH&queryUniqueId=7f803913-f492-5687-42fe-7eb0fdb47254&selectedPLTab=DISH`,
      );

      setSearchRestaurants(
        restaurants?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT
          ?.cards,
      );
      setSearchDish(
        dish?.data?.cards[0]?.groupedCard?.cardGroupMap?.DISH?.cards,
      );
    }

    fetchData();
  }, [cuisine]);

  return { searchRestaurants, searchDish };
}

export default useSearchSelectedTab;
