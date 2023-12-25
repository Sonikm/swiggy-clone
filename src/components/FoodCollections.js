import useRestaurantsData from "../hooks/useRestaurantsData";
import { DATA_IMG_URL } from "../constants/data";
import leftArrow from "../assets/asset 53.svg";
import rightArrow from "../assets/asset 54.svg";
import { Link } from "react-router-dom";
import { HorizontalRollar } from "./HorizontalRollar";
import { getCollectionIdFromUrl } from "../util/helper_functions";

function FoodCollections() {
  const { collectionItems } = useRestaurantsData();

  if (!collectionItems) return;

  return (
    <div className="w-5/6">
      <div className="mb-4 mt-8 flex items-center justify-between">
        <h1 className=" text-2xl font-bold">What's on your mind?</h1>
        <div className="flex items-center justify-center gap-4">
          <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-3xl bg-slate-200">
            <img src={leftArrow} alt="" />
          </span>
          <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-3xl bg-slate-200">
            <img src={rightArrow} alt="" />
          </span>
        </div>
      </div>
      <div className="no-scrollbar mb-10 flex gap-4 overflow-x-scroll">
        {collectionItems?.map((item) => (
          <Link
            key={item?.id}
            to={`collections/${item?.action?.text}/${getCollectionIdFromUrl(
              item?.entityId,
            )}`}
            className="w-[140px] flex-none"
          >
            <img src={`${DATA_IMG_URL + item?.imageId}`} alt="" />
          </Link>
        ))}
      </div>
      <HorizontalRollar />
    </div>
  );
}

export default FoodCollections;
