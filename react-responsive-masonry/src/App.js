import React from 'react'
import PropTypes from 'prop-types'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const items = [
  { id: 1, image: 'https://via.placeholder.com/300x300/FF0000/FFFFFF', title: 'Item 1' },
  { id: 2, image: 'https://via.placeholder.com/300x400/00FF00/FFFFFF', title: 'Item 2' },
  { id: 3, image: 'https://via.placeholder.com/400x300/0000FF/FFFFFF', title: 'Item 3' },
  { id: 4, image: 'https://via.placeholder.com/300x300/FFC0CB/FFFFFF', title: 'Item 4' },
  { id: 5, image: 'https://via.placeholder.com/300x400/FFFF00/FFFFFF', title: 'Item 5' },
  { id: 6, image: 'https://via.placeholder.com/400x300/FFA500/FFFFFF', title: 'Item 6' },
]

const Item = ({ item }) => (
  <div className="relative rounded-lg shadow p-1 border border-gray-300">
    <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent opacity-10 rounded-lg"></div>
    <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg" />
    <h2 className="text-center font-semibold pt-1">{item.title}</h2>
  </div>
)

Item.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default function App() {
  return (
    <div className="justify-center items-center h-screen m-4">
      <div className="max-w-4xl w-full">
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 500: 2, 700: 3}}>
        <Masonry gutter="20px">
          {items.map((item) => (
            <div key={item.id} className="masonry-item">
              <Item item={item} />
            </div>
          ))}
        </Masonry>
                      </ResponsiveMasonry>
      </div>
    </div>
  )
}