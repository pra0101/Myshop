import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link dropdown-toggle" >Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link dropdown-toggle" >Brands</a>
          </li>
          <li className="nav-item">
            <a className="nav-link dropdown-toggle" >Deals</a>
          </li>
          <li className="nav-item">
            <a className="nav-link dropdown-toggle" >Services</a>
          </li>
        </ul>
        <ul className="navbar-nav pull-right">
          <li className="nav-item">
            <a className="nav-link dropdown-toggle" >Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link dropdown-toggle" >Recently Viewed</a>
          </li>
          <li className="nav-item">
            <a className="nav-link dropdown-toggle" href="#/orderstatus">Order Status</a>
          </li>
          <li className="nav-item">
            <a className="nav-link dropdown-toggle" >Saved Items</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}