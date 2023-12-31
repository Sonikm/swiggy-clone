
function FilterRes() {
  const filterButtonStyle =
    "whitespace-nowrap xs:text-[12px] xs:p-2 xs:py-1 hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white focus:border-1 focus:border-orange-400 border p-2 px-4 rounded-3xl cursor-pointer border-gray-300 items-center flex justify-center gap-2";

  return (
    <div className="fl/ex-row text-light no-scrollbar my-3 flex flex-nowrap gap-2 overflow-x-scroll text-sm">
      <button className={filterButtonStyle}> All</button>
      <button className={filterButtonStyle}>Fast Delivery</button>
      <button className={filterButtonStyle}>Rating 4.0+</button>
      <button className={filterButtonStyle}>Pure Veg</button>
      <button className={filterButtonStyle}>Less than Rs. 300</button>
      <button className={filterButtonStyle}>Rs. 300-Rs. 600</button>
    </div>
  );
}

export default FilterRes;
