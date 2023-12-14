import { useEffect, useState } from "react";
import getData from "../utilities/getData";

function useFoodCategory(collectionId) {
  const [foodCategory, setFoodCategory] = useState(null);

  useEffect(() => {
    async function fetchFoodCategoryData() {
      const data = await getData(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&collection=${collectionId}&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null`,
      );
      setFoodCategory(data?.data?.cards);
    }

    fetchFoodCategoryData();
  }, [collectionId]);

  return { foodCategory };
}
 

export default useFoodCategory;
