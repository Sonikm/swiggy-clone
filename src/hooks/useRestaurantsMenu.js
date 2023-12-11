import { DATA_MENU_URL } from "../constants/data";
import fetchData from "../utilities/getData";

async function useRestaurantsMenu() {
  const data = await fetchData(DATA_MENU_URL);
  console.log(data);

  return {data};
}

export default useRestaurantsMenu;
