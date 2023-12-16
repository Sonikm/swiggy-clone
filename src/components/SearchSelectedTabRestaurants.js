import useSearchSelectedTab from "../hooks/useSearchSelected";
import { DATA_IMG_URL } from "../constants/data";

export function SearchSelectedTabRestaurants() {
  const { searchRestaurants } = useSearchSelectedTab();

  if (searchRestaurants === undefined || searchRestaurants === null)
    return <h1>No data</h1>;

  console.log(searchRestaurants[0]?.card?.card?.info);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      {searchRestaurants?.map((restaurant, index) => (
        <SearchTabRestaurantsList
          searchRestaurants={restaurant?.card?.card?.info}
          key={index}
        />
      ))}
    </div>
  );
}

function SearchTabRestaurantsList({ searchRestaurants }) {
  const { name, avgRating, areaName, sla, costForTwoMessage, cloudinaryImageId } =
    searchRestaurants;

  return (
    <div className="flex items-center justify-start gap-3 bg-white p-3">
      <img
        className="rounded-lg w-[88px] h-[88px]"
        src={DATA_IMG_URL + cloudinaryImageId}
        alt=""
      />
      <div className="flex flex-col items-start justify-start gap-[2px]">
        <h3 className="text-ellipsis whitespace-nowrap  text-black">{name}</h3>
        <div className="flex gap-2 whitespace-nowrap text-xs text-gray-700">
          <span>⭐ {avgRating} </span>
          <span>{sla.deliveryTime} MIN</span>
          <span>{costForTwoMessage} </span>
        </div>
        <div className="text-light text-ellipsis text-sm text-gray-500 ">
          {areaName}
        </div>
      </div>
    </div>
  );
}
