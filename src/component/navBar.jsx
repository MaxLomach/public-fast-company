import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand navbar-light bg-success bg-opacity-50'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Main
        </Link>

        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/user'>
              User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
