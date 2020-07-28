import React from 'react'

export default function Profile() {

    return (
        <div>
            <p>Number of books read this week: {Math.floor(Math.random() * 3)} </p>
            <p>Number of books read this month: {Math.floor(Math.random() * 10)}  </p>
            <a href='/profile/friends'>See my Friends List</a><br></br>
            <a href='/profile/reviews'>See my Reviews</a><br></br>
            <a href='/profile/wishlist'>Want to read</a> 
            <a href='/profile/currentlyreading'>Currently reading</a> 
            <a href='/profile/haveread'>Have read</a>
        </div>
    )
}