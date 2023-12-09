import useRestaurantsData from "../hooks/useRestaurantsData";
import RestaurantCard from "./RestaurantsCard";

function RestaurantsList() {
    const { restaurantsList } = useRestaurantsData();
    if (restaurantsList === undefined || restaurantsList === null)
      return <h1>No data</h1>;
  
    return (
      <div className="mb-4 mt-8 flex w-5/6 flex-col justify-start">
        <h1 className=" text-2xl font-bold">Restaurants with online food delivery in Delhi</h1>
        <div className="mt-8 gap-3 flex flex-row flex-wrap justify-evenly items-center no-scrollbar">
          {
            restaurantsList?.map((restaurant) => <RestaurantCard restaurant={restaurant.info} key={restaurant.info.id} />)
          }
        </div>
      </div>
    );
}

export default RestaurantsList
