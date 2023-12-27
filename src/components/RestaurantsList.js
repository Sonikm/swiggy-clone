import { Link } from "react-router-dom";
import useRestaurantsData from "../hooks/useRestaurantsData";
import RestaurantCard from "./RestaurantsCard";
import RestaurantsLoadingScreen from "./RestaurantsLoadingScreen";
// import filterIcon from "../assets/asset 56.svg";
import { useState, useEffect } from "react";
import {filterByFastDelivery, filterByRating, filterByPriceLessThan300, filterByPriceGreaterThan300, filterByPureVeg} from "../util/helper_functions";



function RestaurantsList() {
  const { restaurantsList } = useRestaurantsData();
  const [filterRestaurant, setFilterRestaurants] = useState(restaurantsList);

  useEffect(() => {
    setFilterRestaurants(restaurantsList)
  }, [restaurantsList]);

  if (!restaurantsList) return <RestaurantsLoadingScreen />;

  console.log(restaurantsList)

  const filterButtonStyle = "whitespace-nowrap focus:bg-orange-500 focus:text-white focus:border-1 focus:border-orange-400 border p-2 px-4 rounded-3xl cursor-pointer border-gray-300 items-center flex justify-center gap-2 ";

  return (
    <div className="mb-4 mt-4 flex w-5/6 flex-col justify-start">
      <h1 className=" mb-2 text-2xl font-bold">
        Restaurants with online food delivery in Delhi
      </h1>
      <div className="my-3 flex flex-nowrap fl/ex-row gap-2 text-light text-sm overflow-x-scroll no-scrollbar">
            <button onClick={()=> setFilterRestaurants(restaurantsList)} className={filterButtonStyle}> All</button>
            <button onClick={() => filterByFastDelivery(restaurantsList, setFilterRestaurants)}  className={filterButtonStyle}>Fast Delivery</button>
            <button  onClick={() => filterByRating(restaurantsList, setFilterRestaurants)}   className={filterButtonStyle}>Rating 4.0+</button>
            <button  onClick={() => filterByPureVeg(restaurantsList, setFilterRestaurants)}   className={filterButtonStyle}>Pure Veg</button>
            <button onClick={() => filterByPriceLessThan300(restaurantsList, setFilterRestaurants)}  className={filterButtonStyle}>Less than Rs. 300</button>
            <button onClick={() => filterByPriceGreaterThan300(restaurantsList, setFilterRestaurants)}  className={filterButtonStyle}>Rs. 300-Rs. 600</button>
        </div> 
      <div className="no-scrollbar mt-8 flex flex-row  flex-wrap items-center justify-evenly gap-3">
        {filterRestaurant?.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant?.info?.name}/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
          >
            <RestaurantCard width={"w-52"} height={"h-36"} restaurant={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RestaurantsList;
 