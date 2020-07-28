import React , { useState } from 'react'

export default function UserExperience({bookInfo, userExperienceInfo}) {
    const ratingOptions = ["1", "2", "3", "4", "5"];
    let [ rating, setFormRating ] = useState(userExperienceInfo.rating);
    let [ review, setFormReview ] = useState(userExperienceInfo.review);
    let [ dateStarted, setFormDateStarted ] = useState(userExperienceInfo.date_started);
    let [ dateFinished, setFormDateFinsihed ] = useState(userExperienceInfo.date_finished);
    console.log(`rating: ${rating}, props: ${rating}`);
    console.log(`dateStarted: ${dateStarted}`)

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
                <form>
                    <label htmlFor="rating">Rating:</label>
                    <select id="rating" defaultValue={rating} name="rating">
                        { ratingOptions.map(ratingOption => {
                                return <option key={ratingOption} value={ratingOption}>{ratingOption}</option>
                        })}
                    </select>
                    <label htmlFor="review">Review:</label>
                    <input type="text" id="review" name="review" defaultValue={review}/>
                    <label htmlFor="dateStarted">Date started:</label>
                    <input type="date" id="dateStarted" defaultValue={dateStarted}/>
                    <label htmlFor="dateFinished">Date finished:</label>
                    <input type="date" id="dateFinished" defaultValue={dateFinished}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}