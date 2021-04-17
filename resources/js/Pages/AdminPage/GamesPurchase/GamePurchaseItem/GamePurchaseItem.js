import React, {useState, useCallback, useEffect} from 'react';
import axios from "axios";
import Loader from "../../../../components/Loader/Loader";

const GamePurchaseItem = ({gameId}) => {
    const [purchase, setPurchase] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchPurchase = useCallback(() => {
        if (gameId) {
            setLoading(true);
            axios.get(`/game-purchase/${gameId}`)
                .then(res => {
                    setLoading(false);
                    // console.log(res);
                    setPurchase(res.data.model[0]);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [gameId]);

    useEffect(() => {
        fetchPurchase()
    }, [fetchPurchase]);

    function changeHandler(e, cbx = false) {
        if (cbx) {
            setPurchase({
                ...purchase,
                [e.currentTarget.name]: e.currentTarget.checked
            })
        } else {
            setPurchase({
                ...purchase,
                [e.currentTarget.name]: e.currentTarget.value
            })
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        // console.log('submitHandler', purchase);
        setLoading(true);
        axios.post(`/game-purchase-update/${purchase.id}`, purchase)
            .then(res => {
                setLoading(false);
                // console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    if (loading) {
        return <Loader/>
    }
    return (
        <div className="mb-5 container border border-warning border-3 p-3">
            {purchase &&
            <div>
                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>Price</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="price"
                        value={purchase.price}
                        onChange={changeHandler}
                    />
                </div>
                <h3>Platforms</h3>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="xBox"
                        checked={purchase.xBox}
                        onChange={event => changeHandler(event, true)}
                    />
                    <label className="form-check-label text-light">
                        X Box
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="ps"
                        checked={purchase.ps}
                        onChange={event => changeHandler(event, true)}
                    />
                    <label className="form-check-label text-light">
                        PlayStation
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="microsoft"
                        checked={purchase.microsoft}
                        onChange={event => changeHandler(event, true)}
                    />
                    <label className="form-check-label text-light">
                        Microsoft
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="steam"
                        checked={purchase.steam}
                        onChange={event => changeHandler(event, true)}
                    />
                    <label className="form-check-label text-light">
                        Steam
                    </label>
                </div>


                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>Released</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="released"
                        value={purchase.released}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>Publisher</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="publisher"
                        value={purchase.publisher}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>Rating</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="rating"
                        value={purchase.rating}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3 container">
                    <label className="text-light">
                        <h6>File Size</h6>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="fileSize"
                        value={purchase.fileSize}
                        onChange={changeHandler}
                    />
                </div>

                <button
                    className="btn btn-primary w-50"
                    onClick={submitHandler}
                >
                    Change
                </button>

            </div>
            }
        </div>
    );
};

export default GamePurchaseItem;
