import React from 'react'
import { Scatter } from 'react-chartjs-2';

export default function App() {
  const data = {
    datasets: [
      {
        label: 'My First Dataset',
        data: [
          {x: 65, y: 75},
          {x: 59, y: 49},
          {x: 80, y: 90},
          {x: 81, y: 29},
          {x: 56, y: 65},
          {x: 55, y: 45},
          {x: 40, y: 60},
        ],
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      }
    ]
  };
  
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-3/4">
          <Scatter data={data} />
        </div>
    </div>
  )
}
