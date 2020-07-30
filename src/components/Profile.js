import React, { useEffect, useReducer, useRefresh } from 'react'
import ProfileFriends from '../components/profile_components/ProfileFriends'
import axios from 'axios'

export default function Profile(props) {
    const [friends, setFriends] = useState([])
    const [error, setError] = useState(null)
    const [refresh, setRefresh] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        setRefresh(false)
        axios.get(`${process.env.REACT_APP_SERVER_URL}/user/${id}`)
            .then(response => {
                if (response.satus === 200) {
                    setFriends(response.data)
                } else {
                    setError(response.statusText)
                }
                console.log(response)
            })
            .catch (err => {
                setError(err.message)
            })
    
            let friendList = friends.length < 1 ?
                <h3>You currently have no friends.</h3> :
                friends.map((friend, i) => (
                    {friendList}
                ))
    }, [id]) 

    return (
        <div>
            <p>Number of books read this week: {Math.floor(Math.random() * 3)} </p>
            <p>Number of books read this month: {Math.floor(Math.random() * 10)}  </p>
            <p>Currently reading: </p>
            <a href='/profile/friends'>See my Friends List</a><br></br>
            <a href='/profile/reviews'>See my Reviews</a><br></br>
            <a href='/profile/wishlist'>Want to read</a><br></br>
            <a href='/profile/haveread'>Have read</a>
        </div>
    )
}