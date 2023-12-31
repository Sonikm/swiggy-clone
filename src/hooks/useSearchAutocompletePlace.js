import { useEffect, useState } from "react";
import getData from "../util/getData";

function useSearchAutocompletePlace(searchText) {
  const [autocompletePlace, setAutocompletePlace] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(
        `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${searchText}&types=`,
      );

      setAutocompletePlace(data?.data);
    }

    fetchData();
  },[searchText]);

  return { autocompletePlace };
}

export default useSearchAutocompletePlace;
