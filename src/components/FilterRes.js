import filterIcon from "../assets/asset 56.svg";

function FilterRes() {
    return (
        <div className="my-3 flex flex-nowrap flex-row gap-2 text-light text-sm overflow-x-scroll no-scrollbar">
            <div className="whitespace-nowrap border p-2 px-4 rounded-3xl border-gray-300 items-center flex justify-center gap-2 "> <img src={filterIcon} alt="" />  <span className="">Filter</span></div>
            <div className="whitespace-nowrap border p-2 px-4 rounded-3xl border-gray-300">Sort By</div>
            <div className="whitespace-nowrap border p-2 px-4 rounded-3xl border-gray-300">Fast Delivery</div>
            <div className="whitespace-nowrap border p-2 px-4 rounded-3xl border-gray-300">New on Swiggy</div>
            <div className="whitespace-nowrap border p-2 px-4 rounded-3xl border-gray-300">Rating 4.0+</div>
            <div className="whitespace-nowrap border p-2 px-4 rounded-3xl border-gray-300">Pure Veg</div>
            <div className="whitespace-nowrap border p-2 px-4 rounded-3xl border-gray-300">Offers</div>
            <div className="whitespace-nowrap border p-2 px-4 rounded-3xl border-gray-300">Rs. 300-Rs. 600</div>
            <div className="whitespace-nowrap border p-2 px-4 rounded-3xl border-gray-300">Less than Rs. 300</div>
        </div>
    )
}

export default FilterRes
