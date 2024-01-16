import React, { useState } from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-96 rounded-lg overflow-hidden">
      <button
        className="w-full bg-gray-200 p-4 flex justify-between items-center rounded-t-lg"
        onClick={toggleAccordion}
      >
        <h1 className="font-semibold">
          {title}
        </h1>
        <span>{isOpen ? <FaAngleDown /> : <FaAngleRight />}</span>
      </button>
      {isOpen && (
        <div className="bg-gray-100 p-4 rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AccordionItem
          title="Welcome to my app!"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis, sem sed malesuada vestibulum, magna ipsum placerat quam, vel molestie eros dui vel est. Sed euismod, nunc eget lacinia consequat, elit nibh vehicula tellus, vel aliquet mauris sapien ac nisl. Nullam quis ante id dolor blandit lacinia. Nullam euismod ultricies nisl, nec egestas dolor faucibus vel. Sed vehicula euismod tellus id lacinia. Nulla facilisi. Donec at velit vel est bibendum bibendum. Mauris ut ex vel felis bibendum commodo.
          </p>
        </AccordionItem>
        <AccordionItem
          title="Another item"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis, sem sed malesuada vestibulum, magna ipsum placerat quam, vel molestie eros dui vel est. Sed euismod, nunc eget lacinia consequat, elit nibh vehicula tellus, vel aliquet mauris sapien ac nisl. Nullam quis ante id dolor blandit lacinia. Nullam euismod ultricies nisl, nec egestas dolor faucibus vel. Sed vehicula euismod tellus id lacinia. Nulla facilisi. Donec at velit vel est bibendum bibendum. Mauris ut ex vel felis bibendum commodo.
          </p>
        </AccordionItem>
        <AccordionItem
          title="One more item"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis, sem sed malesuada vestibulum, magna ipsum placerat quam, vel molestie eros dui vel est. Sed euismod, nunc eget lacinia consequat, elit nibh vehicula tellus, vel aliquet mauris sapien ac nisl. Nullam quis ante id dolor blandit lacinia. Nullam euismod ultricies nisl, nec egestas dolor faucibus vel. Sed vehicula euismod tellus id lacinia. Nulla facilisi. Donec at velit vel est bibendum bibendum. Mauris ut ex vel felis bibendum commodo.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
}