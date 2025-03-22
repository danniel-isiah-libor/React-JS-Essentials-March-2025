import React from 'react'
import {Link,Outlet } from 'react-router-dom'

const navigation = [
  {
    name: 'Dashboards',
    href: '/',
  },
  
  {
    name: 'Profile',
    href: '/profile',
  },
  {
    name: 'Hooks',
    href: '/hooks',
  },
  {
    name: 'CreatePost',
    href: '/createpost',
  },
]

function Layout() {
  return (
    <>
      <div className="">
        <div className='flex justify-between mb-10'>
          <div className='font-bold text-2xl'>Logo</div>
          <ul className="flex space-x-4 bg-zinc-800 p-2 rounded-sm ">
            {navigation.map((nav, index) => {
              return (
                <li key={index}>
                  <Link to={nav.href} className='hover:text-zinc-500 '>{nav.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Outlet />
      </div>
    </>
  );
}
export default Layout