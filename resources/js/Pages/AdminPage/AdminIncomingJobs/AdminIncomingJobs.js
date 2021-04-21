import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";
import IncomingJobItem from "./IncomingJobItem";

const AdminIncomingJobs = () => {
    const [state, setState] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchInJobs = useCallback(async () => {
        try{
            const fetched = await request('/looking-job-all');
            console.log(fetched);
            setState(fetched.models);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchInJobs()
    }, [fetchInJobs]);

    async function deleteHandler(item) {
        setLoad(true);
        axios.delete(`/looking-job/destroy/${item.id}`)
            .then(res => {
                setLoad(false);
                console.log(res);
                setState(res.data.models);
            })
            .catch(err => {
                setLoad(false);
                console.log(err);
            });
    }

    if (!state) {
        return <h1>No Incoming jobs</h1>;
    }

    if (loading || load) {
        return <Loader/>
    }

    return (
        <div className="container mb-5 mt-3">
            <h1>Incoming Jobs</h1>
            {state && state.map((item, index) => {
                return (
                    <IncomingJobItem
                        key={index}
                        index={index}
                        item={item}
                        deleteHandler={deleteHandler}
                    />
                )
            })}
        </div>
    );
};

export default AdminIncomingJobs;
