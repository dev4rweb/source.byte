import React, {useEffect, useCallback, useState} from 'react';
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";
import SocialItem from "../../../components/FollowUs/FollowUsModule/SocialItem/SocialItem";

const AdminPageSocial = () => {
    const [state, setState] = useState([]);
    const {loading, request} = useHttp();

    const fetchSocials = useCallback(async () => {
        try {
            const fetched = await request('/socials/');
            setState(fetched);
            console.log(fetched);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchSocials();
    }, [fetchSocials]);


    if (loading) {
        return <Loader/>
    }

    return (
        <div className="container">
            <h1>Social Block</h1>

            {!loading && state.map((link, index)=>{
                return(
                    <SocialItem
                        key={index}
                        link={link}
                        setState={setState}
                    />
                )
            })}

        </div>
    );
};

export default AdminPageSocial;
