import { useEffect, useState } from "react";
import getData from "../util/getData";

function usePopularCuisines() {
  const [popularCuisines, setPopularCuisines] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(
          "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=28.6139391&lng=77.2090212",
        );

        setPopularCuisines(
          data?.data?.cards?.find(
            (item) => item?.card?.card?.imageGridCards?.info,
          )?.card?.card?.imageGridCards?.info || [],
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return { popularCuisines };
}

export default usePopularCuisines;
