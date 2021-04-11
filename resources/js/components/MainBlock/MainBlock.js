import React from 'react';
import s from './MainBlock.module.scss'
import bg from "../../../assets/img/png/bg-submit.png";

const MainBlock = ({title, description, mainImage}) => {
    return (
        <section className={s.main}>
            <img src={mainImage ?? bg} alt="bg"/>
            <div className={s.gradient}>
                <h1>{title ?? 'Title'}</h1>
                <p>{description ?? 'description'}</p>
            </div>
        </section>
    );
};

export default MainBlock;
