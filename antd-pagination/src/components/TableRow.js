import React, { useState } from 'react'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'


export default TableRow = ({ id, name, email, age, index }) => (
  <tr className="border-b border-gray-200 hover:bg-gray-100">
    <td className="py-3 px-6 text-left whitespace-nowrap">{index}</td>
    <td className="py-3 px-6 text-left whitespace-nowrap">{name}</td>
    <td className="py-3 px-6 text-left whitespace-nowrap">{email}</td>
    <td className="py-3 px-6 text-left whitespace-nowrap">{age}</td>
  </tr>
)