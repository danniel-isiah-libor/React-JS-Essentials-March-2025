import React from "react";
import Post from "./components/Post";
import "./Dashboard.css";

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
  return (
    <>
      <h1>Dashboard</h1>
      <br />
      {posts.map((post, index) => (
        <Post item={post} index={index}/>
      ))}
    </>
  );
}

export default Dashboard;
