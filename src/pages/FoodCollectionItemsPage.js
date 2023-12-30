import { useParams } from "react-router";
import useFoodCollectionItemData from "../hooks/useFoodCollectionItemData";
import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantsCard";
import { Link } from "react-router-dom";
import FilterRes from "../components/FilterRes";
import RestaurantsLoadingScreen from "../shimmerUIs/RestaurantsLoadingScreen";

function FoodCollectionItem() {
  const [foodCollectionList, setFoodCollectionList] = useState([]);
  const { collectionId } = useParams();
  const { foodCollection } = useFoodCollectionItemData(collectionId);
  
  useEffect(() => {
    setFoodCollectionList(
      foodCollection?.filter((item) => item?.card?.card?.info),
      );
    }, [foodCollection]);
    
    if(!foodCollection) return <RestaurantsLoadingScreen/>

  const { title, description } = foodCollection[0]?.card?.card;
  const { text } = foodCollection[2]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div className="flex w-full flex-col  items-center justify-center ">
      <div className="flex m-10 mt-6 max-w-[1100px] flex-col justify-center gap-3 ">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-lg font-extralight text-gray-500 ">{description}</p>

         <div className="overflow-x-scroll md:w-[600px] sm:w-[400px] xs:w-[280px] no-scrollbar">

        <FilterRes />
         </div>

        <h3 className="text-2xl font-bold">{text}</h3>

        <div className="mt-8 xs:mt-3 xs:grid-cols-1 flex  flex-wrap sm:grid sm:grid-cols-2  items-center justify-evenly gap-6">
          {foodCollectionList?.map((item) => (
            <Link
              to={`/collections/restaurants/${item?.card?.card?.info?.name}/${item?.card?.card?.info?.id}`}
              key={item?.card?.card?.info?.id}
            >
              <RestaurantCard  header={"xs:text-3xl"} text={"xs:text-lg"} subHeader={"xs:text-2xl"} width={"w-64 sm:w-44 xs:w-full"} height={"h-44 xs:h-48 sm:h-32"}  restaurant={item?.card?.card?.info} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodCollectionItem;
