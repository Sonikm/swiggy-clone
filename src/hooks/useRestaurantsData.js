import { useState, useEffect } from "react";
// import { DATA_URL } from "../constants/data";
import getData from "../util/getData";
import { useSelector } from "react-redux";
import { DATA_URL } from "../constants/data";

function useRestaurantsData() {
  const [restaurants, setRestaurants] = useState(null);
  const [bestOffers, setBestOffers] = useState(null);
  const [collectionItems, setCollectionItems] = useState(null);
  const [topRestaurants, setTopRestaurants] = useState(null);
  const [restaurantsList, setRestaurantsList] = useState(null);
  const [topRestaurantTitle, setTopRestaurantTitle] = useState(null);
  const [restaurantListTitle, setRestaurantListTitle] = useState(null);

  const locationLatLng = useSelector((store) => store.location.locationLatLng);
  
  useEffect(() => {
    async function fetchData() {
      const data = await getData(DATA_URL);
      // const data = await getData(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${locationLatLng.lat}&lng=${locationLatLng.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
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
          setTopRestaurantTitle( data?.data?.cards[2]?.card?.card?.header?.title)
          setRestaurantListTitle( data?.data?.cards[3]?.card?.card?.title)
          console.log(data?.data)
        }


    fetchData();
  }, [locationLatLng]);

  return {
    restaurants,
    bestOffers,
    topRestaurants,
    collectionItems,
    restaurantsList,
    topRestaurantTitle
    ,restaurantListTitle
  };
}

export default useRestaurantsData;
