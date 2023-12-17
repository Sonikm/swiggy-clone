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

function AppLayout() {
  return (
    <div className="app text-medium">
      <Header />
      <Outlet />
      <Footer />
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
