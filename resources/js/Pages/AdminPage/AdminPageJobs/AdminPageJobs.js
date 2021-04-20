import React, {useEffect, useState, useCallback} from 'react';
import axios from "axios";
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";

const AdminPageJobs = () => {
    const [state, setState] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchJobsPage = useCallback(async () => {
        try {
            const fetched = await request('/jobs-page/all');
            console.log(fetched.models[0]);
            setState(fetched.models[0]);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchJobsPage();
    }, [fetchJobsPage]);

    function updateHandler() {
        console.log('updateHandler', state);
        setLoad(true);
        axios.post(`/jobs-page/update/${state.id}`, state)
            .then(res => {
                setLoad(false);
                console.log(res);
                setState(res.data.model)
            })
            .catch(err => {
                setLoad(false);
                console.log(err);
            });
    }

    function changeHandler(e) {
        console.log('changeHandler');
        setState({
            ...state,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    if (loading || load) {
        return <Loader/>
    }

    return (
        <div className="mb-5 mt-5">
            <h2>Jobs page</h2>
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
                        value={state.title ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Description</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="content"
                        value={state.content ?? ''}
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

export default AdminPageJobs;
