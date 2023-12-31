import { useState } from "react";
import { SearchSelectedTabRestaurants } from "./SearchSelectedTabRestaurants";
import { SearchSelectedTabDish } from "./SearchSelectedTabDish";

function SearchSelectedTab() {
  const [selectedTab, setSelectedTab] = useState("restaurant");

  return (
    <div className="relative mb-6 mt-6 h-[80vh] w-full bg-gray-100">
      <div className="fixed top-[200px] z-50 -ml-4 -mt-2 flex w-[70%] gap-3 bg-white text-lg text-white  ">
        <div
          onClick={() => setSelectedTab("restaurant")}
          className={`h-full cursor-pointer rounded-3xl px-4 py-2 text-sm ${
            selectedTab === "restaurant"
              ? "bg-slate-800 text-white"
              : "border border-slate-300 bg-white text-black"
          }`}
        >
          Restaurants
        </div>
        <div
          onClick={() => setSelectedTab("dish")}
          className={`cursor-pointer rounded-3xl px-4 py-2 text-sm ${
            selectedTab === "dish"
              ? "bg-slate-800 text-white"
              : "border border-slate-300 bg-white text-black"
          }`}
        >
          Dishes
        </div>
      </div>

      <div className="bg-gray-100 p-5 overflow-hidden ">
        {selectedTab === "restaurant" ? (
          <SearchSelectedTabRestaurants />
        ) : (
          <SearchSelectedTabDish/>
        )}
      </div>
    </div>
  );
}

export default SearchSelectedTab;
