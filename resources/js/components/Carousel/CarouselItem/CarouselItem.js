import React from 'react';
import s from '../Carousel.module.scss';
import mainImg from "../../../../assets/img/png/home-main-image.png";
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";

const CarouselItem = ({item, index}) => {
    // console.log('item', item.image);
    const isActive = index === 1 ? 'active' : '';

    return (
        <>
            <div key={index} className={`carousel-item ${isActive} ${s.card}`}>
                <img src={item.image} className={`d-block w-100`} alt="..."/>
                <div className={s.gradient}>
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                    <ButtonPrimary text={item.btnText}/>
                </div>
            </div>
        </>
    );
};

export default CarouselItem;
