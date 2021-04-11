import React from 'react';
import s from './UnderLine.module.scss'
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const UnderLine = ({
                       text = 'text', btnText = 'Visit a Site',
                       btnUrl = null
                   }) => {
    return (
        <div className={s.underLine}>
            <p>{text}</p>
            <ButtonPrimary
                text={btnText}
                btnUrl={btnUrl}
            />
        </div>
    );
};

export default UnderLine;
