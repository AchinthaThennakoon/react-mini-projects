import React from "react";
import { IoMdMenu } from "react-icons/io";

const menuItems = [
  {
    id: 1,
    title: "Home",
    path: "#",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];

const Nav = () => {
  return (
    <nav>
      <div className="container py-10 flex justify-between items-center">
        {/* logo section */}
        <div>
          <h1 className="font-bold text-2xl">The Coding Journey</h1>
        </div>
        {/* menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block py-2 px-3 hover:text-secondary hover:cursor-pointer relative group"
                >
                  {item.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>

        {/* Mobile hamburger section */}
        <div className="lg:hidden">
          <IoMdMenu />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
