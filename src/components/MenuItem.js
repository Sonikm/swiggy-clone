import { HorizontalRollar } from "./HorizontalRollar";
import { DATA_IMG_URL } from "../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../util/cartSlice";
import placeholderImage from "../assets/placeholder_food_img.jpg";

export function MenuItem({ menu }) {
  const { name, description, imageId, price } = menu;
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  if(!price) return;

  function handleAddToCart(menu) {
    const isAlreadyAdded = cartItems.some((item) => item.id === menu.id);

    if (!isAlreadyAdded) {
      dispatch(addItem(menu));
    }    
  }

  return (
    <>
      <HorizontalRollar />
      <div className="flex w-full justify-between gap-8 px-4 ">
        <div className="flex flex-col gap-1 text-sm  ">
          <div className="flex justify-start items-center ">
            <img
              className="h-4 w-[18px] sm:w-[14px] sm:h-3"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNQZEuoevpZLelQdB9nuoFFn_3mjyozjTAlUNwQTiI__Vm8BYY"
              alt=""
            />
            <span>⭐</span>
            <span className="text-orange-400 sm:text-xs"> Bestseller</span>
          </div>
          <p className="text-base line-clamp-2 overflow-ellipsis sm:text-sm">{name}</p>
          <p>₹{price / 100 || ""}</p>
          <p className="mt-2 line-clamp-2 overflow-ellipsis text-xs text-zinc-400">
            {description}
          </p>
        </div>
        <div className=" flex flex-col items-center justify-start ">
          <img
            className="h-[100px] w-[100px] sm:w-[80px] sm:h-[80px] rounded-md"
            src={imageId ? DATA_IMG_URL + imageId : placeholderImage}
            alt=""
          />
          <span
            onClick={() => handleAddToCart(menu)}
            className=" -mt-6 w-[100px] xs:w-[60px] cursor-pointer rounded-md border bg-white p-[6px] px-4 text-center text-sm font-bold text-green-600 shadow-lg"
          >
            ADD
          </span>
        </div>
      </div>
    </>
  );
}
