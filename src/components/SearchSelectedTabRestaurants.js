import useSearchSelectedTab from "../hooks/useSearchSelected";
import { Link } from "react-router-dom";
import { SearchTabRestaurantsList } from "./SearchTabRestaurantsList";
import SearchContext from "../contexts/SearchContext";
import { useContext } from "react";
import SearchTabLoading from "./SearchTabLoading";


export function SearchSelectedTabRestaurants() {
  const {searchText} = useContext(SearchContext);
  const { searchRestaurants } = useSearchSelectedTab(searchText.restaurant);

  if (!searchRestaurants) return <SearchTabLoading/>;
  

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
