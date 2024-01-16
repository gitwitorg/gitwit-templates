import React, { useState, useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <FaSpinner className="animate-spin text-4xl text-gray-500" />
      ) : (
        <h1 className="font-semibold">
          Welcome to my app!
        </h1>
      )}
    </div>
  )
}