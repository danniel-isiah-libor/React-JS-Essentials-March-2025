import React from "react";
import dashboardStyle from './../css/Dashboard.module.css'
import SearchableTable from '../page/SearchableTable.jsx'
export default function Dashboard() {
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
  const styles = {border:"1px solid red",marginBottom:"5px"};
//   posts.forEach(({title,body})=><li>{title}</li>);
  return <>
    <div>Dashboard</div>

    <br/>

    <SearchableTable
      header={
        [
          "name","username","email"
        ]
      }
    />
  </>;
}
