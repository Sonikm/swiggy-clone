import { DATA_IMG_URL } from "../constants/data";

function PopularCuisines({ popularCuisines }) {
  return (
    <div className="my-4">
      <h2 className="text-bold my-4 text-[22px]  text-black">
        Popular Cuisines
      </h2>
      <div className="no-scrollbar mb-20 mt-6 flex flex-row gap-4 overflow-x-scroll">
        {popularCuisines?.map((cuisine) => (
          <PopularCuisinesList
            key={cuisine.id}
            cuisineImg={DATA_IMG_URL + cuisine?.imageId}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularCuisines;

function PopularCuisinesList({ cuisineImg }) {
  return <img className="w-20 cursor-pointer" src={cuisineImg} alt="" />;
}
