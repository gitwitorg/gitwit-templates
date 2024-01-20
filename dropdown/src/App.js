import React, { useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi'

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        <span>Dropdown</span>
        <HiOutlineChevronDown className="w-5 h-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const items = [
    { label: 'Option 1', link: '#' },
    { label: 'Option 2', link: '#' },
    { label: 'Option 3', link: '#' },
    { label: 'More options', link: '#' },
  ]

  return (
    <div className="flex justify-center items-center h-screen">
      <Dropdown items={items} />
    </div>
  );
}