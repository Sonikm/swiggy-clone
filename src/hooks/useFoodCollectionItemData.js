import { useEffect, useState } from "react";
import getData from "../util/getData";

function useFoodCollectionItemData(collectionId) {
  const [foodCollection, setFoodCollection] = useState(null);

  useEffect(() => {
    async function fetchFoodCollectionData() {
      const data = await getData(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139391&lng=77.2090212&collection=${collectionId}&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null`,
      );
      setFoodCollection(data?.data?.cards);
    }

    fetchFoodCollectionData();
  }, [collectionId]);

  return { foodCollection };
}

export default useFoodCollectionItemData;
