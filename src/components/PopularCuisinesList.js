import { useContext } from "react";
import { DATA_IMG_URL } from "../constants/data";
import {useSearchParams} from "react-router-dom";
import SearchContext from "../contexts/SearchContext";

function PopularCuisinesList({ popularCuisinesList }) {
  const [, setSearchParams] = useSearchParams();

  if(!popularCuisinesList) return;
  
  return (
    <div className="my-4">
      <h2 className="text-bold my-4 text-[22px]  text-black">
        Popular Cuisines
      </h2>
      <div className="no-scrollbar xs:grid xs:grid-rows-2 xs:grid-flow-col mb-20 mt-6 flex flex-row gap-4 overflow-x-scroll">
        {popularCuisinesList?.map((cuisine) => (
          <PopularCuisines entityId={cuisine?.entityId} setSearchParams={setSearchParams} 
            key={cuisine.id}
            cuisineImg={DATA_IMG_URL + cuisine?.imageId}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularCuisinesList;

function PopularCuisines({ cuisineImg, entityId, setSearchParams }) {
  const {setSearchText} = useContext(SearchContext)

  function handleSearchCuisines(){
    const url = new URL(entityId);
    const queryValue = url.searchParams.get("query");
    const newUrl = `?query=${ encodeURIComponent(queryValue)}`;
    setSearchParams(newUrl);
    setSearchText({restaurant: queryValue});
  }

  return (
    <button className="w-16 xs:w-14 cursor-pointer flex-none" onClick={(e) => handleSearchCuisines()}>
      <img src={cuisineImg} alt="" />
    </button>
  );
}
