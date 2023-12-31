// React and External Library Imports
import React, { useState, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";

// Local Component Imports
import Header from "./pages/Header";
import Body from "./pages/Body";
import Footer from "./pages/Footer";
import RestaurantsMenu from "./pages/RestaurantsMenu";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import FoodCollectionItem from "./pages/FoodCollectionItemsPage";
import SearchLocation from "./components/SearchLocation";
import Order from "./pages/Order";
import RestaurantsLoadingScreen from "./shimmerUIs/RestaurantsLoadingScreen";
import Help from "./pages/Help";

// Context Imports
import SearchContext from "./contexts/SearchContext";
import ToggleMenuContext from "./contexts/ToggleMenuContext";

// Redux Store
import store from "./util/store";

// Upon On Demand Loading -> upon render -> suspend loading
const Offers = lazy(()=> import("./pages/Offers"));

function AppLayout() {
  const [isSearchPlace, setIsSearchPlace] = useState(false);
  // This is modify the searchText
  const [searchText, setSearchText] = useState({
    restaurant: null,
  });

  const [toggleMenu, setToggleMenu] = useState({
    isActive: false,
  });

  //   // Get the current route path
    const currentPath = useLocation().pathname;
  // console.log(currentPath);

  return (
    <Provider store={store}>
      <ToggleMenuContext.Provider value={{toggleMenu: toggleMenu, setToggleMenu: setToggleMenu}} >
      <div className="app text-medium">
        <SearchContext.Provider
          value={{ searchText: searchText, setSearchText: setSearchText }}
        >
          {isSearchPlace && (
            <SearchLocation setIsSearchPlace={setIsSearchPlace} />
          )}
          <div className={isSearchPlace ? "isSearchLocation" : ""}>
            <Header setIsSearchPlace={setIsSearchPlace} />
            <Outlet />
             {(currentPath === "/" || currentPath === "/offers" || currentPath.startsWith("/collections/") ) &&  <Footer />}
          </div>
        </SearchContext.Provider>
      </div>
      </ToggleMenuContext.Provider>
    </Provider>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
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
        path: "/topRestaurants/:cuisine/:resId",
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
        path: "/search/restaurants/:cuisine/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/offers",
        element:  <Suspense fallback={<RestaurantsLoadingScreen/>} ><Offers /></Suspense>
      },
      {
        path: "/offers/:cuisine/:resId",
        element: <RestaurantsMenu />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/cart/order",
        element: <Order />,
      },
    ],
  },
], {
  basename: "/swiggy-clone",
});

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
