import useRestaurantsData from "../hooks/useRestaurantsData";
import { DATA_IMG_URL } from "../constants/data";
import leftArrow from "../assets/asset 53.svg";
import rightArrow from "../assets/asset 54.svg";
import { Link } from "react-router-dom";
import { HorizontalRollar } from "./HorizontalRollar";

function FoodItems() {
  const { foodItems } = useRestaurantsData();

  if (foodItems === undefined || foodItems === null) return <h1>No data</h1>;

  // Function to extract collection_id from the URL
function getCollectionIdFromUrl(url) {
  const match = url.match(/collection_id=(\d+)/);
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  // Return null if collection_id is not found
  return null;
}


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
      <div className="no-scrollbar flex gap-4 overflow-x-scroll mb-10">
        {foodItems?.map((item) => (
          <Link
            key={item?.id}
            to={`category/${getCollectionIdFromUrl(item?.entityId)}`}
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

export default FoodItems;
