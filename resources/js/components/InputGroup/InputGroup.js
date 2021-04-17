import React, {useState} from 'react';
import './InputGroup.scss';

const InputGroup = ({placeHolder, filterHandler = null}) => {
    const [state, setState] = useState({
        search: ''
    });
    const hint = placeHolder ? placeHolder : "Search by name";
    const btnText = window.innerWidth < 480 ?  '' : 'Search';
    const btnWidth = window.innerWidth < 480 ? '' : '100%';

    function changeHandler(e) {
        setState({
            ...state,
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    function searchHandler(e) {
        if (filterHandler) {
            // console.log(state);
            filterHandler(state.search);
        }
    }

    return (
        <div className="input-group mb-3 custom">
            <input
                type="text"
                className={`form-control`}
                placeholder={hint}
                aria-label="Recipient's username"
                name="search"
                value={state.search}
                onChange={changeHandler}
                aria-describedby="searchByName"/>
            {/*<span className="input-group-text" id="searchByName">search</span>*/}
            <button
                type="button"
                className="btn btn-primary"
                style={{width: btnWidth}}
                onClick={searchHandler}
            >
                <i className={`icSearch`}/>
                {btnText}
            </button>
        </div>
    );
};

export default InputGroup;
