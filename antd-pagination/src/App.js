import React, { useState } from 'react'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'

import data from "./components/data.js";
import TableRow from "./components/TableRow.js";
import Table from "./components/Table.js";

const PAGE_SIZE = 10

export default function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const start = (currentPage - 1) * PAGE_SIZE
  const end = start + PAGE_SIZE

  return (
    <div className="p-4">
      <Table data={data.slice(start, end)} start={start} />
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={data.length}
        pageSize={PAGE_SIZE}
        className="my-4"
      />
    </div>
  )
}