import React from "react";
import dashboardStyle from './Dashboard.module.css'
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
//   const styles = {
//     border: "1px solid",
//     marginBottom: "5px",
//     paddingLeft: "5px",
//     paddingRight: "5px",
//   };
  return (
    <div className="p-5">
      <h1 className="text-5xl font-bold underline">Dashboard</h1>
      <br />
      <ul className="p-5 flex flex-col space-y-2">
        {posts.map((post, index) => {
          return (
            <li className="border bg-sky-200 px-3 py-1 rounded">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
