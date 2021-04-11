import React from 'react';
import s from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={s.loader}>
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
