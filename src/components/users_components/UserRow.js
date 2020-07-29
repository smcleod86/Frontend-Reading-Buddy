import React from 'react'
export default function UserRow(props) {
    let buttonCaption = props.friend ? "Remove" : "Add";  // in case we want to change butt
    return(
        <div>
            <span>{props.user.name} </span>
            <button>{buttonCaption}</button>
        </div>
    )
}