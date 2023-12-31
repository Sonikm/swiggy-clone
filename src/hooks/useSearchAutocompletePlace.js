import { useEffect, useState } from "react";
import getData from "../util/getData";

function useSearchAutocompletePlace(searchText) {
  const [autocompletePlace, setAutocompletePlace] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(
        `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmisc%2Fplace-autocomplete%3Finput%3D${searchText}%26types%3D`,
      );

      setAutocompletePlace(data?.data);
    }

    fetchData();
  },[searchText]);

  return { autocompletePlace };
}

export default useSearchAutocompletePlace;
