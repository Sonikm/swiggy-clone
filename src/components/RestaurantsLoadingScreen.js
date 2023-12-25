function RestaurantsLoadingScreen() {
  return (
    <div className="mt-20  h-[600px]  w-[1200px] flex flex-wrap justify-evenly gap-6">
        
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div className="flex flex-col gap-4 bg-white  " key={index}>
            <div className="h-[140px] w-[200px] rounded bg-gray-200"></div>
            <div className="h-[10px] w-[140px] rounded bg-gray-200"></div>
            <div className="h-[10px] w-[180px] rounded bg-gray-200"></div>
          </div>
        ))}
    </div>
  );
}

export default RestaurantsLoadingScreen;
