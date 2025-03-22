// Table.js
import React from "react";

const Table = ({ data }) => {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        border: "2px solid #000",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              backgroundColor: "#f4f4f4",
              color: "black",
            }}
          >
            ID
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              backgroundColor: "#f4f4f4",
              color: "black",
            }}
          >
            Name
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              backgroundColor: "#f4f4f4",
              color: "black",
            }}
          >
            Username
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              backgroundColor: "#f4f4f4",
              color: "black",
            }}
          >
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item.id}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item.username}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item.email}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ padding: "8px", textAlign: "center" }}>
              No results found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
