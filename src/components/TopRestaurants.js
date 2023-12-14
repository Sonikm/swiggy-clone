import { Link } from "react-router-dom";
import useRestaurantsData from "../hooks/useRestaurantsData";
import RestaurantCard from "./RestaurantsCard";
import { HorizontalRollar } from "./HorizontalRollar";

function TopRestaurants() {
  const { topRestaurants } = useRestaurantsData();

  if (topRestaurants === undefined || topRestaurants === null)
    return <h1>No data</h1>;

  return (
    <div className="no-scrollbar mb-4 mt-10 flex w-5/6 flex-col">
      <h1 className=" text-2xl font-bold">Top restaurant chains in Delhi</h1>
      <div className="no-scrollbar mt-8 flex flex-row flex-nowrap gap-3  overflow-x-scroll mb-10">
        {topRestaurants.map((restaurant) => (
          <Link to={`menu/${restaurant.info.id}`} key={restaurant.info.id}>
            <RestaurantCard restaurant={restaurant.info} />
          </Link>
        ))}
      </div>
      <HorizontalRollar />
    </div>
  );
}

export default TopRestaurants;
