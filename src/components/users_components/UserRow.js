import React from 'react'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function UserRow(props) {
    const handleClick = () => {
        // TODO: HOW TO ACCESS USER ID?
        /*
        Axios.get(`/users/${}/update`, {friends: props.user.id})
            .then(updateResult => {
                //something
            })
            .catch(err => {
                console.log(`Error adding friend: ${err}`);
            })
        */
       console.log(`Clicked on Add Friend for ${props.user.name}`);
    }
    return(
        <div>
            <NavLink className="nav-link" to={`/profile/${props.user.id}`}>{props.user.name}</NavLink>
            <button onClick={handleClick}>Add Friend</button>
        </div>
    )
}