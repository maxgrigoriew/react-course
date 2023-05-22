import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Главная</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Посты</a>
        </li>
      </ul>
      
    </div>
  </nav>
  )
}
