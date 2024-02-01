import React, { useRef, useState, useEffect } from 'react'; // react@18
import mapboxgl from 'mapbox-gl'; // mapbox-gl@2.3.1
import 'mapbox-gl/dist/mapbox-gl.css';
import classNames from 'classnames'; // classnames@2.2.8
import { BiSearch } from 'react-icons/bi'; // react-icons@4.2.0

const MAPBOX_ACCESS_TOKEN = '<MAPBOX_ACCESS_TOKEN>';
const MAP_CONTAINER_STYLE = { width: 'calc(100% - 320px)', height: '100vh' };

import HOUSE_DATA from "./components/HOUSE_DATA.js";

const LocationCard = ({ location, title, description, onClick }) => (
  <div className="bg-[#511] px-4 py-3 mb-4 rounded-md shadow-md cursor-pointer" onClick={onClick}>
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-medium text-white">{title}</h2>
      <div className="h-6 w-6 text-gray-300" role="img" aria-label="house">🏠</div>
    </div>
    <p className="mt-1 text-gray-300">{description}</p>
  </div>
);

const SearchBar = ({ value, onChange }) => (
  <div className="relative mb-4">
    <input
      type="text"
      placeholder="Search locations"
      className="bg-gray-800 text-white rounded-full py-2 px-4 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      value={value}
      onChange={onChange}
    />
    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
      <BiSearch className="text-gray-400" />
    </div>
  </div>
);

export default function App() {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (map) return;

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-122.4194, 37.7749],
      zoom: 11.5
    });

    newMap.on('load', () => {
      HOUSE_DATA.forEach(house => {
        const houseEl = document.createElement('div');
        houseEl.className = classNames('house', 'flex', 'items-center', 'justify-center', 'rounded-full', 'bg-gray-600', 'text-white', 'text-lg');
        houseEl.textContent = '🏠';

        const popupContent = `<strong>${house.title}</strong><p>${house.description}</p>`;

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent);

        new mapboxgl.Marker({ element: houseEl })
          .setLngLat(house.location)
          .setPopup(popup)
          .addTo(newMap);
      });
    });

    setMap(newMap);
  }, [map]);

  const filteredHouseData = HOUSE_DATA.filter(house => {
    const houseTitle = house.title.toLowerCase();
    const houseDescription = house.description.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    return houseTitle.includes(searchTermLower) || houseDescription.includes(searchTermLower);
  });

  return (
    <>
      <div className="p-2" style={{ ...MAP_CONTAINER_STYLE, float: 'left' }} ref={mapContainerRef} />

      <div className="bg-[#1f1f1f] h-screen overflow-y-auto pt-4 px-4 w-[320px]" style={{ float: 'right' }}>
        <h1 className="text-center text-2xl font-medium mb-3 text-white">Locations</h1>
        <p className="text-center mb-4 text-sm text-gray-200">
          SF has been known over the years for its legendary hacker houses.
        </p>
        <SearchBar value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        {filteredHouseData.map(house => (
          <LocationCard
            key={house.id}
            location={house.location}
            title={house.title}
            description={house.description}
            onClick={() => map.flyTo({ center: house.location, zoom: 14 })}
          />
        ))}
      </div>
    </>
  );
}