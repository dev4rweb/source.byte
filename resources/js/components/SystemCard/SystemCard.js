import React from 'react';
import s from './SystemCard.module.scss'

const SystemCard = ({title, isMarked, item}) => {
    const t = title ?? 'Minimum';
    const mark = isMarked ? s.marked : '';
    // console.log('SystemCard', item);
    return (
        <div className={`${s.wrapper} ${mark}`}>
            <div className={`${s.systemCard} ${mark}`}>
                <h6 className={mark}>{t}</h6>
                <hr/>
                {item &&
                <ul className={s.content}>
                    <li><p>OS:</p><p>{item.OS}</p></li>
                    <li><p>Processor:</p><p>{item.processor}</p></li>
                    <li><p>Memory:</p><p>{item.memory}</p></li>
                    <li><p>Graphics:</p><p>{item.graphics}</p></li>
                    <li><p>DirectX:</p><p>{item.directX}</p></li>
                    <li><p>Storage:</p><p>{item.storage}</p></li>
                </ul>
                }
            </div>
        </div>
    );
};

export default SystemCard;
