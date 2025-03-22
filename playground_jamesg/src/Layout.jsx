import React from 'react'
import {Link, Outlet} from "react-router-dom"


const navigation = [
    {
        name: 'Dashboard',
        href: '/dashboard',
    },
    {
        name: 'Profile',
        href: '/profile',
    },
    {
        name: 'Register',
        href: '/register',
    }
]


function Layout() {
    return (
      <>
          <div>
              <ul>
                  {
                      navigation.map((nav, index) => {
                          return (
                              <li key={index}>
                                  <Link to={nav.href}>
                                      {nav.name}
                                  </Link>
                              </li>
                          )
                      })
                  }
              </ul>
  
              <Outlet/>
          </div>
      </>
    )
  }
  
  export default Layout