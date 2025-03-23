import React, { useState } from 'react';
import Searchbar from "../search/Searchbar.jsx";

function Search() {
  const submit = () => {
    alert("Search");
  }

  const users = [
    { id: 1, name: 'John Doe', username: 'jd', email: 'jd@gmail.com' },
    { id: 2, name: 'Jane Smith', username: 'jd', email: 'jd@gmail.com' },
    { id: 3, name: 'Alex Johnson', username: 'jd', email: 'jd@gmail.com' },
    { id: 4, name: 'Emily Davis', username: 'jd', email: 'jd@gmail.com' }
  ];

  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // Function to handle input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter users based on the search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <> 
      <Searchbar click={submit} text="Search" /> 

      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Search;