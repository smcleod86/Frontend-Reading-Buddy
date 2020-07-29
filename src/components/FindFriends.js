import React, { useState } from 'react'
import UserRow from './users_components/UserRow.js'
import Axios from 'axios';

export default function FindFriends(props) {
    let sampleData = [{first_name: "bob", last_name: "brown", id:  "0294r2r"}, {first_name: "Erika", last_name: "Svensworth", id: "2490fds"}];
    let myFriends = [{name: "Erika", id: "2490fds"}];
    let [userList, setUserList ] = useState(sampleData);
    let [ firstName, setFirstName ] = useState("");
    let [ lastName, setLastName ] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const searchUsers = (e) => {
        e.preventDefault();
        let query = "";
        if (firstName && lastName) {
            query = `first_name=${firstName}&last_name=${lastName}`;
        } else {
            if (firstName) { query = `first_name=${firstName}` };
            if (lastName) { query = `last_name=${lastName}` };
        }
        if (query) {
            console.log(`Sending axios call to ${process.env.REACT_APP_SERVER_URL}/users?${query}`)
            Axios.get(`${process.env.REACT_APP_SERVER_URL}/users?${query}`)
                .then(response => {
                    setUserList(response.data.searchResults);
                })
                .catch(err => {
                    console.log(`Error getting search results: ${err}`);
                })
        }
    }

    //Needs currentUser.id passed as a prop
    /* 
    Axios.get('/users/${props.currentUser.id')
        .then(userData => {
            let myFriends.concat(userData.friends);
        })
        .catch(err => {
            console.log(`Error retrieving existing friend list: ${err}`)
        })
    */


    return(
        <>
            <div>
                <h2> Search Results </h2>
                {userList.map(user => {
                    return <UserRow user={user} friend={true} key={user.id} />
                })}
            </div>
            <div>
                <h2> Find New Friends: </h2>
                <form onSubmit={searchUsers}>
                    <label htmlFor="first_name">First Name:
                        <input type="text" id="first_name" name="first_name" onChange={handleFirstName}/>
                    </label>
                    <label htmlFor="last_name">Last Name:
                        <input type="text" id="last_name" name="last_name" onChange={handleLastName}/>
                    </label>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        </>
    )
}