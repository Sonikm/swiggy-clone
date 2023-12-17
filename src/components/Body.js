import Banner from "./Banner"
import FoodCollections from "./FoodCollections"
import RestaurantsList from "./RestaurantsList"
import TopRestaurants from "./TopRestaurants"

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
