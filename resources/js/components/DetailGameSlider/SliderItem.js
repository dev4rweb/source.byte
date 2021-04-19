import React from 'react';

const SliderItem = ({item, index}) => {

    return (
        <div
            className={`indicator`}
        >
            <button
                type="button"
                data-bs-target="#detailGameSlider"
                data-bs-slide-to={`${index}`}
                className={index === 1 ? 'active' : ''}
                aria-current={index === 1 ? 'true' : ''}
                aria-label={`Slide ${index}`}
            >
            </button>
            <img src={item.image} alt=""/>
        </div>
    );
};

export default SliderItem;
