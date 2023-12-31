import { useEffect, useState } from "react";
import getData from "../util/getData";

function useRestaurantsMenu(resId) {
  const [resMenuData, setResMenuData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(
        `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D28.6139391%26lng%3D77.2090212%26restaurantId%3D${resId}%26catalog_qa%3Dundefined%26submitAction%3DENTER`,
      );
      setResMenuData(data?.data?.cards);
    }

    fetchData();
  }, [resId]);

  return { resMenuData };
}

export default useRestaurantsMenu;
