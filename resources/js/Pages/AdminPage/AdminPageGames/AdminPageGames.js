import React, {useState, useCallback, useEffect} from 'react';
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";
import GamesItem from "./GamesItem/GamesItem";

const AdminPageGames = () => {
    const [state, setState] = useState(null);
    const [card, setCard] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchGames = useCallback(async () => {
        try {
            const fetched = await request('/gamesAll');
            console.log(fetched);
            setState(fetched.games);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchGames()
    }, [fetchGames]);

    function editHandler(card) {
        console.log('editHandler', card);
    }

    async function deleteHandler(item) {
        console.log('deleteHandler', item);
    }

    function createHandler(item) {
        console.log('createHandler', item);
    }

    function updateHandler(item) {
        console.log('updateHandler', item);
    }

    if (loading || load) {
        return <Loader/>;
    }

    if (!state) {
        return <h1>No Games</h1>;
    }

    return (
        <div className="container">
            <h1 className="mt-3 mb-3">Our Team</h1>
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
        </div>
    );
};

export default AdminPageGames;
