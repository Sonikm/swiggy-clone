import { createContext } from "react";

const SearchContext = createContext({
    searchText: {
        restaurant: null,
    }
});

export default SearchContext;