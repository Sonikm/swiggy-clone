function RestaurantsLoadingScreen() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
      <div className="mt-20  flex h-[600px] w-10/12 flex-wrap items-center justify-evenly  gap-6 md:grid md:grid-cols-2 md:justify-items-center  xs:grid-cols-1">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div
              className="flex flex-col xs:w-full xs:px-[10%]  justify-start  gap-4 bg-white md:gap-2  "
              key={index}
            >
              <div className="h-[140px] w-[200px] rounded bg-gray-200 md:h-[100px] md:w-[150px] xs:h-[120px] xs:w-full"></div>
              <div className="h-[10px] w-[140px]  rounded  bg-gray-200 md:w-[100px] xs:h-[6px] xs:w-[70px]"></div>
              <div className="h-[10px] w-[180px] rounded bg-gray-200 md:w-[140px] xs:h-[6px] xs:w-[100px]"></div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RestaurantsLoadingScreen;
