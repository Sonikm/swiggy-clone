import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantsMenu from "./components/RestaurantsMenu";
import Search from "./components/Search";
import Offers from "./components/Offers";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import TopRestaurants from "./components/TopRestaurants";

function AppLayout() {
  return (
    <div className="app text-medium">
      <Header />
      <Outlet/>
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
        path: "/menu/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/menu/:resId",
        element: <TopRestaurants />,
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
