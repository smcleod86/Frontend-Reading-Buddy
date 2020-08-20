import React from 'react';

export default function BookCard(props) {
    return (
        <div>
            return (
                <div>
                    <img src={props.book.image_url} alt="Book Thumbnail" />
                    <p>Title: {props.book.title}</p>
                </div>
            )
        </div>
    )
}