import React, {useState, useEffect, useCallback} from 'react';
import '../MultiCarousel/multiCarousel.scss'
import axios from "axios";
import Loader from "../Loader/Loader";
import {InertiaLink} from "@inertiajs/inertia-react";

const MCarousel = () => {
    const showItems = 4;
    const step = 1;
    const interval = 0;
    const activeFirsrtIndex = 0;
    const [state, setState] = useState(null);
    const [translateIndexList, setTranslateIndexList] = useState([]);
    const [loading, setLoading] = useState(false);
    const activeIndexs = [];

    const fetchGames = useCallback(() => {
        setLoading(true);
        axios.get('/games-all')
            .then(res => {
                setLoading(false);
                console.log(res);
                setState(res.data.models);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        fetchGames();
    }, [fetchGames]);

    function getClassName(index) {
        return "div-item";
    }

    function next() {
        updateTranslates(-step);
    }

    function prev() {
        updateTranslates(step);
    }

    function updateTranslates(step) {
        //  4
        let len = state.length / 3;
        //
        setTranslateIndexList( translateIndexList.map(index => {
            let i = index + step;
            //  -4
            if (i < -len) {
                // 7
                return len + len - 1;
                // 7
            } else if (i > len + len - 1) {
                // -4
                return -len;
            } else {
                return i;
            }
        }));
        // console.log("debug translateIndexList sadsada", translateIndexList);
        setTranslateIndexList(translateIndexList)
    }

    function getTranslateX(index) {
        let x = translateIndexList[index] * 330 + "px";
        let v = translateIndexList[index];
        if (v < 0 || v > showItems - 1) {
            return {
                left: x,
                opacity: 0
            };
        } else {
            return {
                left: x,
                transition: "all ease-in-out 0.4s"
            };
        }
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <div>
            {state &&
                <div>
                    <div className="m-carousel-wrapper">
                        <button className="m-arrow m-next" onClick={next}><i className={`icArrowRight`}/></button>
                        <button className="m-arrow m-prev" onClick={prev}><i className={`icArrowLeft`}/></button>
                        <div className="multiCarousel">
                            {state.map((img, i) => (
                                <InertiaLink
                                    // href={route("gameId.index").url()}
                                    className={getClassName(i)}
                                    style={getTranslateX(i)}
                                    key={i}
                                >
                                    <img className="img-item" alt={i} src={img.mainImage} />
                                    <p className="cart-title">{img.title}</p>
                                </InertiaLink>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default MCarousel;
