import React, {useCallback, useEffect, useState} from 'react';
import s from "./FollowUs.module.scss"
import {useHttp} from "../../hooks/http.hook";
import Loader from "../Loader/Loader";

const FollowUs = () => {
    const [follow, setFollow] = useState([]);
    const [write, setWrite] = useState([]);
    const {loading, request} = useHttp();
    const baseUrl = 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w';

    const fetchSocials = useCallback(async () => {
        try {
            const fetched = await request('/socials/getSplit');
            setFollow(fetched.categoryFollow);
            setWrite(fetched.categoryWrite);
            // console.log(fetched)
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
        <section className={`container ${s.follow}`}>
            <div className={s.followWrapper}>
                <h3>Follow Us</h3>
                <div className={s.iconWrapper}>
                    <a
                        href={follow[0] ? follow[0].url : baseUrl}
                        className={`icSteam24`}
                        target={`_blank`}
                    />
                    <a
                        href={follow[1] ? follow[1].url : baseUrl}
                        className={`icVk24`}
                        target={`_blank`}
                    />
                    <a
                        href={follow[2] ? follow[2].url : baseUrl}
                        className={`icInstagram24`}
                        target={`_blank`}
                    />
                    <a
                        href={follow[3] ? follow[3].url : baseUrl}
                        className={`icTwitter24`}
                        target={`_blank`}
                    />
                    <a
                        href={follow[4] ? follow[4].url : baseUrl}
                        className={`icYoutube24`}
                        target={`_blank`}
                    />
                    <a
                        href={follow[5] ? follow[5].url : baseUrl}
                        className={`icFacebook24`}
                        target={`_blank`}
                    />
                </div>
            </div>
            <div className={s.verticalLine}/>
            <div className={s.followWrapper}>
                <h3>Write Us</h3>
                <div className={s.iconWrapper}>
                    <a
                        href={write[0] ? write[0].url : baseUrl}
                        className={`icDiscord24`}
                        target={`_blank`}
                    />
                    <a
                        href={write[1] ? write[1].url : baseUrl}
                        className={`icTelegram24`}
                        target={`_blank`}
                    />
                    <a
                        href={write[2] ? write[2].url : baseUrl}
                        className={`icWhatsapp24`}
                        target={`_blank`}
                    />
                    <a
                        href={write[3] ? write[3].url : baseUrl}
                        className={`icViber24`}
                        target={`_blank`}
                    />
                </div>
            </div>
        </section>
    );
};

export default FollowUs;
