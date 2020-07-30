import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'

export default function SearchBookDetails() {
    const [book, setBook] = useState({})
    const [error, setError] = useState(null);
    const [title, setTitle] = useState()

    let { id } = useParams()

    useEffect(() => {
        // Call the server
        // https://www.googleapis.com/books/v1/volumes/iJgu5v1CJ8gC
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(response => {
                // check the response is good
                if (response.status === 200) {
                    // set books equal to 
                    console.log("Something different on SearchTerm", response.data)
                    console.log("🌵🌵🌵",response.data.volumeInfo.title)
                    setBook(response.data) 
                    setTitle(response.data.volumeInfo.title)
                } else {
                    setError(response.statusText)
                }
                    console.log("🥔🥔🥔🥔🥔")
            })
            .catch(err => {
                setError(err.message)
            })
    }, [])

    return (
        <div>
            <p>Details of Book</p>
            <p>Title: {title}</p>
        </div>
        
    )
}
