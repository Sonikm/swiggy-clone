import Banner from "../components/Banner"
import FoodCollections from "../components/FoodCollections"
import RestaurantsList from "../components/RestaurantsList"
import TopRestaurants from "../components/TopRestaurants"

function Body() {
    return (
        <div className="w-full flex items-center justify-center flex-col">
           <Banner/>
           <FoodCollections/>
           <TopRestaurants/>
           <RestaurantsList/>
        </div>
    )
}

export default Body
