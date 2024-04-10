import RestaurantsLoadingScreen from "../shimmerUIs/RestaurantsLoadingScreen";
import useRestaurantsData from "../hooks/useRestaurantsData";
import FilterRes from "../components/FilterRes";
import RestaurantCard from "../components/RestaurantsCard";
import { Link } from "react-router-dom";

function Offers() {
  const { topRestaurants } = useRestaurantsData();

  if (!topRestaurants) return <RestaurantsLoadingScreen />;

  return (
    <div className="mb-4 mt-4 flex w-full flex-col justify-center items-center">
       <div className="mb-4 mt-8 xs:mt-0 flex w-5/6 flex-col justify-start">
       <h1 className=" mb-2 text-2xl font-bold xs:text-lg">
        Best offers with online food delivery
      </h1>
      <FilterRes />
      <div className="no-scrollbar mt-8 flex flex-row  flex-wrap items-center justify-evenly gap-3">
        {topRestaurants?.map((restaurant) => (
          <Link
            to={`${restaurant.info.name}/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard
               header={"xs:text-3xl"} text={"xs:text-lg"} subHeader={"xs:text-2xl"} width={"w-64 sm:w-44 xs:w-full"} height={"h-44 xs:h-48 sm:h-32"}
              restaurant={restaurant.info}
            />
          </Link>
        ))}
      </div>
       </div>
    </div>
  );
}

export default Offers;
