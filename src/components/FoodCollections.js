import useRestaurantsData from "../hooks/useRestaurantsData";
import { DATA_IMG_URL } from "../constants/data";
import { Link } from "react-router-dom";
import { HorizontalRollar } from "./HorizontalRollar";
import { getCollectionIdFromUrl } from "../util/helper_functions";
// import leftArrow from "../assets/asset 53.svg";
// import rightArrow from "../assets/asset 54.svg";

function FoodCollections() {
  const { collectionItems } = useRestaurantsData();

  if (!collectionItems) return;

  return (
    <div className="w-4/5">
      <div className="mb-4 mt-8 flex  items-center justify-between xs:mt-4">
        <h1 className=" text-2xl font-bold sm:text-xl xs:text-lg">
          What's on your mind?
        </h1>
        {/* <div className="flex items-center justify-center gap-4">
          <span className="flex h-9 w-9 xs:w-6 xs:h-6 cursor-pointer items-center justify-center rounded-3xl bg-slate-200">
            <img className="xs:w-3" src={leftArrow} alt="" />
          </span>
          <span className="flex h-9 w-9 xs:w-6 xs:h-6 cursor-pointer items-center justify-center rounded-3xl bg-slate-200">
            <img className="xs:w-3" src={rightArrow} alt="" />
          </span>
        </div> */}
      </div>
      <div className="no-scrollbar mb-10 flex gap-4 overflow-x-scroll xs:gap-2">
        {collectionItems?.map((item) => (
          <Link
            key={item?.id}
            to={`collections/${item?.action?.text}/${getCollectionIdFromUrl(
              item?.entityId,
            )}`}
            className="w-[140px] flex-none sm:w-[100px] xs:w-[80px]"
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
