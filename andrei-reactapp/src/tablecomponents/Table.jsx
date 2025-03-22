import React from 'react'
import TableHeader from './TableHeaders';
import TableRows from './TableRows';

function Table() {

      const theads = ["Id", "Name", "User", "Email"];

      const rows = [
        {
          id: "1",
          name: "Andrei",
          username: "Jack",
          email: "@email.com",
        },

        {
          id: "2",
          name: "Andrei2",
          username: "Jack",
          email: "@email.com",
        },
        {
          id: "3",
          name: "Andrei3",
          username: "Jack",
          email: "@email.com",
        },
      ];
  return (
    <>
      <table>
        <TableHeader theads = {theads} />
        <TableRows rows={ rows} />
      </table>
    </>
  )
}

export default Table