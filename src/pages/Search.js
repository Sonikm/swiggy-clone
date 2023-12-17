import { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/asset 52.svg";
import usePopularCuisines from "../hooks/usePopularCuisines";
import useSearchAutoSuggestCuisines from "../hooks/useSearchAutoSuggestCuisines";
import { ReactComponent as ClearIcon } from "../assets/clear_icon.svg";
import { AutoSearchCuisinesList } from "../components/AutoSearchCuisinesList";
import RecentSearches from "../components/RecentSearches";
import PopularCuisinesList from "../components/PopularCuisinesList";

function Search() {
  const [searchText, setSearchText] = useState(null);
  const { popularCuisines } = usePopularCuisines();
  const { autoSuggestCuisines } = useSearchAutoSuggestCuisines(searchText);

  if (popularCuisines === undefined || popularCuisines === null)
    return <h1>No data</h1>;

  return (
    <div className=" relative flex w-full flex-col items-center justify-center text-gray-500 ">
      <div className=" fixed top-28 z-30 flex w-[70%] items-center justify-between rounded border border-gray-300 px-2 text-lg ">
        <input
          value={searchText || ""}
          type="text"
          placeholder="Search for restaurants and food"
          className="flex-1 p-4 text-sm  outline-none placeholder:text-gray-400"
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

      <div className="fixed top-0 z-10 h-48 w-full bg-white"></div>

      <div className="no-scrollbar z-0 mb-10 mt-28 flex  w-[70%] flex-col gap-6 overflow-y-scroll  px-4">
        {searchText ? (
          <AutoSearchCuisinesList
            autoSuggestCuisines={autoSuggestCuisines}
            setSearchText={setSearchText}
            searchText={searchText}
          />
        ) : (
          <>
            <RecentSearches setSearchText={setSearchText} />
            <PopularCuisinesList
              popularCuisinesList={popularCuisines}
              setSearchText={setSearchText}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
