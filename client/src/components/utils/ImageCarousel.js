import React from 'react';
import Carousel from 'react-material-ui-carousel'
import CaroselItem from './CarouselItem';
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
function ImageCarousel(props)
{
    var items = [
        {
            fileName: "img1.jpg",
            description: "Probably the most random thing you have ever seen!",
            img:img1
        },
        {
            fileName: "img2.jpg",
            description: "Hello World!",
            img:img2
        },
        {
            fileName: "img3.jpg",
            description:"blah",
            img:img3
        }
    ]

    return (
        <Carousel >
            {
                items.map( (item, i) => <CaroselItem key={i} item={item}/> )
            }
        </Carousel>
    )
}

export default ImageCarousel;