import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const CarouselButton = ({ children, onClick, position }) => (
  <button
    onClick={onClick}
    className={`bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-${
      position === 'left' ? 'l' : 'r'
    }`}
  >
    {children}
  </button>
)

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
  }

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
  }

  return (
    <div className="relative w-full h-64">
      <img
        src={images[currentImage]}
        alt="carousel"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-y-0 left-0 flex items-center">
        <CarouselButton onClick={prevImage} position="left">
          <FaChevronLeft />
        </CarouselButton>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <CarouselButton onClick={nextImage} position="right">
          <FaChevronRight />
        </CarouselButton>
      </div>
    </div>
  )
}

export default function App() {
  const images = [
    'https://via.placeholder.com/600x400/FF0000/FFFFFF',
    'https://via.placeholder.com/600x400/00FF00/FFFFFF',
    'https://via.placeholder.com/600x400/0000FF/FFFFFF',
  ]

  return (
    <div className="p-8 flex flex-col justify-center items-center h-screen">
      <Carousel images={images} />
    </div>
  )
}