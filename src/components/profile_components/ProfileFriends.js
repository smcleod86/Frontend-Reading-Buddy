import React from 'react'

export default function ProfileFriends(props) {

    
    return(
        <div>
            <h1> look at all my friends!! </h1>
            {props.currentUser.friends}
        </div>
    )
}