import { useDispatch } from "react-redux";
import { ReactComponent as ClearIcon } from "../assets/clear_icon.svg";
import { DATA_IMG_URL } from "../constants/data";
import icon from "../assets/placeholder_food_img.jpg";
import { decreaseItem, increaseItem, removeItem } from "../util/cartSlice";

export function CartItems({ menu }) {
  const { name, imageId, price, quantity } = menu;
  const dispatch = useDispatch();

  function handleRemoveItem(item) {
    dispatch(removeItem(item));
  }

  function handleIncreaseItem(item){
    dispatch(increaseItem(item));
  }

  function handleDecreaseItem(item){
    dispatch(decreaseItem(item));
  }


  return (
    <div className="flex flex-row items-center justify-start gap-4 bg-slate-100 p-2 pr-4">
      <img
        className="h-[80px]  w-[80px] sm:h-[70px] sm:w-[70px] overflow-hidden rounded-lg"
        src={imageId ? DATA_IMG_URL + imageId : icon}
        alt=""
      />

      <div className="flex flex-1 flex-col justify-between gap-2">
        <div className="flex items-center md:text-sm justify-between gap-4">
          <h3 className=" line-clamp-2 pr-2 ">{name}</h3>
          <p>
            <span>₹</span>
            {price / 100}
          </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex w-[100px]  md:w-[70px] items-center justify-between  border-2 md:border-1 ">
                <div className="flex h-8 w-8 md:h-5 md:w-5 cursor-pointer  items-center justify-center bg-gray-200 hover:bg-orange-500">
            <button className="h-8 w-8 md:h-5 md:w-5 outline-none border-none" onClick={()=>handleDecreaseItem(menu)}>-</button>
            </div>
            <span>{quantity}</span>
            <div className="flex h-8 w-8 md:h-5 md:w-5 cursor-pointer  items-center justify-center bg-gray-200 hover:bg-orange-500">
            <button className="h-8 w-8 md:h-5 md:w-5 outline-none" onClick={()=>handleIncreaseItem(menu)}>+</button>
            </div>
          </div>
          <button className="hover:bg-gray-200 pl-1 pt-1 cursor-pointer  w-8 h-8 flex justify-center items-center rounded-full " onClick={() => handleRemoveItem(menu)}>
            <ClearIcon className=" w-4 md:w-3 " />
          </button>
        </div>
      </div>
    </div>
  );
}
