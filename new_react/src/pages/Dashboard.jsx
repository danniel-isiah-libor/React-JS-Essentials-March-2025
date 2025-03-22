import React from "react";
import dashboardStyles from "../Dashboard.module.css";
import DashboardTable from "../Table/DashboardTable";

function Dashboard() {
  const posts = [
    {
      title: "Post 1",
      body: "This is Post 1",
    },
    {
      title: "Post 2",
      body: "This is Post 2",
    },
    {
      title: "Post 3",
      body: "This is Post 3",
    },
  ];

  const styles = {
    border: "1px solid red",
    marginBottom: "10px",
  };

  return (
    <>
      <div>Dashboard</div>
      <br />
      <ul className={dashboardStyles.bgColor}>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <DashboardTable />
    </>
  );
}

export default Dashboard;
