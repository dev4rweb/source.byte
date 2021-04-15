import React from 'react';
import './GamesCard.scss';
import imgCard from '../../../assets/img/png/games1.png';
import CustomLink from "../CustomLink/CustomLink";

const GamesCard = ({item}) => {
    const image = item.mainImage ?? imgCard;
    const head = item.title ? item.title : 'Default text';
    const content = item.text ? item.text : 'The game of bocce (known also as bowls or bocce ball) is an ancient sport that requires skill, strategy and a little bit of luck ...';
    return (
        <div className="card gameCard">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body flex-column justify-content-start">
                <h5>{head}</h5>
                <p className="card-text">{content.slice(0, 200) + '...'}</p>
                <CustomLink
                    text={`View more`}
                    link={`/games/${item.id}`}
                />
            </div>
        </div>
    );
};

export default GamesCard;
