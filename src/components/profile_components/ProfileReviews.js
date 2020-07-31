import React from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function ProfileReviews(props) {

    const handleClick = (e) => {
        e.preventDefault()
        return (
            <Redirect to={`/readerexperiences/${e.target.value}/edit`} />
        )
    }

    const reviews = props.profileInfo.readerExperiences.map((review, key) => {
        return (
            <div key={key} value={reviews._id} onClick={handleClick}>
                <p>{reviews.user.user_name} says: {reviews.review}</p>
                <p>And rates the book a: {reviews.rating} out of 5!</p>
            </div>
        )
    }) 

    return(
        <div>
            {reviews}
        </div>
    )
}