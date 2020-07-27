import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileFriends from './ProfileFriends'
export default function Profile() {
    return (
        <div>
            <p>Number of books read this week: {Math.floor(Math.random() * 3)} </p>
            <p>Number of books read this month: {Math.floor(Math.random() * 10)}  </p>
            <a href="/profile/friends" >See my Friends List</a><br></br>
            <button id="reviews" >See my Reviews</button> <br></br>
            <button id="want" >Want to read</button>
            <button id="currently" >Currently reading</button>
            <button id="read" >Have read</button>
                <Switch>
                    <Route path='/profile/friends'>
                        <ProfileFriends />
                    </Route>
                </Switch>
        </div>
    )
}