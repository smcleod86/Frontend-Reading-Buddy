import React, { useReducer } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function ProfileFriends(props) {

    const handleClick = (e) => {
        e.preventDefault()
        return (
            <Redirect to={`/users/${e.target.value}`} />
        )
    }

    const friends = props.profileInfo.friends.map((friend, key) => {
        return (
            <div key={key} value={friends._id} onClick={handleClick}>
                <p>{friends.first_name} {friends.last_name}</p>
            </div>
        )
    }) 
}