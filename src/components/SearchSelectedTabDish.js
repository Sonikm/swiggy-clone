import useSearchSelectedTab from "../hooks/useSearchSelected";
import { DATA_IMG_URL } from "../constants/data";
import { useEffect, useState } from "react";
import icon from "../assets/placeholder_food_img.jpg";

export function SearchSelectedTabDish({searchText}) {
  const [dishList, setDishList] = useState([]);
  const { searchDish } = useSearchSelectedTab(searchText);

  useEffect(() => {
    setDishList(searchDish?.filter((item) => item?.card?.card?.info));
  }, [searchDish]);

  if (searchDish === undefined || searchDish === null) return <h1>No data</h1>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      {dishList?.map((dish, index) => (
        <DishCard dish={dish?.card?.card?.info} key={index} />
      ))}
    </div>
  );
}

function DishCard({ dish }) {
  const { name, description, imageId, price } = dish;

  return (
    <div className="flex w-full items-center cursor-pointer justify-between gap-6 rounded-lg bg-white p-4 ">
      <div className="flex flex-col text-sm ">
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
        <p className="mt-2 line-clamp-2  overflow-hidden overflow-ellipsis text-xs text-zinc-400">
          {description}
        </p>
      </div>
      <div className=" flex w-[300px] flex-col  items-center justify-start ">
        <img
          className=" h-[100px] flex-none rounded-md"
          src={ imageId ? DATA_IMG_URL + imageId : icon}
          alt=""
        />
        <span className=" -mt-6  rounded-md border bg-white p-[6px] px-4 text-center text-sm font-bold text-green-600 shadow-lg">
          ADD
        </span>
      </div>
    </div>
  );
}
