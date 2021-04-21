import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";
import EmailItem from "./EmailItem";

const AdminContactEmails = () => {
    const [state, setState] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchInMails = useCallback(async () => {
        try{
            const fetched = await request('/contactForm');
            // console.log(fetched);
            setState(fetched.models);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchInMails()
    }, [fetchInMails]);

    async function deleteHandler(item) {
        setLoad(true);
        axios.delete(`/contactForm/destroy/${item.id}`)
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
        return <h1>No Incoming Mails</h1>;
    }

    if (loading || load) {
        return <Loader/>
    }

    return (
        <div className="container mb-5 mt-3">
            <h1>Incoming Mails ({state.length} mails)</h1>

            {state && state.map((item, index) => {
                return (
                    <EmailItem
                        key={index}
                        item={item}
                        deleteHandler={deleteHandler}
                    />
                );
            })}

        </div>
    );
};

export default AdminContactEmails;
