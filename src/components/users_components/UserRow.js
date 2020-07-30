import React, { useState } from 'react'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function UserRow(props) {
    let [ isFriend, setIsFriend ] = useState(props.user.isFriend);
    let buttonLabel = isFriend ? "Remove Friend" : "Add Friend";

    const handleClick = () => {
        let removeFlag = isFriend ? "?remove=true" : "";
        console.log(`Calling ${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/update${removeFlag}`)
        Axios.put(`${process.env.REACT_APP_SERVER_URL}/users/${props.currentUser.id}/update${removeFlag}`, {friendId: props.user._id})
            .then(updateResult => {
                setIsFriend(!isFriend);
                console.log("Added friend I think");
            })
            .catch(err => {
                console.log(`Error adding friend: ${err}`);
            })
    }
    return(
        <div>
            <NavLink className="nav-link" to={`/profile/${props.user.id}`}>{props.user.first_name} {props.user.last_name}</NavLink>
            <button onClick={handleClick}>{buttonLabel}</button>
        </div>
    )
}