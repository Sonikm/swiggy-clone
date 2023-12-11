import { ReactComponent as SearchIcon } from "../assets/asset 52.svg";
import { DATA_MENU_URL } from "../constants/data";

function RestaurantsMenu() {
  // const {resId} = useParams();
  // const {data} = useRestaurantsMenu();
  console.log(DATA_MENU_URL);

  return (
    <div className=" flex w-full flex-col items-center justify-center  gap-8 p-10 text-zinc-500">
      <div className="flex w-[850px] flex-col gap-8 ">
        <div className="flex  items-center justify-between">
          <div className="text-xs">
            <span>Home</span> / <span>Delhi</span> / <span>Burger King</span>
          </div>
          <SearchIcon className="nav-icon" />
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-6 px-3 ">
          <div className="flex w-full items-start justify-between">
            <div className="text-xs">
              <h2 className="mb-3 text-xl font-bold text-black ">
                Burger King
              </h2>
              <p>Burgers, American</p>
              <p>Connaught Place 3.7 km</p>
              <p className="mt-4 text-sm">
                3.7 kms | ₹47 Delivery fee will apply
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 rounded-md border p-2 text-xs">
              <span>⭐ 4.3 </span>
              <hr />
              <span>10K+ ratings</span>
            </div>
          </div>
          <div className="w-full border-t-[2px] border-dotted border-gray-300"></div>

          <div className="flex w-full flex-col gap-4">
            <div className="flex flex-row items-center justify-start gap-4 font-bold text-black">
              <span> ⌛24 MINS </span>
              <span> 🪙 ₹350 for two </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="inline-block rounded-md border p-3  text-center text-xs">
                <div className="text-sm font-bold text-zinc-600">
                  FLAT ₹120 OFF{" "}
                </div>
                <div> USE AXIS120 | ABOVE ₹500 </div>
              </div>
              <div className="inline-block rounded-md border p-3  text-center text-xs">
                <div className="text-sm font-bold text-zinc-600">
                  FLAT ₹120 OFF{" "}
                </div>
                <div> USE AXIS120 | ABOVE ₹500 </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t-[1px] border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantsMenu;
