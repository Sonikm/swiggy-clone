import useGetHelp from "../hooks/useGetHelp";
import { useState } from "react";
import { FAQCard } from "../components/FAQCard";

function Help() {
  const { faqs } = useGetHelp();
  const [open, setOpen] = useState(-1);

  if (!faqs) return;

  function handleActiveCard(index) {
    setOpen(open === index ? -1 : index);
  }

  return (
    <div className="-mt-16 w-full bg-[#37718E] p-14 pt-20 sm:px-8 xs:px-5">
      <div>
        <div className="px-10 xs:px-5">
          <h2 className="mb-1 text-3xl font-bold text-white xs:text-2xl">
            Help & Support
          </h2>
          <p className="text-light text-white xs:text-sm">
            Let's take a step ahead and help you better.
          </p>
        </div>

        <div className="mt-8 bg-white p-10">
          <h3 className="text-2xl font-bold sm:text-lg">FAQs</h3>

          <div className="flex flex-col gap-6 py-5 xs:gap-4">
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
