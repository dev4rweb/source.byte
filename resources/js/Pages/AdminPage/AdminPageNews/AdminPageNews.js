import React, {useEffect, useState, useCallback} from 'react';
import axios from "axios";
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";
import NewsItem from "./NewsItem/NewsItem";
import NewsForm from "./NewsForm/NewsForm";

const AdminPageNews = () => {
    const [state, setState] = useState(null);
    const [card, setCard] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchNews = useCallback(async () => {
        try{
            const fetched = await request('/news-all');
            // console.log(fetched);
            setState(fetched.models);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchNews()
    }, [fetchNews]);

    function editHandler(card) {
        // console.log('editHandler', card);
        setCard(card);
    }

    async function deleteHandler(item) {
        // console.log('deleteHandler', item);
        setLoad(true);
        axios.delete(`/news/destroy/${item.id}`)
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

        axios.post('/news-store', fd)
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

        axios.post(`/news/update/${item.id}`, fd)
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
        return <h1>No News</h1>;
    }

    if (loading || load) {
        return <Loader/>
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
                        <NewsItem
                            key={index}
                            item={item}
                            index={index}
                            editHandler={editHandler}
                            deleteHandler={deleteHandler}
                        />
                    );
                })}

                </tbody>
            </table>

            {card && <NewsForm card={card} updateHandler={updateHandler}/>}
            {!card && <NewsForm createHandler={createHandler}/>}

        </div>
    );
};

export default AdminPageNews;
