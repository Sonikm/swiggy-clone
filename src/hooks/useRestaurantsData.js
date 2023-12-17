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
      setBestOffers(data?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      setCollectionItems(data?.data?.cards[1]?.card?.card?.imageGridCards?.info);
      setTopRestaurants(
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      setRestaurantsList(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
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
