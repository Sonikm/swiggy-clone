import { ReactComponent as SearchIcon } from "../assets/asset 52.svg";
import { HorizontalRollar } from "./HorizontalRollar";


function RecentSearches() {
    return (
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
    )
}

export default RecentSearches
