import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
        <li>
          <Link
            className="nav__link"
            to="/">
            Contacts
          </Link>
        </li>
        <li>
          <Link
            className="nav__link"
            to="/about">
            About
          </Link>
        </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;