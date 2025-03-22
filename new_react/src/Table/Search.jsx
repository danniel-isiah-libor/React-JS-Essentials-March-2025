import React from "react";

const Search = ({ searchTerm, onSearchTermChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchTermChange}
        style={{ marginBottom: "10px", padding: "5px", width: "200px" }}
      />
      <button
        onClick={onSearch}
        style={{
          padding: "5px 10px",
          marginLeft: "10px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
