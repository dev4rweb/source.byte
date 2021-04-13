import React, {useState} from 'react';
import axios from "axios";
import Loader from "../../../../components/Loader/Loader";

const HomePageForm = ({form}) => {
    const [state, setState] = useState(form);
    const [loading, setLoading] = useState(false);

    function changeHandler(e) {
        // console.log('changeHandler', state);
        setState({
            ...state,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const submitHandler = async event => {
        setLoading(true);
        event.preventDefault();
        // console.log('submitHandler');
        axios.post('/homePage/update', state)
            .then(res => {
                setLoading(false);
                // console.log(res);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            })
    };

    return (
        <div className={`m-5`}>
            {loading && <Loader/>}
            <div className="mb-3">
                <label
                    className="form-label"
                >
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="title"
                    aria-describedby="titleHelp"
                    value={state.title}
                    onChange={changeHandler}
                />
            </div>
            <div className="mb-3">
                <label
                    className="form-label"
                >
                    Content
                </label>
                <textarea
                    className="form-control"
                    name="content"
                    aria-describedby="titleHelp"
                    value={state.content || ''}
                    onChange={changeHandler}
                />
            </div>
            <div className="mb-3">
                <label
                    className="form-label"
                >
                    Underline Text
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="underText"
                    aria-describedby="titleHelp"
                    value={state.underText}
                    onChange={changeHandler}
                />
            </div>
            <div className="mb-3">
                <label
                    className="form-label"
                >
                    Button text
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="btnText"
                    aria-describedby="titleHelp"
                    value={state.btnText}
                    onChange={changeHandler}
                />
            </div>
            <div className="mb-3">
                <label
                    className="form-label"
                >
                    Button url
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="btnUrl"
                    aria-describedby="titleHelp"
                    value={state.btnUrl}
                    onChange={changeHandler}
                />
            </div>
            <button
                className="btn btn-primary"
                onClick={submitHandler}
            >
                Change
            </button>
        </div>
    );
};

export default HomePageForm;
