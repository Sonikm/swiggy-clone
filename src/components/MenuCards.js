import { useState } from "react";
import openMenuIcon from "../assets/open_menu.svg";
import closeMenuIcon from "../assets/close_menu.svg";
import { MenuItem } from "./MenuItem";

export function MenuCards({ list }) {
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const resCardLength = list?.card?.card?.itemCards?.length || "";
  const { title } = list?.card?.card;

  return (
    <div className="flex w-full flex-col gap-6 xs:gap-4 text-zinc-700">
      <div className="border border-t-[16px] border-gray-100"></div>
      <div className="flex items-center justify-between px-4 ">
        <h3 className="text-lg font-bold text-zinc-700 xs:text-sm">
          {title} ({resCardLength})
        </h3>

        <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <img
            src={isOpenMenu ? openMenuIcon : closeMenuIcon}
            alt=""
            className="mr-4 w-5 cursor-pointer"
          />
        </button>
      </div>

      {isOpenMenu
        ? list?.card?.card?.itemCards?.map((menu, index) => (
            <MenuItem menu={menu?.card?.info} key={index} />
          ))
        : ""}
    </div>
  );
}
