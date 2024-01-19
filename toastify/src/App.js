import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const handleButtonClick = () => {
      toast.success('Yay! It has been done. 🎉')
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <button
          type="button"
          onClick={handleButtonClick}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Do something
        </button>
      <ToastContainer />
    </div>
  )
}