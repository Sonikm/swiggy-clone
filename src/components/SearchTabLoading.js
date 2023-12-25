function SearchTabLoading() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-center">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="flex h-[100px] items-center gap-4 rounded-lg bg-white p-8"
          >
            <div className="h-[60px] w-[80px] rounded bg-gray-200"></div>
            <div className="flex flex-col gap-2">
              <div className="h-[10px] w-[60px] rounded bg-gray-200"></div>
              <div className="h-[10px] w-[180px] rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SearchTabLoading;
