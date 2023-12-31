import { ReactComponent as SearchIcon } from "../assets/asset 52.svg";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../hooks/useRestaurantsMenu";
import { useEffect, useState } from "react";
import { ResOfferCards } from "../components/ResOfferCards";
import ResPriceLogo from "../assets/item_price.svg";
import deliveryTimeLogo from "../assets/distance.svg";
import ratingLogo from "../assets/star.png";
import { MenuList } from "../components/MenuList";
import RestaurantsLoadingScreen from "../shimmerUIs/RestaurantsLoadingScreen";

function RestaurantsMenu() {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [resOffers, setResOffers] = useState(null);
  const [resMenuList, setResMenuList] = useState(null);
  const { resMenuData } = useRestaurantsMenu(resId);

  useEffect(() => {
    if (resMenuData && resMenuData.length > 0) {
      setResInfo(
        resMenuData.find((item) => item?.card?.card?.info)?.card?.card?.info ||
          null,
      );

      setResOffers(
        resMenuData.find(
          (item) => item?.card?.card?.gridElements?.infoWithStyle?.offers,
        )?.card?.card?.gridElements?.infoWithStyle?.offers || [],
      );

      setResMenuList(
        resMenuData.find(
          (item) => item?.groupedCard?.cardGroupMap?.REGULAR?.cards,
        )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [],
      );
    }
  }, [resMenuData]);

  if (!resInfo) return <RestaurantsLoadingScreen/>;

  const {
    city,
    name,
    cuisines,
    areaName,
    avgRating,
    sla,
    totalRatingsString,
    feeDetails,
    costForTwoMessage,
  } = resInfo;

  return (
    <div className=" flex w-full flex-col items-center justify-center  gap-8 py-8 text-zinc-500">
      <div className="flex sm:w-11/12 w-9/12 flex-col gap-8 ">
        <div className="flex  items-center justify-between">
          <div className="text-xs text-gray-400">
            <span>Home</span> / <span>{city}</span> /{" "}
            <span className="text-gray-600"> {name} </span>
          </div>
          <SearchIcon />
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-6 px-3 ">
          <div className="flex w-full items-start justify-between ">
            <div className="text-xs">
              <h2 className="mb-3 text-xl font-bold text-black xs:text-lg ">{name}</h2>
              <p>{cuisines.join(", ")} </p>
              <p>
                {areaName}, {sla.lastMileTravelString}
              </p>
              <p className="mt-4 text-sm xs:text-xs">{feeDetails.message}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-md border p-2 text-xs">
              <div className="flex items-center justify-start gap-2">
                <img src={ratingLogo} className="w-4 " alt="" />
                <span className="font-bold text-green-600 "> {avgRating}</span>
              </div>
              <div className="h-[1px] w-full bg-slate-300"></div>
              <span className="whitespace-nowrap">{totalRatingsString}</span>
            </div>
          </div>
          <div className="w-full border-t-[2px] border-dotted border-gray-300"></div>

          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-row items-center justify-start gap-4 xs:gap-1 font-bold text-black">
              <div className="flex flex-row items-center justify-start gap-2">
                <img className="xs:w-3" src={deliveryTimeLogo} alt="" />
                <span className="text-sm"> {sla?.slaString} </span>
              </div>
              <div className="flex flex-row items-center justify-start gap-2">
                <img className="xs:w-3" src={ResPriceLogo} alt="" />
                <span className="text-sm xs:text-xs"> {costForTwoMessage}</span>
              </div>
            </div>
            <div className="no-scrollbar flex items-center gap-3 overflow-x-scroll">
              {resOffers.map((offer, index) => (
                <ResOfferCards offers={offer?.info} key={index} />
              ))}
            </div>
          </div>
          <MenuList resMenuList={resMenuList} />
        </div>
      </div>
    </div>
  );
}

export default RestaurantsMenu;
