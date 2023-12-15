import { DATA_IMG_URL } from "../constants/data";

export function AutoSearchCuisinesList({ autoSuggestCuisines }) {
  console.log(autoSuggestCuisines);
  return (
    <div className="flex flex-col gap-2">
      {autoSuggestCuisines?.map((cuisine, index) => (
        <AutoSearchCuisine cuisine={cuisine} key={index} />
      ))}
    </div>
  );
}

 function AutoSearchCuisine({ cuisine }) {
  const { text, tagToDisplay, cloudinaryId } = cuisine;

  return (
    <div className="flex cursor-pointer flex-row items-center justify-start gap-4 px-2 py-3 hover:bg-slate-100">
      <img
        className="h-[70px] w-[70px] rounded-lg"
        src={DATA_IMG_URL + cloudinaryId}
        alt=""
      />
      <div className="flex flex-col text-sm">
        <span className="text-black ">{text}</span>
        <span>{tagToDisplay}</span>
      </div>
    </div>
  );
}



