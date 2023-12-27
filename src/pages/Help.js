import { HorizontalRollar } from "../components/HorizontalRollar";
import openMenuIcon from "../assets/open_menu.svg";
import closeMenuIcon from "../assets/close_menu.svg";
import useGetHelp from "../hooks/useGetHelp";
import { useState } from "react";

function Help() {
  const { faqs } = useGetHelp();
  const [open, setOpen] = useState(-1);

  if (!faqs) return;

  function handleActiveCard(index) {
    setOpen(open === index ? -1 : index );
  }

  return (
    <div className="-mt-16 w-full bg-[#37718E]  p-14 pt-20">
      <div>
        <div className="px-10">
          <h2 className="mb-1 text-3xl font-bold text-white">Help & Support</h2>
          <p className="text-light text-white">
            Let's take a step ahead and help you better.
          </p>
        </div>

        <div className="mt-8 bg-white p-10">
          <h3 className="text-2xl font-bold">FAQs</h3>

          <div className="flex flex-col gap-6 py-5">
            {faqs?.map((item, index) => (
              <FAQCard
                item={item}
                key={item.id}
                open={open}
                handleActiveCard={handleActiveCard}
                id={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;

function FAQCard({ item, handleActiveCard, id, open }) {
  const { title, description } = item;

  if (!title || !description) return;

  return (
    <>
      <div
        onClick={() => handleActiveCard(id)}
        className="flex cursor-pointer flex-col  gap-3"
      >
        <div className="flex  items-center justify-between">
          <h4 className="text-gray-600 hover:text-orange-500">{title}</h4>
          <img
            className="w-5"
            src={open === id ? openMenuIcon : closeMenuIcon}
            alt=""
          />
        </div>
        {open === id && (
          <p className="text-light text-sm text-gray-600">{description}</p>
        )}
      </div>
      <HorizontalRollar />
    </>
  );
}
