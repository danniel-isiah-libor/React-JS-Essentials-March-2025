import React from "react";

function Table(props) {
  return (
    <>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            {props.headers.map((header, index) => {
              return <th key={index}>{header.label}</th>;
            })}
          </tr>
        </thead>
        {props.children}
      </table>
    </>
  );
}

export default Table;
