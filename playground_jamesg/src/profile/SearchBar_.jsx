import React, { useState } from 'react';

const SearchBar_ = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="mb-4 flex gap-2sea">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded"
      /> 
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">Search</button>
    </div>
  );
};

export default SearchBar_;