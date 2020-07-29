import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserRow(props) {
    let buttonCaption = props.friend ? "Remove" : "Add";  // in case we want to change butt
    return(
        <div>
            <NavLink class="nav-link" to={`/profile/${props.user.id}`}>{props.user.name}</NavLink>
            <button>{buttonCaption}</button>
        </div>
    )
}