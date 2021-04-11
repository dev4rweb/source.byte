import React from 'react';
import s from './ButtonSecondary.module.scss'

const ButtonSecondary = ({
                             text, maxWidth = '', height = '', uploadFile = null,
                             btnUrl = null
                         }) => {

    // console.log(text);
    let title = text ? text : 'Primary:Default';

    function handleClick() {
        if (uploadFile) {
            // console.log('click');
            uploadFile();
        }
    }

    if (btnUrl) {
        return (
            <a
                className={s.btnSecondary}
                style={{maxWidth, height}}
                onClick={(event) => handleClick(event)}
                href={btnUrl}
            >
                {title}
            </a>
        )
    }

    return (
        <button
            className={s.btnSecondary}
            style={{maxWidth, height}}
            onClick={(event) => handleClick(event)}
        >
            {title}
        </button>
    );
};

export default ButtonSecondary;
