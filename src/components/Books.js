import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Books() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(false)

    // call to API to get all bounties
    useEffect(() => {
        setRefresh(false)
        // Call the server
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+terms${process.env.API_KEY}`)
            .then(response => {
                // check the response is good
                if (response.status === 200) {
                    // set books equal to 
                    setBooks(response.data) 
                } else {
                    setError(response.statusText)
                }
                console.log(response)
            })
            .catch(err => {
                setError(err.message)
            })
    }, [])


    return (
        <div>
            <form>
                <form action="">
                    <p>Search by:</p>
                    <select name="searchBy">
                        <option value="author">Author</option>
                        <option value="title">Title</option>
                        <option value="genre">Genre</option>
                        <option value="rating">Rating</option>
                    </select>
                </form>
                <br></br>
                <label>
                    Search for books:
                    <input type="search" placeholder="Search Parameter" />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
                <button>Clear</button>
            </form>
            <p>----- Click a selection below to view more details -----</p>
            <div>

            </div>
        </div>
        
    )
}