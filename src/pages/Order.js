// eslint-disable-next-line no-unused-vars
import { useNavigate, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import order from "../assets/order.png";
import { useDispatch } from "react-redux";
import { clearItem } from "../util/cartSlice";
// import Lottie from "lottie-react";
// import animationData from "../assets/checkout-done.json";

function Order() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // Clear items from the cart when the component mounts
  dispatch(clearItem());

  //    useEffect(()=> {
  //     // Clear items from the cart when the component mounts
  //      dispatch(clearItem());

  //     // Redirect to the home page after 5 seconds
  //     const timeoutId = setTimeout(()=>{
  //       navigate("/");
  //     }, 2000);

  //     // Cleanup the timeout to avoid memroy leaks
  //     return () => clearTimeout(timeoutId);
  //    },[dispatch, navigate])

  return (
    <div className="flex h-screen w-full items-center justify-between">
      <div className="flex flex-1 flex-col items-center  justify-between">
        <img className="mb-2 w-[300px]" src={order} alt="" />
        <h2 className="text-2xl font-bold text-black ">
          Thank you for your order!
        </h2>
        <div className="mb-4 text-sm text-gray-500">
          <p className="">Your food is on its way. Relax and get ready for a</p>
          <p>delicious meal. Track your order online. Enjoy!</p>
        </div>

        <Link to="/">
          <button className="bg-orange-500 p-3 px-4 text-white">
            Back to Home
          </button>
        </Link>

        {/* <Lottie className="w-[250px]" animationData={animationData} /> */}
      </div>
    </div>
  );
}

export default Order;
