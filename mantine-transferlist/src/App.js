import { useState } from 'react';
import { TransferList, TransferListData } from '@mantine/core';

const initialValues: TransferListData = [
  [
    { value: 'spiderman', label: 'Spider-Man' },
    { value: 'ironman', label: 'Iron Man' },
    { value: 'captainamerica', label: 'Captain America' },
    { value: 'thor', label: 'Thor' },
    { value: 'hulk', label: 'Hulk' },
    { value: 'blackwidow', label: 'Black Widow' },
    { value: 'doctorstrange', label: 'Doctor Strange' },
  ],
  [
    { value: 'batman', label: 'Batman' },
    { value: 'superman', label: 'Superman' },
    { value: 'wonderwoman', label: 'Wonder Woman' },
    { value: 'flash', label: 'Flash' },
    { value: 'aquaman', label: 'Aquaman' },
  ],
];


export default function App() {
  const [data, setData] = useState(initialValues);
  return (
    <div className="container mx-auto p-8">
      <TransferList
      value={data}
      onChange={setData}
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
      titles={['Marvel', 'DC']}
    />
    </div>
  );
}