import { useEffect, useState } from "react";
import getData from "../util/getData";

function usePopularCuisines() {
  const [popularCuisines, setPopularCuisines] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(
          "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Flanding%2FPRE_SEARCH%3Flat%3D28.6139391%26lng%3D77.2090212",
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
