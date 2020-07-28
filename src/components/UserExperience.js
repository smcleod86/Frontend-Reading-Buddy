import React from 'react'

export default function UserExperience(props) {
    const ratingOptions = ["1", "2", "3", "4", "5"];
    return (
        <>
            <div className="container left-panel">
                <h3>Current Book:</h3>
                <h4>{props.bookInfo.title}</h4>
                <p>Author: {props.bookInfo.author}</p>
                <p>Genre: {props.bookInfo.genre}</p>
                <p>Summary: {props.bookInfo.summary}</p>
            </div>
            <div className="container right-panel">
                <form>
                    <label for="rating">Rating:</label>
                    <select id="rating" defaultValue={props.userExperienceInfo.rating} name="rating">
                        { ratingOptions.map(ratingOption => {
                                return <option key={ratingOption} value={ratingOption}>{ratingOption}</option>
                        })}
                    </select>
                    <label for="review">Review:</label>
                    <input type="text" id="review" name="review" defaultValue={props.userExperienceInfo.review}/>
                    <label for="date_started">Date started:</label>
                    <input type="date" id="date_started" defaultValue={props.userExperienceInfo.date_started}/>
                    <label for="date_finished">Date finished:</label>
                    <input type="date" id="date_finished" defaultValue={props.userExperienceInfo.date_finished}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}