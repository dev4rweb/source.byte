import React, {useEffect, useCallback, useState} from 'react';
import {useHttp} from "../../../hooks/http.hook";
import CarouselModule from "../../../components/Carousel/CarouselModule/CarouselModule";
import HomePageForm from "./HomePageForm/HomePageForm";

const AdminPageHome = () => {
    const {request, loading} = useHttp();
    const [state, setState] = useState(null);

    const fetchMainData = useCallback(async () => {
        try {
            const fetched = await request('/homePage/indexApi');
            // console.log(fetched);
            setState(fetched.models);
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
            <h1 className={`mt-5`}>Interactive Block</h1>
            <h2>Forms</h2>
            <div className={`container`}>
                {state && state.map((form, index) => {
                    return (
                        <HomePageForm
                            form={form}
                            key={index}
                        />
                    );
                })}
            </div>
            <h1>Second Carousel</h1>
        </div>
    );
};

export default AdminPageHome;
