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

    return (
        <div>
            <p>Number of books read this week: {Math.floor(Math.random() * 3)} </p>
            <p>Number of books read this month: {Math.floor(Math.random() * 10)}  </p>
            <p>Currently reading: </p>
            <a href='/profile/:id/friends'>See my Friends List</a><br></br>
            <a href='/profile/:id/reviews'>See my Reviews</a><br></br>
            <a href='/profile/:id/wishlist'>Want to read</a><br></br>
            <a href='/profile/:id/haveread'>Have read</a>
            {JSON.stringify(props)}
        </div>
    )
}