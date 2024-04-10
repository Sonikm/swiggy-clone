import { createContext } from "react";

const SearchLocationContext = createContext({
    searchLocation : {
      isSearch: false,
    }
})

SearchLocationContext.displayName = "SearchLocationContext";

export default SearchLocationContext;