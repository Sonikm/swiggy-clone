import { DATA_IMG_URL } from "../constants/data";
import vagIcon from "../assets/asset 55.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function RestaurantCard({ restaurant }) {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    aggregatedDiscountInfoV3,
    areaName,
    sla,
    cuisines,
  } = restaurant;

  return (
    <div className="flex w-80 flex-col gap-3 mb-6">
      <div className="relative h-52 w-80  overflow-hidden rounded-2xl bg-cover bg-center">
        <img src={`${DATA_IMG_URL + cloudinaryImageId}`} alt={name} />
        <span className="absolute bottom-[5%] left-[5%] z-10 text-2xl font-bold text-white">
          {aggregatedDiscountInfoV3?.header +
            " " +
            aggregatedDiscountInfoV3?.subHeader}
        </span>
        <div className=" gradient-box absolute bottom-0 left-0  h-full w-full "></div>
      </div>

      <div className="text-slate-600">
        <h2 className="text-bold line-clamp-1 text-xl ">{name}</h2>
        <div className="flex gap-2">
          <img src={vagIcon} alt="" />
          <p className="flex items-center justify-center gap-1 font-bold">
            <span> {avgRating} </span>
            <span className=""> </span>
            <FontAwesomeIcon icon={faClock} className="text-orange-500" />
            <span> {sla?.slaString}</span>
          </p>
        </div>
        <p className="text-light line-clamp-1 text-slate-600">
          {cuisines?.join(", ")}
        </p>
        <p className="text-light line-clamp-1 text-slate-600">{areaName}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
