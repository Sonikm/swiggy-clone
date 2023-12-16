import { useEffect, useState } from "react";
import { MenuCards } from "./MenuCards";

export function MenuList({ resMenuList }) {
  const [filterMenu, setFilterMenu] = useState([]);

  function getResMenu(resMenuList) {
    setFilterMenu(
      resMenuList.filter(
        (menu) =>
          (menu?.card?.card?.itemCards || menu?.card?.card?.title) &&
          !menu?.card?.card?.categories &&
          !menu?.card?.card?.carousel,
      ),
    );
  }

  useEffect(() => {
    getResMenu(resMenuList);
  }, [resMenuList]);

  return (
    <div className="flex w-full flex-col gap-6 text-zinc-700">
      {filterMenu.map((list, index) => (
        <MenuCards list={list} key={index} />
      ))}
    </div>
  );
}
