import { createContext } from "react";

const SearchContext = createContext({
    searchText: {
        restaurant: null,
    }
});

SearchContext.displayName = "SearchContext";

export default SearchContext;