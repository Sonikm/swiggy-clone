import { useState, useEffect } from "react";
import { DATA_URL } from "../constants/data";
import getData from "../util/getData";

function useRestaurantsData() {
  const [restaurants, setRestaurants] = useState(null);
  const [bestOffers, setBestOffers] = useState(null);
  const [collectionItems, setCollectionItems] = useState(null);
  const [topRestaurants, setTopRestaurants] = useState(null);
  const [restaurantsList, setRestaurantsList] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(DATA_URL);
      setRestaurants(data?.data);

      if (data?.data?.cards[0]?.card?.card?.id === "topical_banner") {
        setBestOffers(data?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      }else {
        setBestOffers([]);
      }
      setCollectionItems(
        data?.data?.cards[1]?.card?.card?.imageGridCards?.info ||
          data?.data?.cards[0]?.card?.card?.imageGridCards?.info,
      );
      setTopRestaurants(
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ||
          data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,
      );

      setRestaurantsList(
        data?.data?.cards?.find(
          (item) => item?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [],
      );

      // console.log(data?.data)
    }
    fetchData();
  }, []);

  return {
    restaurants,
    bestOffers,
    topRestaurants,
    collectionItems,
    restaurantsList,
  };
}

export default useRestaurantsData;
