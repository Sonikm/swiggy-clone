import { useParams } from "react-router";
import useFoodCollectionItemData from "../hooks/useFoodCollectionItemData";
import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantsCard";
import { Link } from "react-router-dom";
import FilterRes from "../components/FilterRes";
import RestaurantsLoadingScreen from "../components/RestaurantsLoadingScreen";

function FoodCollectionItem() {
  const [foodCollectionList, setFoodCollectionList] = useState([]);
  const { collectionId } = useParams();
  const { foodCollection } = useFoodCollectionItemData(collectionId);

  console.log(collectionId)

  
  useEffect(() => {
    setFoodCollectionList(
      foodCollection?.filter((item) => item?.card?.card?.info),
      );
    }, [foodCollection]);
    
    if(!foodCollection) return <RestaurantsLoadingScreen/>

  const { title, description } = foodCollection[0]?.card?.card;
  const { text } = foodCollection[2]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mt-10 flex max-w-[1100px] flex-col justify-start gap-3">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-lg font-extralight text-gray-500 ">{description}</p>

        <FilterRes />

        <h3 className="text-2xl font-bold">{text}</h3>

        <div className="mt-6 flex flex-wrap items-center justify-between">
          {foodCollectionList?.map((item) => (
            <Link
              to={`/collections/restaurants/${item?.card?.card?.info?.name}/${item?.card?.card?.info?.id}`}
              key={item?.card?.card?.info?.id}
            >
              <RestaurantCard width={"w-64"} height={"h-44"}  restaurant={item?.card?.card?.info} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodCollectionItem;
