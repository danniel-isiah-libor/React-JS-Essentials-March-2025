import React, {useState} from 'react'
import SearchBar from "./SearchBar.jsx";
import Table from "./Table.jsx";

function UsersTable() {
    const [users] = useState([
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'bret@mail.test'
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'ervin@mail.test'
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'test@mail.test'
        }
    ])

    const [headers] = useState([
        {
            key: 'id',
            label: 'User ID'
        },
        {
            key: 'name',
            label: 'Name'
        },
        {
            key: 'username',
            label: 'Username'
        },
        {
            key: 'email',
            label: 'Email'
        }
    ])

  return (
    <>
        <SearchBar/>

        <Table records={users} headers={headers}/>
    </>
  )
}

export default UsersTable