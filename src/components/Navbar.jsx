import React from 'react'

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
    ]
  return (
    <nav>
      <ul>
      {links.map((link) => (
          <li key={link.id}>
            <NavLink className="navlink" exact="true" to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
