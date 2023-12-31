import { Link } from "react-router-dom";
import useRestaurantsData from "../hooks/useRestaurantsData";
import RestaurantCard from "./RestaurantsCard";
import { HorizontalRollar } from "./HorizontalRollar";
import RestaurantsLoadingScreen from "../shimmerUIs/RestaurantsLoadingScreen";

function TopRestaurants() {
  const { topRestaurants } = useRestaurantsData();

  if (!topRestaurants) return <RestaurantsLoadingScreen />;

  return (
    <div className="no-scrollbar mb-4 mt-8 flex w-4/5 flex-col">
      <h1 className=" text-2xl font-bold xs:text-lg xs:line-clamp-2 sm:text-xl ">Top restaurant chains in your area</h1>
      <div className="no-scrollbar mb-10 xs:mb-4 xs:mt-4  mt-8 xs:text-sm flex flex-row flex-nowrap  gap-6 xs:gap-2 overflow-x-scroll">
        {topRestaurants?.map((restaurant) => (
          <Link
            to={`topRestaurants/${restaurant.info.name}/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard width={"w-64 xs:w-28 sm:w-36"}   height={"h-44 xs:h-20 sm:h-28"}  text={"xs:text-sm"} header={"xs:text-sm sm:text-sm"} subHeader={"xs:text-[10px] xs:light-text sm:text-lg"} restaurant={restaurant.info} />
          </Link>
        ))}
      </div>
      <HorizontalRollar />
    </div>
  );
}

export default TopRestaurants;
