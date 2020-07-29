import React, { useState } from 'react'
import UserRow from './users_components/UserRow.js'
import Axios from 'axios';

export default function FindFriends() {
    const searchResults = [{name: "bob", id:  "0294r2r"}, {name: "Erika", id: "2490fds"}];
    let [ query, setQuery ] = useState("");
    const handleQuery = (e) => {
        setQuery(e.target.value);
    }
    const searchUsers = (e) => {
        e.preventDefault();
        // needs users get route
        /*
        Axios.get(`${process.env.REACT_APP_SERVER_URL}/users?query=${query}`)
            .then(searchResults => {
            })
            .catch(err => {
                console.log(`Error getting search results: ${err}`);
            })
        */
    }
    return(
        <>
            <div>
                <h2> Search Results </h2>
                {searchResults.map(user => {
                    return <UserRow user={user} friend={true}  />
                })}
            </div>
            <div>
                <h2> Find New Friends: </h2>
                <form onSubmit={searchUsers}>
                    <label htmlFor="query">Name:
                        <input type="text" id="query" name="query" onChange={handleQuery}/>
                    </label>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        </>
    )
}