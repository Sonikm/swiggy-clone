import useSearchSelectedTab from "../hooks/useSearchSelected";
import { DATA_IMG_URL } from "../constants/data";
import { useEffect, useState } from "react";
import icon from "../assets/placeholder_food_img.jpg";
import SearchContext from "../contexts/SearchContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../util/cartSlice";
import SearchTabLoading from "../shimmerUIs/SearchTabLoading";

export function SearchSelectedTabDish() {
  const { searchText } = useContext(SearchContext);
  const [dishList, setDishList] = useState([]);
  const { searchDish } = useSearchSelectedTab(searchText.restaurant);

  useEffect(() => {
    setDishList(searchDish?.filter((item) => item?.card?.card?.info));
  }, [searchDish]);

  if (!searchDish) return <SearchTabLoading />;

  return (
    <div className="grid grid-cols-2  gap-4 lg:grid-cols-1">
      {dishList?.map((dish, index) => (
        <DishCard dish={dish?.card?.card?.info} key={index} />
      ))}
    </div>
  );
}

function DishCard({ dish }) {
  const { name, description, imageId, price } = dish;

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  if (!price) return;

  function handleAddToCart(menu) {
    const isAlreadyAdded = cartItems.some((item) => item.id === menu.id);

    if (!isAlreadyAdded) {
      dispatch(addItem(menu));
    }
  }
  return (
    <div className="flex w-full items-center justify-between gap-6 rounded-lg bg-white p-4 ">
      <div className="flex flex-col text-sm ">
        <div className="flex items-center justify-start text-xs xs:text-[10px] ">
          <img
            className="h-4 w-[18px] xs:h-3 xs:w-[10px]"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNQZEuoevpZLelQdB9nuoFFn_3mjyozjTAlUNwQTiI__Vm8BYY"
            alt=""
          />
          <span>⭐</span>
          <span className="text-orange-400"> Bestseller</span>
        </div>
        <p className="line-clamp-1 text-base xs:text-sm">{name}</p>
        <p>₹{price / 100}</p>
        <p className="xs: mt-2 line-clamp-2  overflow-hidden overflow-ellipsis text-xs text-zinc-400">
          {description}
        </p>
      </div>
      <div className=" flex w-[300px] flex-col  items-center justify-start ">
        <img
          className=" h-[100px] w-[100px] flex-none rounded-md xs:h-[80px] xs:w-[80px]"
          src={imageId ? DATA_IMG_URL + imageId : icon}
          alt=""
        />
        <button
          onClick={() => handleAddToCart(dish)}
          className=" -mt-6  cursor-pointer  rounded-md border bg-white p-[6px] px-4 text-center text-sm font-bold text-green-600 shadow-lg"
        >
          ADD
        </button>
      </div>
    </div>
  );
}
