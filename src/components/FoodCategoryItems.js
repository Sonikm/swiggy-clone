import { useParams } from "react-router";
import useFoodCategory from "../hooks/useFoodCategory";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantsCard";
import { Link } from "react-router-dom";

function FoodCategory() {
  const [foodCategoryList, setFoodCategoryList] = useState([]);
  const { collectionId } = useParams();
  const { foodCategory } = useFoodCategory(collectionId);

  useEffect(() => {
    setFoodCategoryList(
      foodCategory?.filter((item) => item?.card?.card?.info)
    );
  }, [foodCategory]);

  if (foodCategory === undefined || foodCategory === null)
    return <h1>No data</h1>;

  const { title, description } = foodCategory[0]?.card?.card;
  const { text } = foodCategory[2]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div className="flex w-full items-center justify-center flex-col">
      <div className="mt-16 flex max-w-[1100px] flex-col gap-3 justify-start">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-lg font-extralight text-gray-500 ">{description}</p>
        <h3 className="text-2xl font-bold">{text}</h3>

        <div className="flex flex-wrap justify-between items-center mt-6">
      {
         foodCategoryList?.map((item) =>
         <Link to={`/category/${collectionId}/${item?.card?.card?.info?.id}`} key={item?.card?.card?.info?.id}>
                <RestaurantCard restaurant={item?.card?.card?.info} />
         </Link>
         
         )
      }
      </div>
      
      </div>

    
    </div>
  );
}

export default FoodCategory;
