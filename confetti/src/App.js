import React from 'react'
import Confetti from 'react-confetti'

export default function App() {
  const [showConfetti, setShowConfetti] = React.useState(false)

  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowConfetti(true)}
        >
          Click me for confetti!
        </button>
        {showConfetti && <Confetti />}
    </div>
  )
}