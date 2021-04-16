import React, {useState, useEffect, useCallback} from 'react';
import Loader from "../../../components/Loader/Loader";
import axios from "axios";
import GameRequirementItem from "./GameRequirementItem/GameRequirementItem";

const GamesRequirements = () => {
    const [games, setGames] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchGames = useCallback( () => {
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
        fetchGames()
    }, [fetchGames]);

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="me-5">
            {games && games.map((item, index) => {
                return (
                    <div key={index}
                         className="mt-5 mb-5 container border border-white border-3 p-5"
                    >
                        <h2>{item.title}</h2>
                        <GameRequirementItem gameId={item.id} />
                    </div>
                )
            })}
        </div>
    );
};

export default GamesRequirements;
