import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import review1 from '../assets/imgs/1.png'
import review2 from '../assets/imgs/2.png'
import review3 from '../assets/imgs/3.png'
import { Sale } from "../cmps/sale";

const responsive = {
    desktop: {
        breakpoint: { max: 5000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export function Reviews() {

    const reviews = [review1, review2, review3]

    return (
        <div className="rewies-page">
            <div className="title">
                <h1>Отзывы о разборах</h1>
                <h2>Клиенты делятся опытом</h2>
            </div>
            <div className="rewies-container">
                <Carousel className="carousel"
                    responsive={responsive} infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}>
                    {reviews.map(review => <img key={review} src={review} />)}
                </Carousel>
                <Sale />
            </div>
        </div>
    )
}