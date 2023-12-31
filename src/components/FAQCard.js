import { HorizontalRollar } from "./HorizontalRollar";
import openMenuIcon from "../assets/open_menu.svg";
import closeMenuIcon from "../assets/close_menu.svg";

export function FAQCard({ item, handleActiveCard, id, open }) {
  const { title, description } = item;

  if (!title || !description) return;

  return (
    <>
      <div
        onClick={() => handleActiveCard(id)}
        className="flex cursor-pointer flex-col  gap-3"
      >
        <div className="flex  items-center justify-between">
          <h4 className="text-gray-600 hover:text-orange-500 xs:text-sm">
            {title}
          </h4>
          <img
            className="w-5 xs:w-3"
            src={open === id ? openMenuIcon : closeMenuIcon}
            alt=""
          />
        </div>
        {open === id && (
          <p className="text-light text-sm text-gray-600 xs:text-xs">
            {description}
          </p>
        )}
      </div>
      <HorizontalRollar />
    </>
  );
}
