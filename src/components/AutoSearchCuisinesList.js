import { useSearchParams } from "react-router-dom";
import { DATA_IMG_URL } from "../constants/data";
import { useContext, useState } from "react";
import SearchSelectedTab from "./SearchSelectedTab";
import SearchContext from "../contexts/SearchContext";


export function AutoSearchCuisinesList({ autoSuggestCuisines }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearchDetails, setIsSearchDetails] = useState(false);
  const {setSearchText} = useContext(SearchContext);

  function handleSearchCuisines(cuisine) {
    // To get the value from the url
    // const query = searchParams.get("query");
    // setSearchParams({ query: cuisine });
    setSearchParams({ restaurant: cuisine });
    setSearchText({restaurant: cuisine})
    // console.log(searchParams.get("query"))
    setIsSearchDetails(true);
  }

  return (
    <>
      {isSearchDetails ? (
        <SearchSelectedTab/>
      ) : (
        <div className="flex flex-col gap-2">
          {autoSuggestCuisines?.map((cuisine, index) => (
            <AutoSearchCuisine
              cuisine={cuisine}
              key={index}
              onClick={() => handleSearchCuisines(cuisine.text)}
            />
          ))}
        </div>
      )}
    </>
  );
}

function AutoSearchCuisine({ cuisine, onClick }) {
  const { text, tagToDisplay, cloudinaryId } = cuisine;

  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-row items-center justify-start gap-4 px-2 py-3 hover:bg-slate-100"
    >
      <img
        className="h-[70px] w-[70px] xs:w-[50px] xs:h-[50px] rounded-lg"
        src={DATA_IMG_URL + cloudinaryId}
        alt=""
      />
      <div className="flex flex-col text-sm xs:text-xs">
        <span className="text-black ">{text}</span>
        <span>{tagToDisplay}</span>
      </div>
    </div>
  );
}
