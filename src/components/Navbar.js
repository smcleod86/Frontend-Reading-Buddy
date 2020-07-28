
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nab mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to = "/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to = "/books" >Books</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to = "/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to = "/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to = "/register">Register</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar