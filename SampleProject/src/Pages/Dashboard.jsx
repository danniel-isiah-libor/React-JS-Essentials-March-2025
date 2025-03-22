import React from "react";
// import dashboardStyle from '../css/Dashboard.module.css'
// import Table from "../components/dashboard/Table";
// import Search from "../components/Search";
import UsersTable from "../components/dashboard/UsersTable";
export default function Dashboard() {
  const posts = [
    {
      title: "Post 1",
      body: "This is post 1",
    },
    {
      title: "Post 2",
      body: "This is post 2",
    },
    {
      title: "Post 3",
      body: "This is post 3",
    },
  ];
  const styles = {
    border: "1px solid",
    marginBottom: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
  };
  return (
    <div className="p-5 flex flex-col space-y-5">
      <h1 className="text-3xl font-medium ">Dashboard</h1>
      <br />
      <ul className="flex flex-col space-y-2">
        {posts.map((post, index) => {
          return (
            <li key={index} className="border bg-sky-200 px-3 py-1 rounded">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
      <UsersTable/>
    </div>
  );
  

}
