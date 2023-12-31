import { useEffect, useState } from "react";
import getData from "../util/getData";

function useSearchSelectedTab(cuisine) {
  const [searchRestaurants, setSearchRestaurants] = useState(null);
  const [searchDish, setSearchDish] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const restaurants = await getData(
        `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Fsearch%2Fv3%3Flat%3D28.6139391%26lng%3D77.2090212%26str%3D${cuisine}%26trackingId%3Dundefined%26submitAction%3DENTER%26queryUniqueId%3De7725d3a-0f06-e8c8-dfdb-cd62ac384d72%26selectedPLTab%3DRESTAURANT`,
      );
      const dish = await getData(
        `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Fsearch%2Fv3%3Flat%3D28.6139391%26lng%3D77.2090212%26str%3D${cuisine}%26trackingId%3Dundefined%26submitAction%3DSTORED_SEARCH%26queryUniqueId%3D7f803913-f492-5687-42fe-7eb0fdb47254%26selectedPLTab%3DDISH`,
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
