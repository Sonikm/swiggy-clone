import { useEffect, useState } from "react";
import getData from "../util/getData";

function useSearchAutoSuggestCuisines(cuisine) {
  const [autoSuggestCuisines, setAutoSuggestCuisines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(
        `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.6139391&lng=77.2090212&str=${cuisine}&trackingId=null`,
      );
      setAutoSuggestCuisines(data?.data?.suggestions);
    }

    fetchData();
  }, [cuisine]);

  return { autoSuggestCuisines };
}

export default useSearchAutoSuggestCuisines;
