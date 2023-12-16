import { DATA_IMG_URL } from "../constants/data";
import {useSearchParams} from "react-router-dom";

function PopularCuisinesList({ popularCuisinesList, setSearchText }) {
  const [, setSearchParams] = useSearchParams();
  
  return (
    <div className="my-4">
      <h2 className="text-bold my-4 text-[22px]  text-black">
        Popular Cuisines
      </h2>
      <div className="no-scrollbar mb-20 mt-6 flex flex-row gap-4 overflow-x-scroll">
        {popularCuisinesList?.map((cuisine) => (
          <PopularCuisines entityId={cuisine?.entityId} setSearchParams={setSearchParams} setSearchText={setSearchText}
            key={cuisine.id}
            cuisineImg={DATA_IMG_URL + cuisine?.imageId}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularCuisinesList;

function PopularCuisines({ cuisineImg, entityId, setSearchParams, setSearchText }) {

  function handleSearchCuisines(){
    const url = new URL(entityId);
    const queryValue = url.searchParams.get("query");
    const newUrl = `?query=${ encodeURIComponent(queryValue)}`;
    setSearchParams(newUrl);
    setSearchText(queryValue);
  }

  return (
    <button className="w-16 cursor-pointer flex-none" onClick={(e) => handleSearchCuisines()}>
      <img src={cuisineImg} alt="" />
    </button>
  );
}
