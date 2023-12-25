import { Link } from "react-router-dom";
import useRestaurantsData from "../hooks/useRestaurantsData";
import RestaurantCard from "./RestaurantsCard";
import FilterRes from "./FilterRes";
import RestaurantsLoadingScreen from "./RestaurantsLoadingScreen";

function RestaurantsList() {
  const { restaurantsList } = useRestaurantsData();
  if (!restaurantsList) return <RestaurantsLoadingScreen />;

  return (
    <div className="mb-4 mt-4 flex w-5/6 flex-col justify-start">
      <h1 className=" mb-2 text-2xl font-bold">
        Restaurants with online food delivery in Delhi
      </h1>
      <FilterRes />
      <div className="no-scrollbar mt-8 flex flex-row flex-wrap items-center justify-evenly gap-3">
        {restaurantsList?.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant?.info?.name}/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
          >
            <RestaurantCard restaurant={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RestaurantsList;
