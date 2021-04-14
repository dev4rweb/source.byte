import React, {useState, useCallback, useEffect} from 'react';
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";
import GamesItem from "./GamesItem/GamesItem";
import GameForm from "./GameForm/GameForm";
import axios from "axios";

const AdminPageGames = () => {
    const [state, setState] = useState(null);
    const [card, setCard] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchGames = useCallback(async () => {
        try {
            const fetched = await request('/games-all');
            // console.log(fetched);
            setState(fetched.models);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchGames()
    }, [fetchGames]);


    function editHandler(card) {
        // console.log('editHandler', card);
        setCard(card);
    }

    async function deleteHandler(item) {
        // console.log('deleteHandler', item);
        setLoad(true);
        axios.delete(`/game/destroy/${item.id}`)
            .then(res => {
                setLoad(false);
                // console.log(res);
                setState(res.data.models);
            })
            .catch(err => {
                setLoad(false);
                console.log(err);
            });
    }

    function createHandler(item) {
        // console.log('createHandler', item);
        setLoad(true);
        const fd = new FormData();
        for (let key in item) {
            fd.set(key, item[key]);
        }

        axios.post('/game-store', fd)
            .then(res => {
                setLoad(false);
                // console.log(res);
                setState(res.data.models);
            })
            .catch(err => {
                setLoad(false);
                console.log(err);
            });
    }

    function updateHandler(item) {
        // console.log('updateHandler', item);
        setLoad(true);
        setCard(null);
        const fd = new FormData();
        for (let key in item) {
            fd.set(key, item[key]);
        }

        axios.post(`/game/update/${item.id}`, fd)
            .then(res => {
                setLoad(false);
                // console.log(res);
                setState(res.data.models);
            })
            .catch(err => {
                setLoad(false);
                console.log(err);
            });
    }

    if (loading || load) {
        return <Loader/>;
    }

    if (!state) {
        return <h1>No Games</h1>;
    }

    return (
        <div className="container">
            <h1 className="mt-3 mb-3">Games</h1>
            <table className="table text-light">
                <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                    <th scope="col">Image</th>
                    <th scope="col">edit</th>
                    <th scope="col">delete</th>
                </tr>
                </thead>
                <tbody>

                {!loading && !load && state && state.map((item, index) => {
                    return (
                        <GamesItem
                            key={index}
                            item={item}
                            index={index}
                            editHandler={editHandler}
                            deleteHandler={deleteHandler}
                        />
                    )
                })}

                </tbody>
            </table>

            {card && <GameForm card={card} updateHandler={updateHandler}/>}
            {!card && <GameForm createHandler={createHandler}/>}
        </div>
    );
};

export default AdminPageGames;
