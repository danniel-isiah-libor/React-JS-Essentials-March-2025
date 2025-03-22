import React from "react";
import TableData from "./TableData";

export default function Table({ tableHeader, tableData }) {
  const header = tableHeader ?? [];
console.log("tableHeader", tableHeader)
console.log("tableData", tableData)
  return (
    <div className="">
      {tableHeader !== undefined && tableData !== undefined ? (
        <table className="table-auto w-full">
          <thead>
            <tr>
              {header.map((title, index) => {
                return (
                  <td
                    className="px-3 py-1 border text-center border-gray-400"
                    key={index}
                  >
                    {title.name}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.length !== 0 ? (
              <TableData data={tableData} />
            ) : (
              <tr>
                <td colSpan={header.length} className="">
                  No data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <p>No Table Found</p>
      )}
    </div>
  );
}
