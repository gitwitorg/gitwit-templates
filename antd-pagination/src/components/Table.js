import React, { useState } from 'react'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'


export default Table = ({ data, start }) => {
  return (
    <table className="min-w-max w-full table-auto border border-gray-200 rounded-md shadow-md mb-4">
      <thead>
        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">ID</th>
          <th className="py-3 px-6 text-left">Name</th>
          <th className="py-3 px-6 text-left">Email</th>
          <th className="py-3 px-6 text-left">Age</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {data.map((item, index) => (
          <TableRow
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
            age={item.age}
            index={start + index + 1}
          />
        ))}
      </tbody>
    </table>
  )
}