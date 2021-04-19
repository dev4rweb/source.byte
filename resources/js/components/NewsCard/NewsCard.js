import React from 'react';
import s from './NewsCard.module.scss'
import defImg from '../../../assets/img/png/logo-246-280.png';
import CustomLink from "../CustomLink/CustomLink";

const NewsCard = ({item}) => {
    let image = item.mainImage ? item.mainImage : defImg;
    let head = item.title ? item.title : 'title';
    let text = item.content ? item.content : 'content';

    return (
        <div
            className={`card ${s.card}`}
        >
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{head}</h5>
                    <p className="card-text">{text.slice(0, 150) + '...'}</p>
                    <CustomLink
                        link={`/news/${item.id}`}
                    />
                </div>
        </div>
    );
};

export default NewsCard;
