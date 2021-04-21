import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";
import SubmitGameItem from "./SubmitGameItem";

const AdminPageSubmit = () => {
    const [state, setState] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchSubGames = useCallback(async () => {
        try{
            const fetched = await request('/submit-game-form');
            // console.log(fetched);
            setState(fetched.models);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchSubGames()
    }, [fetchSubGames]);

    async function deleteHandler(item) {
        setLoad(true);
        axios.delete(`/submit-game-form/destroy/${item.id}`)
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

    if (!state) {
        return <h1>No Submit Games</h1>;
    }

    if (loading || load) {
        return <Loader/>
    }

    return (
        <div className="container mb-5 mt-3">
            <h1>Submit Games ({state.length})</h1>

            {state && state.map((item, index) => {
                return (
                    <SubmitGameItem
                        key={index}
                        item={item}
                        deleteHandler={deleteHandler}
                    />
                )
            })}
        </div>
    );
};

export default AdminPageSubmit;
