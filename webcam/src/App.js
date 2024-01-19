import React from 'react'
import Webcam from "react-webcam"

const WebcamDisplay = () => (
  <div className="w-full h-full">
    <Webcam />
  </div>
)

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen m-2">
        <h1 className="font-semibold text-3xl m-2">
          Smile! 📷
        </h1>
        <WebcamDisplay />
    </div>
  )
}