import React from 'react';

const DataTable = ({ records }) => {
  return (
    <div>
      {records.length > 0 ? (
        <table className="min-w-full table-auto border-collapse border border-black bg-white">

          <thead>
            <tr>
              <th className="border">ID</th>
              <th className="border">Name</th>
              <th className="border">Username</th>
              <th className="border">Email</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td className="border">{record.id}</td>
                <td className="border">{record.name}</td>
                <td className="border">{record.username}</td>
                <td className="border">{record.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No records found</p>
      )}
    </div>
  );
};

export default DataTable;