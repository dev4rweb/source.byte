import React, {useEffect, useState, useCallback} from 'react';
import axios from "axios";
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";

const AdminPagePress = () => {
    const [state, setState] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchPress = useCallback(async () => {
        try {
            const fetched = await request('/press/getAll');
            // console.log(fetched);
            setState(fetched.model[0]);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchPress()
    }, [fetchPress]);

    function updateHandler() {
        // console.log('updateHandler', state);
        setLoad(true);
        axios.post(`/press/update/${state.id}`, state)
            .then(res => {
                setLoad(false);
                // console.log(res);
                setState(res.data.model)
            })
            .catch(err => {
                setLoad(false);
                console.log(err);
            });
    }

    function changeHandler(e) {
        // console.log('changeHandler');
        setState({
            ...state,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    if (loading || load) {
        return <Loader/>
    }
    return (
        <div className="mb-5 mt-5 container">
            <h1>Press Page</h1>

            {state &&
            <div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Youtube Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="ytLink"
                        value={state.ytLink ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Youtube Button Text</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="ytBtnText"
                        value={state.ytBtnText ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Youtube button Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="ytBtnLink"
                        value={state.ytBtnLink ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Games Block Title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="gameTitle"
                        value={state.gameTitle ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Games Block Text</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="gameText"
                        value={state.gameText ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Games Block Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="gameLink"
                        value={state.gameLink ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={state.title ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Subtitle left size</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="subTitleLeft"
                        value={state.subTitleLeft ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Subtitle right size</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="subTitleRight"
                        value={state.subTitleRight ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Left Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave left content here"
                        name="contentLeft"
                        value={state.contentLeft ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Right Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave right content here"
                        name="contentRight"
                        value={state.contentRight ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Team block title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="teamTitle"
                        value={state.teamTitle ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Additional left title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="addSubTitleLeft"
                        value={state.addSubTitleLeft ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Additional right title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="addSubTitleRight"
                        value={state.addSubTitleRight ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Additional Left content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave Left content here"
                        name="addContentLeft"
                        value={state.addContentLeft ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Additional Right content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave Right content here"
                        name="addContentRight"
                        value={state.addContentRight ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Submit your game</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="addBtnLink"
                        value={state.addBtnLink ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <button
                    className="btn btn-primary"
                    onClick={updateHandler}
                >
                    Change
                </button>

            </div>
            }

        </div>
    );
};

export default AdminPagePress;
