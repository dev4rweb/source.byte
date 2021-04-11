import React from 'react';
import s from './TeamCard.module.scss'
import defImg from '../../../../assets/img/team/1.png'

const TeamCard = ({item}) => {

    return (
        <div className={`card ${s.teamCard}`}>
            <div className={s.imgWrapper}>
                <img src={item.photo ?? defImg} className="card-img-top" alt="team"/>
                <div className={s.gradient}/>
            </div>
            <div className="card-body">
                <h5>{item.name ?? 'Name'}</h5>
                <p className="card-text">{item.pos ?? 'Position'}</p>
            </div>
        </div>
    );
};

export default TeamCard;
