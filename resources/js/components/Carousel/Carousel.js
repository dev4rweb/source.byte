import React, {useState, useEffect, useCallback} from 'react';
import s from './Carousel.module.scss'
import './carousel.scss'
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import baseImage from '../../../assets/img/png/home-main-image.png';
import {useHttp} from "../../hooks/http.hook";
import Loader from "../Loader/Loader";


const Carousel = () => {
    const [cards, setCards] = useState([
        {
            title: 'Source Byte',
            content: 'Got a game? Need a publisher? What are you waiting for?',
            image: baseImage,
            btnText: 'Visit a site',
            btnUrl: '/'
        },
        {
            title: 'Source Byte',
            content: 'Got a game? Need a publisher? What are you waiting for?',
            image: baseImage,
            btnText: 'Visit a site',
            btnUrl: '/'
        },
        {
            title: 'Source Byte',
            content: 'Got a game? Need a publisher? What are you waiting for?',
            image: baseImage,
            btnText: 'Visit a site',
            btnUrl: '/'
        },
    ]);
    const {loading, request} = useHttp();

    const fetchCarousel = useCallback(async () => {
        try{
            const fetched = await request('/main-carousel');
            console.log(fetched);
            setCards(fetched);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchCarousel();
    }, [fetchCarousel]);

    if (loading) {
        return <Loader/>
    }

    // console.log('Carousel ', data);
    return (
        <div className={s.carousel}>
            <div
                id="mainCarousel"
                className="carousel slide"
                data-touch="true"
                data-bs-ride="carousel"
            >
                <div className={`carousel-indicators ${s.carouselIndicators}`}>
                    {cards && cards.map((item, index) => {

                        return (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#mainCarousel"
                                data-bs-slide-to={`${index}`}
                                className={index === 1 ?"active" : ""}
                                aria-current={index === 1 ? "true" : ""}
                                aria-label={`Slide ${index}`}
                            />
                        )
                    })}
                </div>
                <div className="carousel-inner" role="listbox">

                    {cards && cards.map((item, index) => {
                        const isActive = index === 1 ? 'active' : '';
                        return (
                            <div key={index} className={`carousel-item ${isActive} ${s.card}`}>
                                <img src={item.image} className={`d-block w-100`} alt="..."/>
                                <div className={s.gradient}>
                                    <h1>{item.title}</h1>
                                    <p>{item.content}</p>
                                    <ButtonPrimary text={item.btnText} btnUrl={item.btnUrl}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
