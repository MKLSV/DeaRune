import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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
                    {/* {reviews.map(review => <img key={review} src={review} />)} */}
                        <img src="https://res.cloudinary.com/dvb3zhsvh/image/upload/v1680554993/2_oguv0u.png" alt="" />
                        <img src="https://res.cloudinary.com/dvb3zhsvh/image/upload/v1680554987/1_vsgvti.png" alt="" />
                        <img src="https://res.cloudinary.com/dvb3zhsvh/image/upload/v1680554983/3_vrcsko.png" alt="" />
                </Carousel>
                <Sale />
            </div>
        </div>
    )
}