function SearchTabLoading() {
  return (
    <div className="flex justify-center items-center">
    <div className="grid w-full  overflow-hidden md:grid-cols-1 gap-4  grid-cols-2 justify-items-center items-center">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="flex h-[100px] w-full overflow-hidden items-center gap-4 rounded-lg bg-white p-8"
          >
            <div className="h-[60px] w-[80px] md:w-[100px] rounded bg-gray-200"></div>
            <div className="flex flex-col gap-2">
              <div className="h-[10px] w-[60px] md:w-[80px]  rounded bg-gray-200"></div>
              <div className="h-[10px] w-[100px] md:w-[120px] rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
}

export default SearchTabLoading;
