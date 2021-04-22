import React, {useEffect, useState, useCallback} from 'react';
import axios from "axios";
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";

const FooterLinks = () => {
    const [state, setState] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchLinks = useCallback(async () => {
        try{
            const fetched = await request('/footer-links');
            // console.log(fetched);
            setState(fetched.model[0]);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks]);


    function updateHandler() {
        // console.log('updateHandler', state);
        setLoad(true);
        axios.post(`/footer-links/update/${state.id}`, state)
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
            <h1>Footer Links</h1>
            {state &&
            <div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Steam Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="steam"
                        value={state.steam ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>XBox Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="xBox"
                        value={state.xBox ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Playstation Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="playstation"
                        value={state.playstation ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Twitch Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="twitch"
                        value={state.twitch ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Microsoft Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="microsoft"
                        value={state.microsoft ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Viveport Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="viveport"
                        value={state.viveport ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Nintendo Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="nintendo"
                        value={state.nintendo ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Oculus Quest Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="oculus"
                        value={state.oculus ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>GOG Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="gog"
                        value={state.gog ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Epic Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="epic"
                        value={state.epic ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Itch.io Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="itch"
                        value={state.itch ?? ''}
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

export default FooterLinks;
