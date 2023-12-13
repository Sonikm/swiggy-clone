import { HorizontalRollar } from "./HorizontalRollar";
import { DATA_IMG_URL } from "../constants/data";

export function MenuItem({ menu }) {
  const { name, description, imageId, isVeg, price, isBestSeller } = menu;
  return (
    <>
      <HorizontalRollar />
      <div className="flex w-full justify-between gap-8 px-4 ">
        <div className="flex flex-col gap-1 text-sm  ">
          <div className="flex ">
            <img
              className="h-4 w-[18px]"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNQZEuoevpZLelQdB9nuoFFn_3mjyozjTAlUNwQTiI__Vm8BYY"
              alt=""
            />
            <span>⭐</span>
            <span className="text-orange-400"> Bestseller</span>
          </div>
          <p className="text-base">{name}</p>
          <p>₹{price / 100}</p>
          <p className="mt-2 text-xs text-zinc-400">{description}</p>
        </div>
        <div className=" flex flex-col items-center justify-start ">
          <img
            className="w-[120px]  rounded-md"
            src={DATA_IMG_URL + imageId}
            alt=""
          />
          <span className=" -mt-6 w-[100px] rounded-md border bg-white p-[6px] px-4 text-center text-sm font-bold text-green-600 shadow-lg">
            ADD
          </span>
        </div>
      </div>
    </>
  );
}
