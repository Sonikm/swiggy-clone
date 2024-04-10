import { useContext } from "react";
import { ReactComponent as SearchIcon } from "../assets/asset 52.svg";
import usePopularCuisines from "../hooks/usePopularCuisines";
import useSearchAutoSuggestCuisines from "../hooks/useSearchAutoSuggestCuisines";
import { ReactComponent as ClearIcon } from "../assets/clear_icon.svg";
import { AutoSearchCuisinesList } from "../components/AutoSearchCuisinesList";
import RecentSearches from "../components/RecentSearches";
import PopularCuisinesList from "../components/PopularCuisinesList";
import SearchContext from "../contexts/SearchContext";
import ToggleMenuContext from "../contexts/ToggleMenuContext";

function Search() {
  const {searchText, setSearchText} = useContext(SearchContext);
  const { popularCuisines } = usePopularCuisines();
  const { autoSuggestCuisines } = useSearchAutoSuggestCuisines(searchText.restaurant);
  const {toggleMenu} = useContext(ToggleMenuContext);

  return (
    <div className=" relative flex w-full flex-col items-center justify-center text-gray-500 ">
      <div className={`${toggleMenu.isActive && "md:z-0" } fixed top-28  z-30 md:w-10/12 flex w-[70%] xs:w-11/12 items-center justify-between rounded border border-gray-300 px-2 text-lg `}>
        <input
          value={searchText.restaurant || ""}
          type="text"
          placeholder="Search for restaurants and food"
          className="flex-1 p-4 text-sm  outline-none placeholder:text-gray-400"
          onChange={(e) => setSearchText({restaurant: e.target.value})}
        />
        <button onClick={() => setSearchText({restaurant: null})}>
          {!searchText.restaurant ? (
            <SearchIcon className="mx-2 h-5 w-5" />
          ) : (
            <ClearIcon className="mx-2 h-5 w-5" />
          )}
        </button>
      </div>

      <div className="fixed top-0 z-10 h-48 w-full bg-white"></div>

      <div className="no-scrollbar z-0 mb-10 mt-28 flex md:w-10/12  w-[70%] xs:w-11/12 flex-col gap-6 overflow-y-scroll  px-4">
        {searchText.restaurant ? (
          <AutoSearchCuisinesList
            autoSuggestCuisines={autoSuggestCuisines}
          />
        ) : (
          <>
            <RecentSearches />
            <PopularCuisinesList
              popularCuisinesList={popularCuisines}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
