import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-light bg-dark mb-5">
                  <div className="container">
                        <div className="heading-center">
                            <Link to="/" className="navbar-brand text-light text-lg bg-dark brand-text">
                                <b className="disappear">Food Delivery</b>
                            </Link>
                        </div>
                        <ul className="navbar-nav text-light d-inline-block">
                            <li className="nav-item d-inline-block mr-3">
                                <NavLink to="/search" className="text-light text-lg brand-text" id="logo"><i className="fas fa-search"/> Search</NavLink>
                            </li>
                            <li className="nav-item d-inline-block  mr-3">
                                <NavLink to="/addstore" className="text-light text-lg brand-text" id="logo"><i className="fas fa-plus"/> Add</NavLink>
                            </li>
                            <li className="nav-item d-inline-block">
                                <NavLink to="/allstores" className="text-light text-lg brand-text" id="logo"><i className="fas fa-building"/> Stores</NavLink>
                            </li>
                            <li className="nav-item d-inline-block ml-3">
                                <NavLink to="/login" className="text-light text-lg brand-text" id="logo"><i className="fas fa-sign-in-alt"/> Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
