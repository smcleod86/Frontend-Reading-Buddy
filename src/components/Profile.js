import React, { useEffect, useReducer, useRefresh, useState } from 'react'
import { useParams } from 'react-router-dom'
// import ProfileFriends from '../components/profile_components/ProfileFriends'
import axios from 'axios'

export default function Profile(props) {
    //const [friends, setFriends] = useState([])
    const [error, setError] = useState(null)
    const [refresh, setRefresh] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        console.log("in profile.js useEffect")
        setRefresh(false)
        axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${id}`)
            .then(response => {
                if (response.status === 200) {
                    props.setProfileInfo(response.data)
                } else {
                    setError(response.statusText)
                }
                console.log(response)
            })
            .catch (err => {
                setError(err.message)
            })
    }, [id]) 
<<<<<<< HEAD

=======
    console.log(props.profileInfo)
>>>>>>> 9ccfb04f7a79f01059b1dc02b31684ee6b73fbf2
    return (
        <div>
            {props.currentUser.user_name}
        
            <p>Number of books read this week: {Math.floor(Math.random() * 3)} </p>
            <p>Number of books read this month: {Math.floor(Math.random() * 10)}  </p>
            <p>Currently reading: </p>
<<<<<<< HEAD
            <a href='/profile/:id/friends'>See my Friends List</a><br></br>
            <a href='/profile/:id/reviews'>See my Reviews</a><br></br>
            <a href='/profile/:id/wishlist'>Want to read</a><br></br>
            <a href='/profile/:id/haveread'>Have read</a>
            {JSON.stringify(props)}
=======
            <a href={`/profile/${props.currentUser.id}/friends`}>Friends</a><br></br>
            <a href={`/profile/${props.currentUser.id}/reviews`}>Reviews</a><br></br>
            <a href={`/profile/${props.currentUser.id}/wishlist`}>Wishlist</a><br></br>
            <a href={`/profile/${props.currentUser.id}/haveread`}>Books I've Read</a><br></br>
>>>>>>> 9ccfb04f7a79f01059b1dc02b31684ee6b73fbf2
        </div>
    )
}