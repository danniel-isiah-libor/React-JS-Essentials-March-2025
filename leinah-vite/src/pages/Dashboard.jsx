import Container from '../Components/Basic/Container.jsx';
import Table from '../Components/Basic/Table.jsx';
import Field from '../Components/Form/Field.jsx';
import React, { useState, useEffect, createContext } from 'react';

export const RecordContext = createContext();
export default function Dashboard() {

    const [posts, setPosts] = useState([]);
    useEffect(() => { })
    const [searchTerm, setSearchTerm] = useState('');


    const users = [
        {
            id: 1,
            name: "Juan Dela Cruz",
            username: "jdcruz12",
            email: "jdelacruz@gmail.com"
        },
        {
            id: 2,
            name: "Maria Dela Cruz",
            username: "maria_cruz",
            email: "maria@gmail.com"
        },
        {
            id: 3,
            name: "John Doe",
            username: "jdoe23",
            email: "jdoe@gmail.com"
        },
        {
            id: 4,
            name: "Jane Doe",
            username: "jane_doe777",
            email: "jane_doe@gmail.com"
        },
    ];

    // Filter by search
    const filteredData = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <Container>
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-6">
                    <Field
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type={"text"}
                        labelName={"Search"}
                        placeholder={"Search"}
                        attribElement={"search"}
                    />
                </div>
                <div className="col-span-6">
                    <button
                        id='search'
                        type='submit'
                        className="w-full h-full rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                    >
                        Search
                    </button>
                </div>
                <div className="col-span-12">
                    <Table records={users} headers={users} />
                </div>
            </div>
        </Container>
    )
}
