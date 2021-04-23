import React from 'react';
import s from './ButtonPrimary.module.scss'

const ButtonPrimary = ({
                           text, width, height = '', zIndex = 'auto',
                           onClickHandle = null,
                            purchase = '',
                           btnUrl = null,
                           btnType = 'button'
                       }) => {
    // console.log(text);
    const w = width ?? '';
    let title = text ? text : 'Primary:Default';

    function handleClick(event) {
        // console.log('click');
        if (onClickHandle) {
            onClickHandle(event);
        }
    }

    return (
        <a
            className={`${s.btnPrimary} ${purchase}`}
            onClick={handleClick}
            style={{maxWidth: w, height, zIndex, borderRadius: "4px"}}
            type={btnType}
            href={btnUrl}
        >
            {title}
        </a>
    );
};

export default ButtonPrimary;
