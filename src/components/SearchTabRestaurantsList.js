import { DATA_IMG_URL } from "../constants/data";

export function SearchTabRestaurantsList({ searchRestaurants }) {
  const {
    name,
    avgRating,
    areaName,
    sla,
    costForTwoMessage,
    cloudinaryImageId,
    id,
  } = searchRestaurants;

  console.log(name + " " + id);

  return (
    <div className="flex cursor-pointer items-center justify-start gap-3 bg-white p-3">
      <img
        className="h-[88px] w-[88px] rounded-lg"
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
