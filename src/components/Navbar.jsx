import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="navbar">
      <div className="logo">
        <ul className="items">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink className="navlink" exact="true" to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="avatar">
        <FaUserAlt />
      </div>
    </nav>
  );
};

export default Navbar;
