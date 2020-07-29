import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarusel() {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://placekitten.com/g/800/400"
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Connect With Freinds!</h3>
                    <p>Search for your freinds by their Username and see what books interest them, as well as reviews they have written for books!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://placekitten.com/g/800/400"
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Keep Track of Your Reads!</h3>
                    <p>Reading Buddy is great for helping you keep track of the books you have read, and helps you find new ones based on your friends!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://placekitten.com/g/800/400"
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Share Your Opinions and Start A Discussion!</h3>
                    <p>Read User created reviews of books that they have read and write your own to join the conversation!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://placekitten.com/g/800/400"
                alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3>Explore a Collection of over 700,000 Titles</h3>
                    <p>Reading Buddy was intended a virtual book recommendation library to help people keep track of what they have read and help them make an informed decision about what to read next.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}


export default function Home() {
    return (
       <ControlledCarusel />
    )
}
