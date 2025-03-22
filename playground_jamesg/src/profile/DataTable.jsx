import React from 'react';

const DataTable = ({ records }) => {
  return (
    <div>
      {records.length > 0 ? (
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Username</th>
              <th className="border p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td className="border p-2">{record.id}</td>
                <td className="border p-2">{record.name}</td>
                <td className="border p-2">{record.username}</td>
                <td className="border p-2">{record.email}</td>
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