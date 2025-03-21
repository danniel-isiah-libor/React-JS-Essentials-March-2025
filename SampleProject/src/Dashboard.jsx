import React from "react";

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

  return (
    <>
    <div>Dashboard</div>
    <br/>
    <ul>
       {
         posts.map((post, index) => {
            return (
                <li>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li> 
            )
         })
       }

    </ul>
    </>
  );
}
