import React, {useState, useEffect, useCallback} from 'react';
import s from "../SecondCarousel/SecondCarousel.module.scss";
import '../Carousel/carousel.scss'
import mainImg from "../../../assets/img/png/simulator.png";
import imgTwo from "../../../assets/img/png/interactive-two.png";
import imgThree from "../../../assets/img/png/interactive-three.png";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import {useHttp} from "../../hooks/http.hook";
import Loader from "../Loader/Loader";

const SecondCarousel = () => {
    const [state, setState] = useState([
        {
            id: 1,
            title: 'Source Byte',
            content: 'It was a nice calm day, but from here out of nowhere Princess is kidnapped from the Kingdom, you get a secret mission to save her! Challenge yourself in several quests …',
            image: mainImg,
            btnText: 'View more',
            btnUrl: '/'
        },
        {
            id: 2,
            title: 'Source Byte',
            content: 'Supfly Delivery Simulator - a game in which humanity is ruled by delivery service and now it\'s your time to become the best delivery man in the world!',
            image: imgTwo,
            btnText: 'View more',
            btnUrl: '/'
        },
        {
            id: 3,
            title: 'Time For Quest',
            content: 'Let\'s go for unforgettable journey! Experience amazing moments in the Time For Quest universe! Sail the sea! Fight the biggest beasts in the world! Gain new skills!',
            image: imgThree,
            btnText: 'View more',
            btnUrl: '/'
        },
    ]);
    const {request, loading} = useHttp();

    const getCarousel = useCallback(async () => {
        try {
            const fetched = await request('/secondCarousel');
            // console.log(fetched);
            setState(fetched);
        } catch (e) {

        }
    }, [request]);

    useEffect(() => {
        getCarousel()
    }, [getCarousel]);

    if (loading) {
        return <Loader/>
    }

    return (
        <div className={s.carousel}>
            <div
                id="secondCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-touch="true"
            >
                <div className={`carousel-indicators ${s.carouselIndicators}`}>
                    {state && state.map((item, index) => {
                        return (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#secondCarousel"
                                data-bs-slide-to={`${index}`}
                                className={index === 1 ? 'active' : ''}
                                aria-current={index === 1 ? 'true' : ''}
                                aria-label={`Slide ${index}`}
                            />
                        )
                    })}
                </div>
                <div className="carousel-inner" role="listbox">

                    {state && state.map((item, index) => {
                        const isActive = index === 1 ? 'active' : '';
                        return (
                            <div key={index} className={`carousel-item ${isActive}`}>
                                <div className={s.secondCart}>
                                    <img src={item.image} className={`d-block w-100`} alt="..."/>
                                    <div className={s.content}>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                        <ButtonSecondary
                                            text={item.btnText}
                                            btnUrl={item.btnUrl}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#secondCarousel"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#secondCarousel"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default SecondCarousel;
