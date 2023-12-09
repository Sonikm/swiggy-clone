import useRestaurantsData from "../hooks/useRestaurantsData";
import RestaurantCard from "./RestaurantsCard";

function TopRestaurants() {
  const { topRestaurants } = useRestaurantsData();
  if (topRestaurants === undefined || topRestaurants === null)
    return <h1>No data</h1>;

  return (
    <div className="mb-4 mt-8 flex w-5/6 flex-col no-scrollbar">
      <h1 className=" text-2xl font-bold">Top restaurant chains in Delhi</h1>
      <div className="mt-8 gap-3 flex flex-row flex-nowrap no-scrollbar  overflow-x-scroll">
        {
          topRestaurants.map((restaurant) => <RestaurantCard restaurant={restaurant.info} key={restaurant.info.id} />)
        }
      </div>
    </div>
  );
}



export default TopRestaurants;
