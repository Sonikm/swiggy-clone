import { useState } from "react";
import closeMenuIcon from "../assets/clear_icon.svg";
import locationIcon from "../assets/location.png";
import useSearchAutocompletePlace from "../hooks/useSearchAutocompletePlace";
import { useDispatch } from "react-redux";
import { addLocationId } from "../util/locationSlice";

function SearchLocation({ setIsSearchPlace}) {

  const [searchText, setSearchText] = useState("");
  const { autocompletePlace } = useSearchAutocompletePlace(searchText);
  const dispatch = useDispatch();

  function handleGetLocationId(id){
   dispatch(addLocationId(id))
   setIsSearchPlace(false)
  }

  return (
    <div className={`search_location_slidebar slideIn`}>
      <div className="m-6 mx-8 flex flex-col justify-center gap-8">
        <button onClick={() => setIsSearchPlace(false)}>
          <img className="cursor-pointer" src={closeMenuIcon} alt="" />
        </button>
        <div className="flex border">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1 p-3 px-5 outline-none"
            type="text"
            placeholder="Search for area, street name.."
          />
        </div>
      </div>
      <div className="h-[75vh] overflow-y-scroll">
        {autocompletePlace !== undefined &&
          autocompletePlace?.map((item) => (
            <AutoCompletePlaceName
              autocompletePlace={item?.structured_formatting}
              key={item?.place_id}
              setIsSearchPlace={setIsSearchPlace}
              handleGetLocationId={() => handleGetLocationId(item?.place_id)}
            />
          ))}
      </div>
    </div>
  );
}

export default SearchLocation;

function AutoCompletePlaceName({ autocompletePlace, setIsSearchPlace, handleGetLocationId }) {
  const { main_text, secondary_text } = autocompletePlace;

  return (
    <div className=" mx-10 flex flex-col hover:bg-slate-50" onClick={ handleGetLocationId}>
      <div className="my-5 flex cursor-pointer  flex-col justify-start gap-1">
        <div className="flex items-center gap-1">
          <img className="h-4" src={locationIcon} alt="" />
          <h3 className="text-base hover:text-orange-500">{main_text}</h3>
        </div>
        <p className="text-light line-clamp-2 overflow-hidden pl-5 text-xs text-gray-500 ">
          {secondary_text}
        </p>
      </div>

      <div className=" ml-7 border-b border-dashed border-gray-400"></div>
    </div>
  );
}
