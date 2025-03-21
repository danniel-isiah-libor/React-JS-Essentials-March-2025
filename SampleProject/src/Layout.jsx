import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const navigation = [
  {
    name: "Dashboard",
    href: "/"
  },
  {
    name: "Profile",
    href: "/profile"
  }
]
export default function Layout() {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col space-y-3'>
      <div className="px-3 py-2 w-full flex justify-end border-b border-gray-500 shadow ">
      <ul className='flex flex-row space-x-2 '>
        {
          navigation.map((nav, index ) => {
            return(
              <li key={index}><Link className='text-sm cursor-pointer' to={nav.href}>{nav.name}</Link></li>
            )

          })
        }
      </ul>

      </div>
     <div className='p-5'>
     <Outlet/>

     </div>
      </div>
    </div>
  )
}
