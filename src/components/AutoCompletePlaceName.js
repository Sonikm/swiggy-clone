// import { useState } from "react";
// import locationIcon from "../assets/location.png";
// import useRestaurantsAddress from "../hooks/useRestaurantsAddress";


// export function AutoCompletePlaceName({ autocompletePlace }) {
//   const [placeId, setPlaceId] = useState(null);
//   const { main_text, secondary_text } =
//     autocompletePlace?.structured_formatting;


//   // const {restaurantAddress} =  useRestaurantsAddress("ChIJwe1EZjDG5zsRaYxkjY_tpF0");


//   return (
//     <button
//       className=" mx-10 flex flex-col"
//       // onClick={() =>   console.log(restaurantAddress)}
//     >
//       <div className="place_name my-5 flex cursor-pointer  flex-col justify-start gap-1">
//         <div className="flex items-center gap-1">
//           <img className="h-4" src={locationIcon} alt="" />
//           <h3 className="text-base">{main_text}</h3>
//         </div>
//         <p className="text-light line-clamp-2 overflow-hidden pl-5 text-xs text-gray-500 ">
//           {secondary_text}
//         </p>
//       </div>

//       <div className=" ml-7 border-b border-dashed border-gray-400"></div>
//     </button>
//   );
// }
