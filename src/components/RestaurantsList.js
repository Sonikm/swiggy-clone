import { Link } from "react-router-dom";
import useRestaurantsData from "../hooks/useRestaurantsData";
import RestaurantCard from "./RestaurantsCard";

function RestaurantsList() {
  const { restaurantsList } = useRestaurantsData();
  if (restaurantsList === undefined || restaurantsList === null)
    return <h1>No data</h1>;

  return (
    <div className="mb-4 mt-8 flex w-5/6 flex-col justify-start">
      <h1 className=" text-2xl font-bold">
        Restaurants with online food delivery in Delhi
      </h1>
      <div className="no-scrollbar mt-8 flex flex-row flex-wrap items-center justify-evenly gap-3">
        {restaurantsList?.map((restaurant) => (
          <Link to="menu" key={restaurant.info.id}>
            <RestaurantCard restaurant={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RestaurantsList;
