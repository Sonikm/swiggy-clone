import useRestaurantsData from "../hooks/useRestaurantsData";
import { DATA_IMG_URL } from "../constants/data";
import leftArrow from "../assets/asset 53.svg";
import rightArrow from "../assets/asset 54.svg";

function FoodItems() {
  const { foodItems } = useRestaurantsData();

  if (foodItems === undefined || foodItems === null) return <h1>No data</h1>;

  return (
    <div className="w-5/6">
      <div className="mb-4 mt-8 flex items-center justify-between">
        <h1 className=" text-2xl font-bold">What's on your mind?</h1>
        <div className="flex items-center justify-center gap-4">
          <span className="w-9 h-9 flex items-center justify-center rounded-3xl cursor-pointer bg-slate-200">
            <img src={leftArrow} alt="" />
          </span>
          <span className="w-9 h-9 flex items-center justify-center rounded-3xl cursor-pointer bg-slate-200">
            <img src={rightArrow} alt="" />
          </span>
        </div>
      </div>
      <div className="no-scrollbar flex gap-4 overflow-x-scroll">
        {foodItems?.map((item) => (
          <img className="w-[140px]"
            src={`${DATA_IMG_URL + item?.imageId}`}
            key={item?.id}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default FoodItems;
