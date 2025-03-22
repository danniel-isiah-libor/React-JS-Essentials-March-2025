import React from "react";

const Search = ({ searchTerm, onSearchTermChange, onSearch }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
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
            padding: "5px 8px",
            marginLeft: "10px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            width: "150px",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
