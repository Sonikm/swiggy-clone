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
        `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${placeId}`,
      );
      setRestaurantPlaceName(data?.data[0]);
    //   console.log(data)
    }

    fetchData();
  }, [placeId]);

  return { restaurantPlaceName };
}

export default useRestaurantsPlaceId;