import React from "react";

export default function TableData({ data }) {
  return (
      <>
      {data?.map((item, index) => {
        return (
          <tr key={index}>
            {Object.keys(item).map((key, ind) => {
              return <td className="px-3 py-1 border border-gray-400 text-center" key={ind}>{item[key]}</td>;
            })}
          </tr>
        );
      })}
      </>
  );
}
