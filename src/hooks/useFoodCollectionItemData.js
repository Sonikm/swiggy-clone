import { useEffect, useState } from "react";
import getData from "../util/getData";

function useFoodCollectionItemData(collectionId) {
  const [foodCollection, setFoodCollection] = useState(null);

  useEffect(() => {
    async function fetchFoodCollectionData() {
      const data = await getData(
        `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.6139391%26lng%3D77.2090212%26collection%3D${collectionId}%26tags%3Dlayout_CCS_CholeBhature%26sortBy%3D%26filters%3D%26type%3Drcv2%26offset%3D0%26page_type%3Dnull`,
      );
      setFoodCollection(data?.data?.cards);
    }

    fetchFoodCollectionData();
  }, [collectionId]);

  return { foodCollection };
}

export default useFoodCollectionItemData;

// https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.6139391%26lng%3D77.2090212%26collection%3D${collectionId}%26tags%3Dlayout_CCS_CholeBhature%26sortBy%3D%26filters%3D%26type%3Drcv2%26offset%3D0%26page_type%3Dnull