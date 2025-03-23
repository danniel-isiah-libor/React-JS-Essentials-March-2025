import React, { use, useEffect, useState } from "react";
import Post from "../components/Post";
import "../css/Dashboard.css";
import Section from "../components/Section";
import Table from "../components/Table";
import TableCellData from "../components/TableCellData";
import TableRow from "../components/TableRow";
import InputField from "../components/InputField";

const fields = {
  name: "",
  username: "",
  email: "",
};

function Dashboard() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const search = urlParams.get("search");
  const [form, setForm] = useState(fields);

  const [records, setRecord] = useState([
    // {
    //   name: "Post 1",
    //   username: "post_1",
    //   email: "post1@email.com",
    // },
  ]);

  const [headers] = useState([
    {
      key: "id",
      label: "User ID",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "username",
      label: "Username",
    },
    {
      key: "email",
      label: "Email",
    },
  ]);

  useEffect(() => {});

  const onChange = (e) => {
    const { name, value } = e.target;
    // firstRender = true;
    // setForm({
    //   ...form,
    //   [name]: value,
    // });

    setForm((prev) => ({
      ...prev,
      [name]: value ?? "",
    }));

    console.log(form);
  };

  const handleSearch = () => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.set("search", document.querySelector("#search").value);

    url.search = searchParams;
    window.location.href = url.toString();
  };

  const handleAdd = () => {
    alert(JSON.stringify(form));
    setRecord((prev) => ({
      ...prev,
      record: { name: form.name, username: form.username, email: form.email },
    }));
  };

  return (
    <>
      <Section title="Search">
        <div className="flex">
          <InputField name={`search`} />
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="pt-3">
          <InputField name={`name`} label={`Name`} onChange={onChange} />
          <InputField
            name={`username`}
            label={`Username`}
            onChange={onChange}
          />
          <InputField name={`email`} label={`Email`} onChange={onChange} />
          <button
            className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </Section>
      <Section title="Records">
        <Table headers={headers}>
          {/* {records.map((record, index) => {
            if (search && record.name == search) {
              return (
                <TableRow item={record} index={index} key={index}>
                  <td>{record.name}</td>
                  <td>{record.username}</td>
                  <td>{record.email}</td>
                </TableRow>
              );
            } else if (!search || search == "") {
              return (
                <TableRow item={record} index={index} key={index}>
                  <td className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-700">
                    {record.name}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-700">
                    {record.username}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-700">
                    {record.email}
                  </td>
                </TableRow>
              );
            }
          })} */}
        </Table>
      </Section>

      {/* {posts.map((post, index) => (
        <Post item={post} index={index}/>
      ))} */}
    </>
  );
}

export default Dashboard;
