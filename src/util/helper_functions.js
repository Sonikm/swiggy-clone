// Function to extract collection_id from the URL
export function getCollectionIdFromUrl(url) {

   // If entityId is found in the URL
  const match = url.match(/collection_id=(\d+)/);
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  // Return If entityId is a proper ID 
  return url;
}



  export function filterByRating(restaurantsList, setFilterRestaurants) {
  const data = restaurantsList?.filter((item) => item?.info?.avgRating >= 4);
  setFilterRestaurants(data);
}

 export function filterByPureVeg(restaurantsList, setFilterRestaurants){
  const data = restaurantsList?.filter((item) => item?.info?.veg === true);
  setFilterRestaurants(data);
}

 export function filterByFastDelivery(restaurantsList, setFilterRestaurants){
  const data = restaurantsList?.filter((item) => item?.info?.sla?.deliveryTime <= 30 );
  setFilterRestaurants(data);
}

 export function filterByPriceLessThan300(restaurantsList, setFilterRestaurants){
  const data =  restaurantsList?.filter((item) => item?.info?.costForTwo.match(/\d+/)[0] >= 300 );
  setFilterRestaurants(data);
}

 export function filterByPriceGreaterThan300(restaurantsList, setFilterRestaurants){
  const data =  restaurantsList?.filter((item) => item?.info?.costForTwo.match(/\d+/)[0] < 300 );
  setFilterRestaurants(data);
}