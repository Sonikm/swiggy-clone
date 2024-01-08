import useRestaurantsData from "../hooks/useRestaurantsData";
import { DATA_IMG_URL } from "../constants/data";
// import leftArrow from "../assets/asset 53.svg";
// import rightArrow from "../assets/asset 54.svg";
import BannerLoadingScreen from "../shimmerUIs/BannerLoadingScreen";

function Banner() {
  const { bestOffers } = useRestaurantsData();

  if (!bestOffers) return <BannerLoadingScreen />;

  return (
    <div className="w-5/6">
      {bestOffers.length > 0 && (
        <>
          <div className="mb-4 mt-8 flex items-center justify-between">
            <h1 className=" text-2xl font-bold xs:text-lg sm:text-xl ">Best offers for you</h1>
            {/* <div className="flex items-center justify-center gap-4">
              <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-3xl bg-slate-200">
                <img src={leftArrow} alt="" />
              </span>
              <span className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-3xl bg-slate-200">
                <img src={rightArrow} alt="" />
              </span>
            </div> */}
          </div>
          <div className="no-scrollbar flex gap-4 overflow-x-scroll ">
            {bestOffers?.map((banner) => (
              <img
                className="w-[420px] xs:w-[120px] sm:w-[200px] md:w-[300px]"
                src={`${DATA_IMG_URL + banner?.imageId}`}
                key={banner?.id}
                alt=""
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Banner;
