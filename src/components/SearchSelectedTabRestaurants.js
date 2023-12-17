import useSearchSelectedTab from "../hooks/useSearchSelected";
import { Link } from "react-router-dom";
import { SearchTabRestaurantsList } from "./SearchTabRestaurantsList";

export function SearchSelectedTabRestaurants({ searchText }) {
  const { searchRestaurants } = useSearchSelectedTab(searchText);

  if (searchRestaurants === undefined || searchRestaurants === null)
    return <h1>No data</h1>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      {searchRestaurants?.map((restaurant, index) => (
        <Link
          to={`restaurants/${restaurant?.card?.card?.info?.name}/${restaurant?.card?.card?.info?.id}`}
          key={restaurant?.card?.card?.info?.id}
        >
          <SearchTabRestaurantsList
            searchRestaurants={restaurant?.card?.card?.info}
          />
        </Link>
      ))}
    </div>
  );
}
