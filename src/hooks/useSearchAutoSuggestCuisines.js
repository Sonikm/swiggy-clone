import { useEffect, useState } from "react";
import getData from "../util/getData";

function useSearchAutoSuggestCuisines(cuisine) {
  const [autoSuggestCuisines, setAutoSuggestCuisines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(
        `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Fsearch%2Fsuggest%3Flat%3D28.6139391%26lng%3D77.2090212%26str%3D${cuisine}%26trackingId%3Dundefined`,
      );
      setAutoSuggestCuisines(data?.data?.suggestions);
    }

    fetchData();
  }, [cuisine]);

  return { autoSuggestCuisines };
}

export default useSearchAutoSuggestCuisines;
