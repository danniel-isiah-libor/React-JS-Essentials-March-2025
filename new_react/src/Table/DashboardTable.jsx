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
    {
      id: 5,
      name: "Dave Tablante",
      username: "dave",
      email: "dave.tablante@wdc.com",
    },
  ]);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    if (!searchTerm) {
      // pag empty ang search show all
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
