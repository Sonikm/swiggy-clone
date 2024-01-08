import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { CartItems } from "../components/CartItems";
import { OrderSummary } from "../components/OrderSummary";
import { clearItem } from "../util/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  if (!cartItems.length) return <EmptyCart />;

  function handleClearCartItems(){
    dispatch(clearItem());
  }

  return (
    <div className="fixed sm:relative mb-14  flex sm:flex-col-reverse gap-8 sm:justify-center sm:items-center h-full w-full justify-between px-4 sm:px-0">
      <div className="mx-4 sm:mx-0 sm:ml-4 w-[60%] sm:w-[80%] pt-4 ">
        <div className="flex justify-between ">
          <h2 className="mb-10 sm:mb-0 text-2xl ">My Order</h2>
          <button className="mb-10  bg-orange-500 text-white p-2 hover:bg-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-500 ring-offset-2" onClick={()=>handleClearCartItems()}>Clear Cart</button>
        </div>
        <div  className="cart-items-scroll  no-scrollbar flex flex-col gap-4">
          {cartItems?.map((menu, index) => (
            <CartItems menu={menu} key={index} />
          ))}
        </div>
      </div>
      <div className="mx-6  flex h-[80%] w-[40%] sm:w-[80%] justify-center bg-[#E3E6E9] pt-5 ">
        <OrderSummary />
      </div>
    </div>
  );
}

export default Cart;
