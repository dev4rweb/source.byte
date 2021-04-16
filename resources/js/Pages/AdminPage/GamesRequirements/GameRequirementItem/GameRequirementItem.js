import React, {useEffect, useCallback, useState} from 'react';
import Loader from "../../../../components/Loader/Loader";
import axios from "axios";

const GameRequirementItem = ({gameId}) => {
    const [minRequirements, setMinRequirements] = useState(null);
    const [maxRequirements, setMaxRequirements] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchRequirements = useCallback(() => {
        if (gameId) {
            setLoading(true);
            axios.get(`/games-requirements/${gameId}`)
                .then(res => {
                    setLoading(false);
                    // console.log(res);
                    setMinRequirements(res.data.model[0]);
                    setMaxRequirements(res.data.model[1]);
                })
                .catch(err => {
                    setLoading(false);
                    console.log(err);
                });
        }

    }, [gameId]);

    useEffect(() => {
        fetchRequirements()
    }, [fetchRequirements]);

    if (loading || !gameId) {
        return <Loader/>
    }

    function minChangeHandler(e) {
        // console.log('minChangeHandler');
        setMinRequirements({
            ...minRequirements,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    function minSubmitHandler(e) {
        // console.log('minSubmitHandler');
        e.preventDefault();
        setLoading(true);
        const fd = new FormData();
        for (let key in minRequirements) {
            fd.set(key, minRequirements[key]);
        }
        axios.post(`/games-requirements-update/${minRequirements.id}`, fd)
            .then(res => {
                setLoading(false);
                // setMinRequirements(res.data.model);
                console.log(res);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }

    function maxChangeHandler(e) {
        // console.log('maxChangeHandler');
        setMaxRequirements({
            ...maxRequirements,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    function maxSubmitHandler(e) {
        // console.log('maxSubmitHandler');
        setLoading(true);
        e.preventDefault();
        const fd = new FormData();
        for (let key in maxRequirements) {
            fd.set(key, maxRequirements[key]);
        }
        axios.post(`/games-requirements-update/${maxRequirements.id}`, maxRequirements)
            .then(res => {
                setLoading(false);
                // setMaxRequirements(res.data.model);
                console.log(res);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }

    return (
        <div className="container mb-5">
            {minRequirements &&
            <div className="mb-5 container border border-warning border-3 p-3">
                <h3 className="text-warning">Minimal System Requirements</h3>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>OS</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="OS"
                        value={minRequirements.OS}
                        onChange={minChangeHandler}
                    />
                </div>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>Processor</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="processor"
                        value={minRequirements.processor}
                        onChange={minChangeHandler}
                    />
                </div>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>Memory</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="memory"
                        value={minRequirements.memory}
                        onChange={minChangeHandler}
                    />
                </div>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>Graphics</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="graphics"
                        value={minRequirements.graphics}
                        onChange={minChangeHandler}
                    />
                </div>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>DirectX</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="directX"
                        value={minRequirements.directX}
                        onChange={minChangeHandler}
                    />
                </div>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>Storage</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="storage"
                        value={minRequirements.storage}
                        onChange={minChangeHandler}
                    />
                </div>
                <button
                    className="btn btn-primary w-50"
                    onClick={minSubmitHandler}
                >
                    Edit
                </button>
            </div>
            }
            {maxRequirements &&
            <div className="mb-5 container  border border-success border-3 p-3">
                <h3 className="text-success">Recommended System Requirements</h3>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>OS</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="OS"
                        value={maxRequirements.OS}
                        onChange={maxChangeHandler}
                    />
                </div>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>Processor</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="processor"
                        value={maxRequirements.processor}
                        onChange={maxChangeHandler}
                    />
                </div>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>Memory</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="memory"
                        value={maxRequirements.memory}
                        onChange={maxChangeHandler}
                    />
                </div>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>Graphics</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="graphics"
                        value={maxRequirements.graphics}
                        onChange={maxChangeHandler}
                    />
                </div>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>DirectX</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="directX"
                        value={maxRequirements.directX}
                        onChange={maxChangeHandler}
                    />
                </div>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>Storage</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="storage"
                        value={maxRequirements.storage}
                        onChange={maxChangeHandler}
                    />
                </div>
                <button
                    className="btn btn-primary w-50"
                    onClick={maxSubmitHandler}
                >
                    Edit
                </button>
            </div>
            }
        </div>
    );
};

export default GameRequirementItem;
