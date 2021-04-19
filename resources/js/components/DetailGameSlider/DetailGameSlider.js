import React, {useState, useCallback, useEffect} from 'react';
import './detailGameSlider.scss';
import Loader from "../Loader/Loader";
import axios from "axios";
import SliderItem from "./SliderItem";

const DetailGameSlider = ({pageId = null}) => {
    // console.log('pageId', pageId);
    const [carousel, setCarousel] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchedCarousel = useCallback(() => {
        if (pageId) {
            setLoading(true);
            axios.get(`/game-carousel/${pageId}`)
                .then(res => {
                    setLoading(false);
                    // console.log(res);
                    setCarousel(res.data.models)
                })
                .catch(err => {
                    setLoading(false);
                    console.log(err);
                });
        }
    }, []);

    useEffect(() => {
        fetchedCarousel();
    }, [fetchedCarousel]);

    if (loading) {
        return <Loader/>
    }

    return (
        carousel.length > 0 &&
        <div className="detail-game-slider">
            <div
                id="detailGameSlider"
                className="carousel slide"
                data-touch="true"
                data-bs-ride="carousel"
            >

                <div className="carousel-indicators">
                    {carousel && carousel.map((item, index) => {
                        return (
                            <SliderItem key={index} item={item} index={index} />

                        )
                    })}

                </div>
                <div className="carousel-inner" role="listbox">
                    {carousel && carousel.map((item, index) => {
                        const isActive = index === 1 ? 'active' : '';
                        return(
                            <div
                                key={index}
                                className={`carousel-item ${isActive}`}
                            >
                                <img
                                    src={item.image}
                                    className={`d-block w-100`}
                                    alt="..."/>
                            </div>
                        )
                    })}

                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#detailGameSlider"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#detailGameSlider"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>


            </div>
        </div>
    );
};

export default DetailGameSlider;
