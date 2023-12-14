import Banner from "./Banner"
import FoodItems from "./FoodCategories"
import RestaurantsList from "./RestaurantsList"
import TopRestaurants from "./TopRestaurants"

function Body() {
    return (
        <div className="w-full flex items-center justify-center flex-col">
           <Banner/>
           <FoodItems/>
           <TopRestaurants/>
           <RestaurantsList/>
        </div>
    )
}

export default Body
