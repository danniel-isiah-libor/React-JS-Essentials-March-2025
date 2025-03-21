import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const navigation =[
  {
    name:"Dashboard",
    href:"/dashboard"
  },
  {
    name:"Profile",
    href:"/profile"
  }
]

export default function Layout() {
  return (
    <div>
      
        <ul>
          {
            navigation.map(({name,href})=><Link
             to={href}
            >
              {name}
            </Link>)
          }
        </ul>
        <Outlet/>  
    </div>
  )
}
