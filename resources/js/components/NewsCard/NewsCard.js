import React from 'react';
import s from './NewsCard.module.scss'
import defImg from '../../../assets/img/png/logo-246-280.png';
import CustomLink from "../CustomLink/CustomLink";

const NewsCard = ({img, title, content}) => {
    let image = img ? img : defImg;
    let head = title ? title : 'title';
    let text = content ? content : 'content';
    const newsHandler = () => {

    };
    return (
        <div
            className={`card ${s.card}`}
            onClick={newsHandler}
        >
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{head}</h5>
                    <p className="card-text">{text}</p>
                    <CustomLink
                        link={`/news/newsId`}
                    />
                </div>
        </div>
    );
};

export default NewsCard;
