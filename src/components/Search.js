import { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/asset 52.svg";
import usePopularCuisines from "../hooks/usePopularCuisines";
import useSearchAutoSuggestCuisines from "../hooks/useSearchAutoSuggestCuisines";
import { ReactComponent as ClearIcon } from "../assets/clear_icon.svg";
import { AutoSearchCuisinesList } from "./AutoSearchCuisinesList";
import RecentSearches from "./RecentSearches";
import PopularCuisinesList from "./PopularCuisinesList";

function Search() {
  const [searchText, setSearchText] = useState(null);
  const { popularCuisines } = usePopularCuisines();
  const { autoSuggestCuisines } = useSearchAutoSuggestCuisines(searchText);

  if (popularCuisines === undefined || popularCuisines === null)
    return <h1>No data</h1>;

  return (
    <div className=" relative flex w-full flex-col items-center justify-center text-gray-500 ">
      <div className=" fixed z-30 top-28 flex w-[70%] items-center justify-between rounded border border-gray-300 px-2 text-lg ">
        <input
          value={searchText || ""}
          type="text"
          placeholder="Search for restaurants and food"
          className="flex-1 p-4 outline-none  placeholder:text-gray-400 text-sm"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => setSearchText(searchText ? null : searchText)}>
          {!searchText ? (
            <SearchIcon className="mx-2 h-5 w-5" />
          ) : (
            <ClearIcon className="mx-2 h-5 w-5" />
          )}
        </button>
      </div>

      <div className="bg-white w-full fixed top-0 h-48 z-10"></div>

        <div className="mb-10 z-0 mt-28 overflow-y-scroll no-scrollbar  flex w-[70%] flex-col gap-6  px-4">
        {searchText ? (
        <AutoSearchCuisinesList autoSuggestCuisines={autoSuggestCuisines} setSearchText={setSearchText} />
      ) : (
        <>
          <RecentSearches setSearchText={setSearchText} />
          <PopularCuisinesList popularCuisinesList={popularCuisines} setSearchText={setSearchText} />
        </>
      )}
     
      </div>
     
    </div>
  );
}

export default Search;
