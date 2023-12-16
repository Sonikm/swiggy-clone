import { useSearchParams } from "react-router-dom";
import { DATA_IMG_URL } from "../constants/data";
import { useState } from "react";
import SearchSelectedTab from "./SearchSelectedTab";
export function AutoSearchCuisinesList({ autoSuggestCuisines, setSearchText }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearchDetails, setIsSearchDetails] = useState(false);

  function handleSearchCuisines(cuisine) {
    // const query = searchParams.get("query");
    setSearchParams({ query: cuisine });
    setIsSearchDetails(true);
    setSearchText(cuisine);
    console.log(isSearchDetails);
  }

  return (
    <>
      {isSearchDetails ? (
        <SearchSelectedTab />
      ) : (
        <div className="flex flex-col gap-2">
          {autoSuggestCuisines?.map((cuisine, index) => (
            <AutoSearchCuisine
              cuisine={cuisine}
              key={index}
              onChange={() => handleSearchCuisines(cuisine.text)}
            />
          ))}
        </div>
      )}
    </>
  );
}

function AutoSearchCuisine({ cuisine, onChange }) {
  const { text, tagToDisplay, cloudinaryId } = cuisine;

  return (
    <div
      onClick={onChange}
      className="flex cursor-pointer flex-row items-center justify-start gap-4 px-2 py-3 hover:bg-slate-100"
    >
      <img
        className="h-[70px] w-[70px] rounded-lg"
        src={DATA_IMG_URL + cloudinaryId}
        alt=""
      />
      <div className="flex flex-col text-sm">
        <span className="text-black ">{text}</span>
        <span>{tagToDisplay}</span>
      </div>
    </div>
  );
}
