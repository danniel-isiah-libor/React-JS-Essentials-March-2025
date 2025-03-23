import React, {useState,createContext} from 'react'
import SearchBar from './SearchBar.jsx'
import Table from './Table.jsx'


export const RecordContext = createContext();

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

const value={
    headers,
    users
}

  return (
    <>
        <RecordContext.Provider value={value}>
            <SearchBar/>  
            <Table/>
        </RecordContext.Provider>
    </>
  )
}


export default UsersTable