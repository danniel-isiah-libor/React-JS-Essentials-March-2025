// DashboardTable.js
import React, { useState, useEffect } from "react";
import Search from "./Search";
import Table from "./Table";

const DashboardTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      name: "James Gonzales",
      username: "james",
      email: "james.gonzales@wdc.com",
    },
    {
      id: 2,
      name: "Brian Javelosa",
      username: "brian",
      email: "brian.javelosa@wdc.com",
    },
    {
      id: 3,
      name: "Jervin Faderanga",
      username: "jervin",
      email: "jervin.faderanga@wdc.com",
    },
    {
      id: 4,
      name: "EJ Lugtu",
      username: "ej",
      email: "estelitojerome.lugtu@wdc.com",
    },
    // Add more data as needed
  ]);

  // Handle search term change in the input
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    if (!searchTerm) {
      // If the search term is empty, show all data
      setFilteredData(data);
    } else {
      const results = data.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(results);
    }
  };

  // Initialize filteredData with all data if no search is performed initially
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <div>
      <Search
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
        onSearch={handleSearch}
      />
      <Table data={filteredData} />
    </div>
  );
};

export default DashboardTable;
