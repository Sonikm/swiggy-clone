import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app text-medium">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

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
