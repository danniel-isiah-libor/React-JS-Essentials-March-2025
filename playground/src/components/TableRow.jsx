import React from "react";

function TableRow(props) {
  console.table(props.item);

  // records = props.item;
  return (
    <tbody>
      <tr className="bg-gray-100">
        {/* {records.map((record, index) => (
        <td>{record}</td>
       ))} */}
        {props.children}
      </tr>
    </tbody>
  );
}

export default TableRow;
