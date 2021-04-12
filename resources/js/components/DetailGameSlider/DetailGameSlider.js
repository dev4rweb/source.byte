import React from 'react';
import './detailGameSlider.scss'
import mainImg from "../../../assets/img/png/simulator.png";
import imgSlide from "../../../assets/img/png/game-detail-slider-1.png"

const DetailGameSlider = () => {
    return (
        <div className="detail-game-slider">
            <div
                id="detailGameSlider"
                className="carousel slide"
                data-touch="true"
                data-bs-ride="carousel"
            >

                <div className="carousel-indicators">
                    <div className="indicator">
                        <img src={imgSlide} alt=""/>
                        <button type="button" data-bs-target="#detailGameSlider" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1">
                        </button>
                    </div>
                    <div className="indicator">
                        <img src={imgSlide} alt=""/>
                        <button type="button" data-bs-target="#detailGameSlider" data-bs-slide-to="1"
                                aria-label="Slide 2"/>
                    </div>
                    <div className="indicator">
                        <img src={imgSlide} alt=""/>
                        <button type="button" data-bs-target="#detailGameSlider" data-bs-slide-to="2"
                                aria-label="Slide 3"/>
                    </div>
                    <div className="indicator">
                        <img src={imgSlide} alt=""/>
                        <button type="button" data-bs-target="#detailGameSlider" data-bs-slide-to="3"
                                aria-label="Slide 4"/>
                    </div>
                    <div className="indicator">
                        <img src={imgSlide} alt=""/>
                        <button type="button" data-bs-target="#detailGameSlider" data-bs-slide-to="4"
                                aria-label="Slide 5"/>
                    </div>
                </div>


                <div className="carousel-inner" role="listbox">
                    <div className={`carousel-item active`}>
                        <img src={mainImg} className={`d-block w-100`} alt="..."/>
                    </div>
                    <div className={`carousel-item`}>
                        <img src={mainImg} className={`d-block w-100`} alt="..."/>
                    </div>
                    <div className={`carousel-item`}>
                        <img src={mainImg} className={`d-block w-100`} alt="..."/>
                    </div>
                    <div className={`carousel-item`}>
                        <img src={mainImg} className={`d-block w-100`} alt="..."/>
                    </div>
                    <div className={`carousel-item`}>
                        <img src={mainImg} className={`d-block w-100`} alt="..."/>
                    </div>
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
