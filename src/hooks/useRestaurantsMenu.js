import { useEffect, useState } from "react";
import getData from "../util/getData";

function useRestaurantsMenu(resId) {
  const [resMenuData, setResMenuData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139391&lng=77.2090212&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`,
      );
      setResMenuData(data?.data?.cards);
    }

    fetchData();
  }, [resId]);

  return { resMenuData };
}

export default useRestaurantsMenu;
