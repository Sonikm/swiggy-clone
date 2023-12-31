import { Link } from "react-router-dom";
import order from "../assets/order.png";
import { useDispatch } from "react-redux";
import { clearItem } from "../util/cartSlice";

function Order() {
    const dispatch = useDispatch();
    dispatch(clearItem());
    return (
        <div className="flex justify-between items-center h-full w-full">
           <div className="flex flex-col  justify-between items-center gap-2 flex-1">
            <img className="w-[300px] mb-2" src={order} alt=""/>
            <h2 className="text-2xl font-bold text-black ">Thank you for your order!</h2>
            <div className="text-sm text-gray-500 mb-4">
            <p className="">Your food is on its way. Relax and get ready for a</p>
            <p>delicious meal. Track your order online. Enjoy!</p>
            </div>

            <Link to="/">
            <button className="bg-orange-500 text-white p-3 px-4">Back to Home</button>
            </Link>
           
           </div>
        </div>
    )
}

export default Order
