import React, {useEffect, useState, useCallback} from 'react';
import axios from "axios";
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";

const AdminPageContacts = () => {
    const [state, setState] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchContacts = useCallback(async () => {
        try{
            const fetched = await request('/contacts/getAll');
            console.log(fetched);
            setState(fetched.model[0]);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchContacts()
    }, [fetchContacts]);

    function updateHandler() {
        console.log('updateHandler', state);
        setLoad(true);
        axios.post(`/contacts/update/${state.id}`, state)
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
        <div className="mb-5 mt-5 container">
            <h1>Contact Page</h1>
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

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Right Title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="rightTitle"
                        value={state.rightTitle ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Email</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={state.email ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Location</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave location here"
                        name="location"
                        value={state.location ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Phone number</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={state.phone ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Address</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave Address here"
                        name="address"
                        value={state.address ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Other text</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave Other text here"
                        name="other"
                        value={state.other ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Copyright</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="copyright"
                        value={state.copyright ?? ''}
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

export default AdminPageContacts;
