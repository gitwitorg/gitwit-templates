import React, { useState } from 'react';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';

const Autocomplete = ({ placeholder, options }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (value) => {
    setSearchTerm(value);
  };

  const filteredOptions = options.filter((option) => option.toLowerCase().startsWith(searchTerm.toLowerCase()));

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        className="border border-gray-300 rounded-md px-4 py-2 w-80"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredOptions.length > 0 && (
        <ComboboxPopover className="border border-gray-300 rounded-md mt-2">
          <ComboboxList className="max-h-40 overflow-y-auto">
            {filteredOptions.map((option) => (
              <ComboboxOption key={option} value={option} />
            ))}
          </ComboboxList>
        </ComboboxPopover>
      )}
    </Combobox>
  );
};

const App = () => {
  const fruitOptions = ['apple', 'banana', 'blueberry', 'cherry'];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Autocomplete placeholder="Search for a fruit" options={fruitOptions} />
    </div>
  );
};

export default App;