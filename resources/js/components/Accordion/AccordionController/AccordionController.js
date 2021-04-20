import React, {useEffect, useCallback, useState} from 'react';
import axios from "axios";
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../Loader/Loader";
import JobItem from "./JobItem";
import NewsItem from "../../../Pages/AdminPage/AdminPageNews/NewsItem/NewsItem";
import JobForm from "./JobForm";

const AccordionController = () => {
    const [jobs, setJobs] = useState(null);
    const [card, setCard] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchJobs = useCallback(async () => {
        try {
            const fetched = await request('/jobsAll');
            // console.log(fetched);
            setJobs(fetched.models);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchJobs();
    }, []);

    function editHandler(card) {
        // console.log('editHandler', card);
        setCard(card);
    }

    async function deleteHandler(item) {
        // console.log('deleteHandler', item);
        setLoad(true);
        axios.delete(`/job/destroy/${item.id}`)
            .then(res => {
                setLoad(false);
                // console.log(res);
                setJobs(res.data.models);
            })
            .catch(err => {
                setLoad(false);
                console.log(err);
            });
    }

    function createHandler(item) {
        console.log('createHandler', item);
        setLoad(true);

        axios.post('/job-store', item)
            .then(res => {
                setLoad(false);
                console.log(res);
                setJobs(res.data.models);
            })
            .catch(err => {
                setLoad(false);
                console.log(err);
            });
    }

    function updateHandler(item) {
        console.log('updateHandler', item);
        setLoad(true);
        setCard(null);

        axios.post(`/job/update/${item.id}`, item)
            .then(res => {
                setLoad(false);
                console.log(res);
                setJobs(res.data.models);
            })
            .catch(err => {
                setLoad(false);
                console.log(err);
            });

    }

    if (!jobs) {
        return <h1>No any jobs</h1>
    }

    if (loading || load) {
        return <Loader/>;
    }

    return (
        <div className="mb-5 mt-5 container">
            <div className="container">
                <h1 className="mt-3 mb-3">Jobs</h1>
                <table className="table text-light">
                    <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Position</th>
                        <th scope="col">edit</th>
                        <th scope="col">delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {!loading && !load && jobs && jobs.map((item, index) => {
                        return (
                            <JobItem
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

                {card && <JobForm card={card} updateHandler={updateHandler}/>}
                {!card && <JobForm createHandler={createHandler}/>}

            </div>
        </div>
    );
};

export default AccordionController;
