import { useState, useEffect } from "react";
import { DATA_URL } from "../constants/data";
import fetchData from "../utilities/getData";

function useRestaurantsData() {
  const [restaurants, setRestaurants] = useState(null)
  const [bestOffers, setBestOffers] = useState(null);
  const [foodItems, setFoodItems] = useState(null)
  const [topRestaurants, setTopRestaurants] = useState(null)
  const [restaurantsList, setRestaurantsList] = useState(null)

  useEffect(() => {
    async function getData(){
      const data = await fetchData(DATA_URL);
      setRestaurants(data?.data);
      setBestOffers(data?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      setFoodItems(data?.data?.cards[1]?.card?.card?.imageGridCards?.info);
      setTopRestaurants(data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantsList(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    getData();
   
  }, []);

  return {
    restaurants,
    bestOffers,
    topRestaurants,
    foodItems,
    restaurantsList,
  };
}

export default useRestaurantsData;
