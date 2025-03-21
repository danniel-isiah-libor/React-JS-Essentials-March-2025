import React from 'react'
import DashboardStyles from './Dashboard.module.css';
export default function Dashboard() {

  const posts = [
    {
      title: "Post 1",
      body: "This is Post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius!"
    },
    {
      title: "Post 2",
      body: "This is Post 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius!"
    },
    {
      title: "Post 3",
      body: "This is Post 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius!"
    }
  ];

  return (
    <>
      <h1>Dashboard</h1>
      <ul className={DashboardStyles.bgColor}>
        {
          posts.map((post, index) => {
            return (
              <li key={index}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
