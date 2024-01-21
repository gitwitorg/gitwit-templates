import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // added css
import { Carousel } from 'react-responsive-carousel'

export default function App() {
  return (
    <div className="p-2">
      <div className=" p-4">
        <Carousel
          showArrows={false}
          showIndicators={true}
          showThumbs={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          autoPlay={false}
          stopOnHover={true}
          swipeable={true}
          dynamicHeight={false}
          emulateTouch={true}
          autoFocus={false}
          selectedItem={0}
          swipeScrollTolerance={5}
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="border border-gray-400 rounded-lg h-64 bg-gray-50 rounded-lg m-5">
              <p className="m-5">Hello {index}!</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}