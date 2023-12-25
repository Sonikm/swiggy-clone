import { Link } from "react-router-dom";
import useRestaurantsData from "../hooks/useRestaurantsData";
import RestaurantCard from "./RestaurantsCard";
import { HorizontalRollar } from "./HorizontalRollar";
import RestaurantsLoadingScreen from "./RestaurantsLoadingScreen";

function TopRestaurants() {
  const { topRestaurants } = useRestaurantsData();

  if (!topRestaurants) return <RestaurantsLoadingScreen />;

  return (
    <div className="no-scrollbar mb-4 mt-10 flex w-5/6 flex-col">
      <h1 className=" text-2xl font-bold">Top restaurant chains in Delhi</h1>
      <div className="no-scrollbar mb-10 mt-8 flex flex-row flex-nowrap  gap-3 overflow-x-scroll">
        {topRestaurants?.map((restaurant) => (
          <Link
            to={`topRestaurants/${restaurant.info.name}/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard restaurant={restaurant.info} />
          </Link>
        ))}
      </div>
      <HorizontalRollar />
    </div>
  );
}

export default TopRestaurants;
