import React, { useContext } from "react";
import TableData from "./TableData";
import { RecordContext } from "./UsersTable";
export default function Table() {
const {data, header} = useContext(RecordContext)

  return (
    <div className="">
      {header !== undefined && data !== undefined ? (
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
            {data.length !== 0 ? (
              <TableData/>
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
