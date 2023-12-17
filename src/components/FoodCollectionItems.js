import { useParams } from "react-router";
import useFoodCollectionItemData from "../hooks/useFoodCollectionItemData";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantsCard";
import { Link } from "react-router-dom";
import FilterRes from "./FilterRes";

function FoodCollectionItem() {
  const [foodCollectionList, setFoodCollectionList] = useState([]);
  const { collectionId } = useParams();
  const { foodCollection } = useFoodCollectionItemData(collectionId);

  useEffect(() => {
    setFoodCollectionList(
      foodCollection?.filter((item) => item?.card?.card?.info)
    );
  }, [foodCollection]);

  if (foodCollection === undefined || foodCollection === null)
    return <h1>No data</h1>;

  const { title, description } = foodCollection[0]?.card?.card;
  const { text } = foodCollection[2]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div className="flex w-full items-center justify-center flex-col">
      <div className="mt-16 flex max-w-[1100px] flex-col gap-3 justify-start">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-lg font-extralight text-gray-500 ">{description}</p>
        
        <FilterRes />

        <h3 className="text-2xl font-bold">{text}</h3>

        <div className="flex flex-wrap justify-between items-center mt-6">
      {
         foodCollectionList?.map((item) =>
         <Link to={`/collections/restaurants/${item?.card?.card?.info?.name}/${item?.card?.card?.info?.id}`} key={item?.card?.card?.info?.id}>
                <RestaurantCard restaurant={item?.card?.card?.info} />
         </Link>
         
         )
      }
      </div>
      
      </div>

    
    </div>
  );
}

export default FoodCollectionItem;
