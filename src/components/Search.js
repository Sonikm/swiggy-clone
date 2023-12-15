import { ReactComponent as SearchIcon } from "../assets/asset 52.svg";
import { DATA_IMG_URL } from "../constants/data";
import usePopularCuisines from "../hooks/usePopularCuisines";
import { HorizontalRollar } from "./HorizontalRollar";

function Search() {
  const { popularCuisines } = usePopularCuisines();

  if (popularCuisines === undefined || popularCuisines === null)
    return <h1>No data</h1>;

  return (
    <div className=" flex w-full flex-col items-center justify-center text-gray-500">
      <div className=" my-14 mb-10 flex w-[70%] items-center justify-between rounded border border-gray-300 px-2 text-lg">
        <input
          type=""
          placeholder="Search for restaurants and food"
          className="flex-1 p-4 outline-none  placeholder:text-gray-500"
        />
        <SearchIcon className="mx-2 h-5 w-5 cursor-pointer" />
      </div>
      <div className=" flex w-[70%] flex-col gap-6  px-4">
        <div className="flex flex-col  gap-4">
          <h3 className="text-lg text-black ">Recent Searches</h3>
          <div className="flex flex-nowrap items-center gap-3">
            <SearchIcon className="mx-2 h-5 w-5" />
            <span className="cursor-pointer">CAPE - Boss Of All Pizzas</span>
          </div>
          <div className="mx-10">
            <HorizontalRollar />
          </div>

          <div className="flex flex-nowrap items-center gap-3">
            <SearchIcon className="mx-2 h-5 w-5" />
            <span className="cursor-pointer">Anna Idli </span>
          </div>
        </div>

        <div className="my-4">
          <h2 className="text-bold my-4 text-[22px]  text-black">
            Popular Cuisines
          </h2>
          <div className="flex gap-4 mt-6 mb-20 overflow-x-scroll no-scrollbar flex-row">
            {popularCuisines?.map((cuisine) => (
              <PopularCuisinesList
                key={cuisine.id}
                cuisineImg={DATA_IMG_URL + cuisine?.imageId}
              />
            ))}
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Search;

function PopularCuisinesList({ cuisineImg }) {
  return <img className="w-20 cursor-pointer" src={cuisineImg} alt="" />;
}
