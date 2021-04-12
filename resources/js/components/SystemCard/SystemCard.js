import React from 'react';
import s from './SystemCard.module.scss'

const SystemCard = ({title, isMarked}) => {
    const t = title ?? 'Minimum';
    const mark = isMarked ? s.marked : '';

    return (
        <div className={`${s.wrapper} ${mark}`}>
            <div className={`${s.systemCard} ${mark}`}>
                <h6 className={mark}>{t}</h6>
                <hr/>
                <ul className={s.content}>
                    <li><p>OS:</p><p>Windows 7</p></li>
                    <li><p>Processor:</p><p>Core i5-4590 (AMD FX 8350)</p></li>
                    <li><p>Memory:</p><p>4 GB RAM</p></li>
                    <li><p>Graphics:</p><p>NVIDIA GeForce GTX 970 or AMD RX480</p></li>
                    <li><p>DirectX:</p><p>Version 11</p></li>
                    <li><p>Storage:</p><p>1 GB available space</p></li>
                </ul>
            </div>
        </div>
    );
};

export default SystemCard;