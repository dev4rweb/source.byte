import React, {useState, useEffect, useCallback} from 'react';
import { InertiaLink } from "@inertiajs/inertia-react"
import route from "ziggy-js"
import s from './OvrlayMenu.module.scss'
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../Loader/Loader";

const OverlayMenu = ({toggleNavHandler, isOpen}) => {
    const [social, setSocial] = useState(null);
    const {loading, request} = useHttp();
    const baseUrl = 'https://www.youtube.com/channel/UCpZT8eq-Q4DJ6mxAikI1v5w';

    const fetchSocial = useCallback(async () => {
        try{
            const fetched = await request('/socials/');
            // console.log(fetched);
            setSocial(fetched);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchSocial();
    }, [fetchSocial]);

    let width = 0;
    if (isOpen) {
        width = '100%'
    }

    const isActive = (pageName) => {
        switch (pageName) {
            case 'home':
                const isLocal = window.location.href.includes('source-byte');
                const urlLength = isLocal ? 23 : 32;
                // console.log('length', window.location.href.includes('source-byte'));
                return window.location.href.length < urlLength ?  s.activeTab : '';
            default:
                return window.location.href.includes(pageName) ? s.activeTab : '';
        }

    };

    if (loading) {
        return <Loader/>
    }

    return (
        <nav
            className={s.menu}
            style={{width: `${width}`}}
        >
            <button
                className={s.btnClose}
                onClick={() => toggleNavHandler()}
            >
                &times;
            </button>
            <ul className={s.navigation}>
                <li onClick={()=> toggleNavHandler()}>
                    <InertiaLink className={isActive('home')} href={route("home.index").url()}>Home</InertiaLink>
                </li>
              {/*  <li onClick={()=> toggleNavHandler()}>
                    <InertiaLink  className={isActive('about')} href={route("about.index").url()}>About</InertiaLink>
                </li>
                <li onClick={()=> toggleNavHandler()}>
                    <InertiaLink  className={isActive('games')} href={route("games.index").url()}>Games</InertiaLink>
                </li>
                <li onClick={()=> toggleNavHandler()}>
                    <InertiaLink  className={isActive('news')} href={route("news.index").url()}>News</InertiaLink>
                </li>
                <li onClick={()=> toggleNavHandler()}>
                    <InertiaLink  className={isActive('jobs')} href={route("jobs.index").url()}>Jobs</InertiaLink>
                </li>
                <li onClick={()=> toggleNavHandler()}>
                    <InertiaLink  className={isActive('contacts')} href={route("contacts.index").url()}>Contacts</InertiaLink>
                </li>
                <li onClick={()=> toggleNavHandler()}>
                    <InertiaLink  className={isActive('press')} href={route("press.index").url()}>Press</InertiaLink>
                </li>
                <li onClick={()=> toggleNavHandler()}>
                    <InertiaLink  className={isActive('submit')} href={route("submit.index").url()}>Submit your game</InertiaLink>
                </li>*/}
            </ul>
            <ul className={s.social}>
                <li><span>We are here:</span></li>
                <li><a href={social ? social[0].url : baseUrl} target="_blank"><i className={`icSteam`}/></a></li>
                <li><a href={social ? social[5].url : baseUrl} target="_blank"><i className={`icFacebook`}/></a></li>
                <li><a href={social ? social[4].url : baseUrl} target="_blank"><i className={`icYoutube`}/></a></li>
                <li><a href={social ? social[3].url : baseUrl} target="_blank"><i className={`icTwitter`}/></a></li>
                <li><a href={social ? social[2].url : baseUrl} target="_blank"><i className={`icInstagram`}/></a></li>
                <li><a href={social ? social[1].url : baseUrl} target="_blank"><i className={`icVk`}/></a></li>
            </ul>
        </nav>
    );
};

export default OverlayMenu;
