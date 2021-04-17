import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import GamePurchaseItem from "./GamePurchaseItem/GamePurchaseItem";
import Loader from "../../../components/Loader/Loader";

const GamesPurchase = () => {
    const [games, setGames] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchPurchase = useCallback(() => {
        setLoading(true);
        axios.get('/games-all')
            .then(res => {
                setLoading(false);
                // console.log(res);
                setGames(res.data.models);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }, []);

    useEffect(() => {
        fetchPurchase();
    }, [fetchPurchase]);

    if (loading) {
        return <Loader/>
    }
    return (
        <div className="me-5">
            {games && games.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="mt-5 mb-5 container border border-white border-3 p-5"
                    >
                       <h2>{item.title}</h2>
                        <GamePurchaseItem gameId={item.id}/>
                    </div>
                )
            })}
        </div>
    );
};

export default GamesPurchase;
