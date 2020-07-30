/*
this component needs to be passed props in the form:
{
    bookInfo: {
        title: "blah",
        author: "blah",
        genre: "blahblah"
        summary: "blah"
    },
    readerExperienceInfo: {
        rating: "blah",
        review: "blah",
        date_started: "blah",
        date_finished: "blah"
    }

}
*/

// TODO: Component should redirect backwards after form submission, but that looks like it will take more work in higher-level files
// TODO: Style

import React , { useState } from 'react'
import Axios from 'axios';

export default function ReaderExperience({bookInfo, readerExperienceInfo}) {
    const ratingOptions = ["1", "2", "3", "4", "5"];
    let [ rating, setRating ] = useState(readerExperienceInfo.rating);
    let [ review, setReview ] = useState(readerExperienceInfo.review);
    let [ dateStarted, setDateStarted ] = useState(readerExperienceInfo.date_started);
    let [ dateFinished, setDateFinished ] = useState(readerExperienceInfo.date_finished);

    const handleRating = (e) => {
        setRating(e.target.value)
    }
    const handleReview = (e) => {
        setReview(e.target.value)
    }
    const handleDateStarted = (e) => {
        setDateStarted(e.target.value)
    }
    const handleDateFinished = (e) => {
        setDateFinished(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const readerExperienceData = {
            rating: rating,
            review: review,
            date_started: dateStarted,
            date_finished: dateFinished
        }
        Axios.put(`${process.env.REACT_APP_SERVER_URL}/ReaderExperiences/${readerExperienceInfo.id}`, readerExperienceData)
            .then(res => {
                console.log(`Update response from backend: ${JSON.stringify(res)}`)
            })
            .catch(err => {
                console.log(`error submitting update request: ${err}`)
            })
    }

    return (
        <>
            <div className="container left-panel">
                <h3>Current Book:</h3>
                <h4>{bookInfo.title}</h4>
                <p>Author: {bookInfo.author}</p>
                <p>Genre: {bookInfo.genre}</p>
                <p>Summary: {bookInfo.summary}</p>
            </div>
            <div className="container right-panel">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="rating">Rating:</label>
                    <select id="rating"  name="rating" defaultValue={rating} onChange={handleRating}>
                        { ratingOptions.map(ratingOption => {
                                return <option key={ratingOption} value={ratingOption}>{ratingOption}</option>
                        })}
                    </select>
                    <label htmlFor="review">Review:</label>
                    <input type="text" id="review" name="review" defaultValue={review} onChange={handleReview} />
                    <label htmlFor="dateStarted">Date started:</label>
                    <input type="date" id="dateStarted" defaultValue={dateStarted} onChange={handleDateStarted} />
                    <label htmlFor="dateFinished">Date finished:</label>
                    <input type="date" id="dateFinished" defaultValue={dateFinished} onChange={handleDateFinished}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}