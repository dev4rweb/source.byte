import React, {useEffect, useCallback, useState} from 'react';
import {useHttp} from "../../../hooks/http.hook";
import axios from "axios";
import Loader from "../../../components/Loader/Loader";
import TeamItem from "./TeamItem/TeamItem";
import TeamForm from "./TeamForm/TeamForm";

const AdminPageOurTeam = () => {
    const [state, setState] = useState(null);
    const [card, setCard] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchData = useCallback(async () => {
        try {
            const fetched = await request('/ourTeam');
            setState(fetched.models);
            // console.log(fetched);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    function editHandler(card) {
        // console.log('editHandler', card);
        setCard(card);
    }

    async function deleteHandler(item) {
        // console.log('deleteHandler', item)
        setLoad(true);
        axios.delete(`/ourTeam/destroy/${item.id}`)
            .then(res => {
                setLoad(false);
                console.log(res);
                setState(res.data.models)
            })
            .catch(err => {
                setLoad(false);
                console.log(err);
            });
    }

    function createHandler(item) {
        setLoad(true);
        // console.log('createHandler', item);
        const fd = new FormData();
        fd.set('name', item.name);
        fd.set('pos', item.pos);
        fd.set('photo', item.photo);

        axios.post('/ourTeam/store', fd)
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
        setLoad(true);
        // console.log('updateHandler', item);
        setCard(null);
        const fd = new FormData();
        fd.set('name', item.name);
        fd.set('pos', item.pos);
        fd.set('photo', item.photo);

        axios.post(`/ourTeam/update/${item.id}`, fd)
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

    return (
        <div className="container">
            <h1 className="mt-3 mb-3">Our Team</h1>
            <table className="table text-light">
                <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Photo</th>
                    <th scope="col">edit</th>
                    <th scope="col">delete</th>
                </tr>
                </thead>
                <tbody>

                {!loading && state && state.map((item, index) => {
                    return (
                        <TeamItem
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

            {card && <TeamForm card={card} updateHandler={updateHandler}/>}
            {!card && <TeamForm createHandler={createHandler}/>}
        </div>
    );
};

export default AdminPageOurTeam;
