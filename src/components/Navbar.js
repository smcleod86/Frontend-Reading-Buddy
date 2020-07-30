import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = (props) => {
    return(
        <nav className="navbar">
            <div className="container">
                <div className="">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to = "/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to = "/books" >Books</NavLink>
                        </li>
                    </ul>
                    {
                        props.isAuthed
                        ? <ul className="nav-items">
                            <li className="nav-item">
                                <NavLink className="nav-link" to = "/profile">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <span onClick={props.handleLogout} className="nav-link logout-link" to="/login">Logout</span>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to = "/users">Find Friends</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to = "/readerexperiences/edit">readerexperiences/edit</NavLink>
                            </li>
                        </ul>
                        : <ul className="nav-items">
                            <li className="nav-item">
                                <NavLink className="nav-link" to = "/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar