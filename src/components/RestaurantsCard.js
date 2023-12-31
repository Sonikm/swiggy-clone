import { DATA_IMG_URL } from "../constants/data";
import vagIcon from "../assets/asset 55.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-solid-svg-icons";

function RestaurantCard({ restaurant, width, height, text, header, subHeader }) {
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
    <div
      className={
        width + " mb-6 flex flex-col gap-3 transition-all hover:scale-95"
      }
    >
      <div
        className={
          width +
          ` ` +
          height +
          " relative overflow-hidden rounded-2xl bg-cover bg-center"
        }
      >
        <img src={`${DATA_IMG_URL + cloudinaryImageId}`} alt={name} />
        <p className={` absolute bottom-[5%] left-[5%] z-10 text-xl font-bold text-white`}>
          <span className={header + ` whitespace-nowrap block`}>{aggregatedDiscountInfoV3?.header}</span>
          <span className={subHeader + ` whitespace-nowrap block`}>{aggregatedDiscountInfoV3?.subHeader}</span>
        </p>
        <div className=" gradient-box absolute bottom-0 left-0  h-full w-full "></div>
      </div>

      <div className="text-slate-600 line-clamp-1">
        <h2 className={text + ` text-bold line-clamp-1 text-[18px] xs:text-sm `}>{name}</h2>
        <div className="flex gap-2 ">
          <img className="xs:w-4" src={vagIcon} alt="" />
          <p className="flex items-center justify-center gap-1 font-bold text-light xs:text-black">
            <span> {avgRating} </span>
            <span className=" bg-slate-600 w-1 h-1 rounded-full"> </span>
            {/* <FontAwesomeIcon icon={faClock} className="text-orange-5 xs:hidden " /> */}

            <span className="xs:text-sm whitespace-nowrap "> {sla?.slaString}</span>
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
