import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'

export default function SearchBookDetails() {
    const [book, setBook] = useState({})
    const [error, setError] = useState(null);
<<<<<<< HEAD
    const [title, setTitle] = useState()
=======
    const [reviews, setReviews] = useState([])

>>>>>>> 5328694b180f32b6376109718e923dc4c329ade7

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
                } else {
                    setError(response.statusText)
                }
                    console.log("🥔🥔🥔🥔🥔")
            })
            .catch(err => {
                setError(err.message)
            })
        axios.get(`${process.env.REACT_APP_SERVER_URL}/books/${id}`)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    setReviews(response.readerExperiencesInfo)
                } else {
                    console.error(response.statusText)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    let authors = book.volumeInfo.authors.map((author, key) => {
        return (
            <span>{author}</span>
        )
    })

    let displayReviews = reviews.map((review, key) => {
        return (
            <div key={key}>
                <p>{review.user.user_name} rates this book: {review.rating}</p>
                <p>{review.review}</p>
            </div>
        )
    })


    return (
        <div>
            <div>
                <img src={book.volumeInfo.imageLinks.thumbnail}/>
                <h1>{book.volumeInfo.title}</h1>
                <p>By: {authors}</p>
                <p>Publisher: {book.volumeInfo.publisher}</p>
                <p>Published on: {book.volumeInfo.publishedDate}</p>
                <p>Description: {book.volumeInfo.description}</p>
                <p>Page Count: {book.volumeInfo.pageCount}</p>
                <p>Average Rating: {book.volumeInfo.averageRating}</p>
            </div>
            <div>
                {displayReviews}
            </div>
        </div>
        
    )
}
