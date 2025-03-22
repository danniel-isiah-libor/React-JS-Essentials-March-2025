import React, { useState } from 'react';
import SearchBar from '../profile/SearchBar';
import DataTable from '../profile/DataTable';
// import data from './data';

const data = [
  { id: 1, name: 'dan', username: 'dan123', email: 'dan@email.com' },
  { id: 2, name: 'john', username: 'john123', email: 'john@email.com' },
  { id: 3, name: 'jane', username: 'jane123', email: 'jane@email.com' },
  { id: 4, name: 'james', username: 'james123', email: 'james@email.com' },
];

const SearchPage = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    if (query.trim() === '') {
      setFilteredData([]);
    } else {
      const result = data.filter(
        (item) =>
          item.name.includes(query) ||
          item.username.includes(query) ||
          item.email.includes(query)
      );
      setFilteredData(result);
    }
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <label className="block mb-4">Records Displayed: {filteredData.length}</label>
      <DataTable records={filteredData} />
    </div>
  );
};

export default SearchPage;