import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";
import CustomInput from "../../../components/CustomInput/CustomInput";

const AdminPageAbout = () => {
    const [state, setState] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchData = useCallback(async () => {
        try {
            const fetched = await request('/aboutPage/show');
            // console.log(fetched);
            setState(fetched.model[0]);
        } catch (e) {
            console.log(e)
        }
    }, [request]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    function changeHandler(e) {
        if (e.currentTarget.name === 'mainImage') {
            setState({
                ...state,
                [e.currentTarget.name]: e.target.files[0]
            })
        } else if (e.currentTarget.name === 'cardOneImage') {
            setState({
                ...state,
                [e.currentTarget.name]: e.target.files[0]
            })
        } else if (e.currentTarget.name === 'cardTwoImage') {
            setState({
                ...state,
                [e.currentTarget.name]: e.target.files[0]
            })
        } else {
            setState({
                ...state,
                [e.currentTarget.name]: e.currentTarget.value
            });
        }
    }

    const submitHandler = async e => {
        setLoad(true);
        e.preventDefault();
        console.log('submitHandler', state);
        const fd = new FormData();
        fd.set('title', state.title);
        fd.set('description', state.description);
        fd.set('mainImage', state.mainImage);
        fd.set('subTitle', state.subTitle);
        fd.set('content', state.content);
        fd.set('cardOneTitle', state.cardOneTitle);
        fd.set('cardOneText', state.cardOneText);
        fd.set('cardOneImage', state.cardOneImage);
        fd.set('cardTwoTitle', state.cardTwoTitle);
        fd.set('cardTwoText', state.cardTwoText);
        fd.set('cardTwoImage', state.cardTwoImage);

        axios.post(`/aboutPage/update/${state.id}`, fd)
            .then(res => {
                setLoad(false);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    if (loading || load) {
        return <Loader/>
    }

    return (
        <div className="container">
            <h1>About Page</h1>
            {state &&
            <div>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={state.title}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>description</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={state.description}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label className="text-light me-3">
                        <h5>Main Image</h5>
                    </label>
                    <CustomInput
                        label={'Upload your Files'} type={'file'}
                        name={'mainImage'}
                        onChangeHandler={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Subtitle</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="subTitle"
                        value={state.subTitle}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="content"
                        value={state.content}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>First card title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="cardOneTitle"
                        value={state.cardOneTitle}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label><h5 className="text-light">First Card Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="cardOneText"
                        value={state.cardOneText}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label className="text-light me-3">
                        <h5>First card Image</h5>
                    </label>
                    <CustomInput
                        label={'Upload your Files'} type={'file'}
                        name={'cardOneImage'}
                        onChangeHandler={changeHandler}
                    />
                </div>


                <div className="mb-3">
                    <label className="text-light">
                        <h5>Second card title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="cardTwoTitle"
                        value={state.cardTwoTitle}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label><h5 className="text-light">Second Card Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="cardTwoText"
                        value={state.cardTwoText}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label className="text-light me-3">
                        <h5>Second card Image</h5>
                    </label>
                    <CustomInput
                        label={'Upload your Files'} type={'file'}
                        name={'cardTwoImage'}
                        onChangeHandler={changeHandler}
                    />
                </div>


                <button
                    className="btn btn-primary"
                    onClick={submitHandler}
                >
                    Change
                </button>
            </div>
            }
        </div>
    );
};

export default AdminPageAbout;
