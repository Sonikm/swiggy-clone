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
    <div className="fixed flex h-full w-full justify-between px-4">
      <div className="mx-4 w-[60%] pt-4">
        <div className="flex justify-between">
          <h2 className="mb-10 text-2xl ">My Order</h2>
          <button className="mb-10 bg-orange-500 text-white p-2 hover:bg-orange-600 " onClick={()=>handleClearCartItems()}>Clear Cart</button>
        </div>
        <div className="cart-items-scroll no-scrollbar flex flex-col gap-4">
          {cartItems?.map((menu, index) => (
            <CartItems menu={menu} key={index} />
          ))}
        </div>
      </div>
      <div className="mx-6  flex h-[80%] w-[40%] justify-center bg-[#E3E6E9] pt-5 ">
        <OrderSummary />
      </div>
    </div>
  );
}

export default Cart;
