import React from 'react'

export default function Sidebar() {
  return (
    <div className='d-sm-none d-md-block d-none d-sm-block'>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/list">List</a></li>
            <li><a href="/borrow">Borrow/Purchase a book</a></li>
            <li><a href="/return">Return book</a></li>
            <li><a href="/about">About Us!</a></li>
        </ul>
    </div>
  )
}
