import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

//---- The Nav Bar class function---//
export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          {/* ---link for home page */}
          <Link to="/" className="navbar-brand">
            Cars.com
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                {/* ---link for home page */}
                <Link to="/" className="nav-link">
                  Cars
                </Link>
              </li>
              {/* ---link for add car page */}
              <li className="navbar-item">
                <Link to="/add" className="nav-link">
                  Add Car
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
