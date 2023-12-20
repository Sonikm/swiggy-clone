import { useContext } from "react";
import closeMenuIcon from "../assets/clear_icon.svg";
import locationIcon from "../assets/location.png";
import SearchLocationContext from "../contexts/SearchLocationContext";


function SearchLocation() {

 const {searchLocation, setSearchLocation} = useContext(SearchLocationContext);

  return (
    <div className={`search_location_slidebar ${searchLocation.isSearch ? "slideIn" : "slideOut" }`}>
      <div className="m-6 mx-8 flex flex-col justify-center gap-8">
        <button onClick={()=> setSearchLocation({isSearch: false})}>
          <img className="cursor-pointer" src={closeMenuIcon} alt="" />
        </button>
        <div className="flex border">
          <input
            className="flex-1 p-3 px-5 outline-none"
            type="text"
            placeholder="Search for area, street name.."
          />
        </div>

        <div className=" flex flex-col gap-4 p-4">
          <div className="flex  justify-start gap-2 cursor-pointer">
            <div className="w-5">
              <img src={locationIcon} alt="" />
            </div>
            <div className="flex  flex-col gap-1">
              <h3 className="text-base">Mumbai Central</h3>
              <p className="text-light text-sm text-gray-500">
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>

          <div className=" ml-7 border-b border-dashed border-gray-400"></div>
        </div>
      </div>
    </div>
  );
}

export default SearchLocation;
