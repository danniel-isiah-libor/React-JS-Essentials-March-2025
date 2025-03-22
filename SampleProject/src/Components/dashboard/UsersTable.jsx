import React, { createContext, useState } from "react";
import Search from "../Search";
import Table from "./Table";
import { data } from "react-router-dom";

export const RecordContext = createContext();
export default function UsersTable() {
    const [tableHeader] = useState ([
        {
            name: "ID",
            key: "id"
        },
        {
            name: "Name",
            key: "name"
        },
        {
            name: "Username",
            key: "username"
        },
        {
            name: "Email",
            key: "email"
        },
        ])
  const [tableData] = useState ([
    {
      id: 1,
      name: "Christian",
      username: "christian123",
      email: "christian@yahoo.com"
    },
    {
      id: 2,
      name: "Dan",
      username: "dan123",
      email: "dan@yahoo.com"
    },
    {
      id: 3,
      name: "Jane",
      username: "jane123",
      email: "jane@yahoo.com"
    },
  ])

  const [table, setTable] = useState({
    data: tableData,
    header: tableHeader
  })

  const search = (text) => {
    const newdata = tableData.filter(item => {
      return item?.id?.toString()?.includes(text) || item?.name?.includes(text) || item?.username?.includes(text) || item?.email?.includes(text) 
    })
   setTable(prev => {
    return{
        ...prev,
        data: newdata
    }
   })
  }

  return (
    <div className="w-full h-full flex flex-col space-y-2">
      <Search search={search} />
      <RecordContext.Provider value={{data: table.data, header: table.header }}>
        <Table />
      </RecordContext.Provider>
    </div>
  );
}
