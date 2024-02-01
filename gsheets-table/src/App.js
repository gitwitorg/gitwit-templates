import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Papa from 'papaparse'

const SPREADSHEET_ID = '<SPREADSHEET_ID>'
/*
--- SPREADSHEET SCHEMA DO NOT CHANGE ---
<SPREADSHEET_SCHEMA>
--- SPREADSHEET SCHEMA DO NOT CHANGE ---
*/

const Loading = () => (
  <p className="text-center">Loading...</p>
)

const Error = ({ message }) => (
  <p className="text-center text-red-500">{message}</p>
)

const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto">
    <table className="table-auto w-full">
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header} className="px-4 py-2">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, index) => (
              <td key={index} className="border px-4 py-2">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const GradientBackground = ({ children }) => (
  <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex justify-center items-center">
    {children}
  </div>
)

const App = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?gid=0&format=csv`)
        const parsedData = Papa.parse(response.data, { header: true }).data
        setData(parsedData)
      } catch (error) {
        setError('Error fetching data')
      }
    }
    fetchData()
  }, [])

  return (
    <GradientBackground>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-full mx-auto">
        <h1 className="font-semibold text-2xl mb-4">
          Welcome to my app
        </h1>
        {error ? <Error message={error} /> : data.length > 0 ? <Table headers={Object.keys(data[0])} rows={data} /> : <Loading />}
      </div>
    </GradientBackground>
  )
}

export default App

