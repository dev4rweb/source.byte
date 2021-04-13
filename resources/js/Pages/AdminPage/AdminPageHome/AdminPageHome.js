import React, {useEffect, useCallback, useState} from 'react';
import {useHttp} from "../../../hooks/http.hook";
import CarouselModule from "../../../components/Carousel/CarouselModule/CarouselModule";

const AdminPageHome = () => {
    const {request, loading} = useHttp();
    const [state, setState] = useState(null);

    const fetchMainData = useCallback(async () => {
        try {
            const fetched = await request('/homePage/indexApi');
            console.log(fetched);
            // setState(fetched.models);
        } catch (e) {

        }
    }, []);

    useEffect(() => {
        fetchMainData();
    }, [fetchMainData]);

    return (
        <div>
            <h1>Main Block</h1>
            <CarouselModule/>
        </div>
    );
};

export default AdminPageHome;
