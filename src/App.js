import Header from "./pages/Header";
import Body from "./pages/Body";
import Footer from "./pages/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantsMenu from "./pages/RestaurantsMenu";
import Search from "./pages/Search";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import FoodCollectionItem from "./pages/FoodCollectionItemsPage";
import { useState } from "react";
import SearchContext from "./contexts/SearchContext";
import SearchLocation from "./components/SearchLocation";
import SearchLocationContext from "./contexts/SearchLocationContext";

function AppLayout() {
  // This is modify the searchText
  const [searchText, setSearchText] = useState({
    restaurant: null,
  });

  const [searchLocation, setSearchLocation] = useState({
    isSearch: false,
  });

  return (
    <div className="app text-medium">
      <SearchLocationContext.Provider
        value={{
          searchLocation: searchLocation,
          setSearchLocation: setSearchLocation,
        }}
      >
        <SearchContext.Provider
          value={{ searchText: searchText, setSearchText: setSearchText }}
        >
          {searchLocation.isSearch ? <SearchLocation /> : ""}
          <div className={searchLocation.isSearch ? "isSearchLocation" : ""}>
            <Header />
            <Outlet />
            <Footer />
          </div>
        </SearchContext.Provider>
      </SearchLocationContext.Provider>
    </div>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:cuisine/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/search/restaurants/:cuisine/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "topRestaurants/:cuisine/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/collections/:cuisine/:collectionId",
        element: <FoodCollectionItem />,
      },
      {
        path: "/collections/restaurants/:cuisine/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },

      {
        path: "/signIn",
        element: <SignIn />,
      },

      {
        path: "Cart",
        element: <Cart />,
      },
    ],
  },
]);

export { AppRouter };

/** 
   Header
      - Logo
      - Location
      - Nav Items(Right Side)
      - Cart
   Body
      - Banner (Offers list)
      - Food Categories
      - Top Restaurants
      - RestrauntList
         - Filter
         - RestaurantCard
             - Images
             - Name
             - Rating
             - Cusines
   Footer
      - Links
      - Copyrights
                   
  */
