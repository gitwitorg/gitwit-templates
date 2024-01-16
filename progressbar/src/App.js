import React, { useState, useEffect } from 'react'

const ProgressBar = ({ progress }) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prev) => (prev >= progress ? prev : prev + 1))
    }, 10)

    return () => clearInterval(interval)
  }, [progress])

  return (
    <div className="bg-gray-200 h-4 w-full rounded-full overflow-hidden">
      <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${width}%`, transition: 'width 0.2s ease-in-out' }}></div>
    </div>
  )
}

export default function App() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center h-screen mx-10">
      <ProgressBar progress={progress} />
    </div>
  )
}