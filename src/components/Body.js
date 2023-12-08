import Banner from "./Banner"
import FoodItems from "./FoodItems"

function Body() {
    return (
        <div className="w-full flex items-center justify-center flex-col">
           <Banner/>
           <FoodItems/>
        </div>
    )
}

export default Body
