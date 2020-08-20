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
        axios.get(`${process.env.REACT_APP_SERVER_URL}users/${id}`)
            .then(response => {
                if (response.status === 200) {
                    props.setUserInfo({
                        _id: response.data.user._id,
                        first_name: response.data.user.first_name,
                        last_name: response.data.user.last_name,
                        user_name: response.data.user.user_name,
                        email: response.data.user.email
                    })
                    props.setUserReaderExperiences(response.data.user.readerExperiences)
                    props.setUserFriends(response.data.user.friends)
                    let theseUserBooks = response.data.user.readerExperiences.map(readerExperience => {
                        return readerExperience.book;
                    });
                    props.setUserBooks(theseUserBooks)
                } else {
                    setError(response.statusText)
                }
                console.log(response)
            })
            .catch (err => {
                setError(err.message)
            })
    }, [id]) 
    if (!props.userInfo){
        return null;
    }
    return (
        <div>
            {props.currentUser.user_name}
        
            <p>Number of books read this week: {Math.floor(Math.random() * 3)} </p>
            <p>Number of books read this month: {Math.floor(Math.random() * 10)}  </p>
            <p>Currently reading: </p>
            <a href={`/profile/${props.currentUser.id}/friends`}>Friends</a><br></br>
            <a href={`/profile/${props.currentUser.id}/reviews`}>Reviews</a><br></br>
            <a href={`/profile/${props.currentUser.id}/wishlist`}>Wishlist</a><br></br>
            <a href={`/profile/${props.currentUser.id}/haveread`}>Books I've Read</a><br></br>
            <p>USERINFO: {JSON.stringify(props.userInfo)}</p>
            <p>READEREXPERIENCES: {JSON.stringify(props.userReaderExperiences)}</p>
            <p>BOOKS: {JSON.stringify(props.userBooks)}</p>
            <p>FRIENDS: {JSON.stringify(props.userFriends)}</p>
        </div>
    )
}