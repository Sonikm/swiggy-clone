import { useEffect, useState } from "react";
import getData from "../util/getData";
import { useSelector } from "react-redux";

function useRestaurantsPlaceId() {
  const [restaurantPlaceName, setRestaurantPlaceName] = useState(null);

  const placeId = useSelector((store) => store.location.locationId)

  console.log()

  useEffect(() => {
    async function fetchData() {
      const data = await getData(
        `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmisc%2Faddress-recommend%3Fplace_id%3D${placeId}`,
      );
      setRestaurantPlaceName(data?.data[0]);
    }

    fetchData();
  }, [placeId]);

  return { restaurantPlaceName };
}

export default useRestaurantsPlaceId;
