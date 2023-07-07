import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='d-sm-none d-md-block d-none d-sm-block'>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/list">List of Books Borrowed</NavLink></li>
            <li><NavLink to="/borrow">Borrow/Purchase a book</NavLink></li>
            <li><NavLink to="/return">Return book</NavLink></li>
            <li><NavLink to="/about">About Us!</NavLink></li>
        </ul>
    </div>
  )
}
