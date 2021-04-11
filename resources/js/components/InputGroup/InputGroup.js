import React from 'react';
import './InputGroup.scss';

const InputGroup = ({placeHolder}) => {
    const hint = placeHolder ? placeHolder : "Search by name";
    const btnText = window.innerWidth < 480 ?  '' : 'Search';
    const btnWidth = window.innerWidth < 480 ? '' : '100%';
    return (
        <div className="input-group mb-3 custom">
            <input type="text" className={`form-control`} placeholder={hint}
                   aria-label="Recipient's username" aria-describedby="searchByName"/>
                {/*<span className="input-group-text" id="searchByName">search</span>*/}
            <button type="button" className="btn btn-primary" style={{width: btnWidth}}>
                <i className={`icSearch`}/>
                {btnText}
            </button>
        </div>
    );
};

export default InputGroup;
