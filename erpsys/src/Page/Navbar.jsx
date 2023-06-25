import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid" align="center">
          <a  href="/" className="navbar-brand">Library Management System</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
