import React from "react";
import { Link, Outlet } from "react-router-dom";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Profile",
    href: "/profile",
  },
  {
    name: "Hooks",
    href: "/hooks",
  },
  {
    name: "Post",
    href: "/post",
  },
  {
    name: "Memo",
    href: "/memo",
  },
];

function Layout() {
  return (
    <>
      <nav className="bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">
            <a href="#">MyLogo</a>
          </div>
          <div className="hidden md:flex space-x-8">
            {navigation.map((nav, index) => {
              return (
                // <li key={index}>
                <Link key={index} to={nav.href} className="text-white hover:text-gray-300">
                  {nav.name}
                </Link>
                // </li>
              );
            })}
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
