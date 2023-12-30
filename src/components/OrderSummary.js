import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function OrderSummary() {

   const totalPrice  = useSelector((store) => store.cart.sum);

  return (
    <div className=" flex flex-1 flex-col gap-8 px-8">
      <h2 className="whitespace-nowrap text-center text-2xl sm:text-xl">Order Summary</h2>
      <div className="mb-5 flex h-full  flex-col justify-between gap-4">
        <div className="flex justify-between sm:text-sm">
          <p>Subtotal</p>
          <p>
            <span>₹</span>{(totalPrice/100).toFixed(2)}
          </p>
        </div>
        <div className="flex items-center justify-between sm:text-sm gap-1">
          <p>Promo Code </p>
          <p className="bg-black p-2 text-white">
            <span>FIR200</span>
          </p>
        </div>
        <div className="flex items-center sm:text-sm justify-between">
          <p>Delivery Fee </p>
          <p>
            <span>₹</span>50.44
          </p>
        </div>

        <div className="border-b-2 border-gray-400"></div>
        <div className="flex items-center justify-between sm:text-sm">
          <p>Total:</p>
          <p>
            <span>₹</span>{(totalPrice/100 + 50.44).toFixed(2) }
          </p>
        </div>

       <Link to="order" className="bg-orange-500 text-center hover:bg-orange-600 sm:text-sm">
       <button className="outline-none p-3  text-white">PLACE ORDER</button>
       </Link>
       

        <div className="flex flex-col gap-2">
          <h4 className="text-sm sm:text-xs">WE ACCEPT</h4>
          <img
            src="https://nishaaa25.github.io/Good-Food/static/media/payment.e2f44e7c8e169013828b.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
