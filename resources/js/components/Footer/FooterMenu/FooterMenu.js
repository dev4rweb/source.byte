import React from 'react';
import s from './FooterMenu.module.scss'
import {InertiaLink} from "@inertiajs/inertia-react";
import route from "ziggy-js";

const FooterMenu = () => {

    const isActive = (pageName) => {
        switch (pageName) {
            case 'home':
                const isHost = window.location.href.includes('source-byte');
                const urlLength = isHost ? 32 : 23;
                // console.log('length', window.location.href.includes('source-byte'));
                return window.location.href.length < urlLength ?  s.active : '';
            default:
                return window.location.href.includes(pageName) ? s.active : '';
        }

    };

    return (
        <ul className={s.menu}>
            <li>
                <InertiaLink className={isActive('home')} href={route("home.index").url()}>Home</InertiaLink>
            </li>
            <li>
                <InertiaLink  className={isActive('about')} href={route("about.index").url()}>About</InertiaLink>
            </li>
            <li>
                <InertiaLink  className={isActive('games')} href={route("games.index").url()}>Games</InertiaLink>
            </li>
            <li>
                <InertiaLink  className={isActive('news')} href={route("news.index").url()}>News</InertiaLink>
            </li>
            <li>
                <InertiaLink  className={isActive('jobs')} href={route("jobs.index").url()}>Jobs</InertiaLink>
            </li>
            <li>
                <InertiaLink  className={isActive('contacts')} href={route("contacts.index").url()}>Contacts</InertiaLink>
            </li>
            <li>
                <InertiaLink  className={isActive('press')} href={route("press.index").url()}>Press</InertiaLink>
            </li>
{/*
            <li>
                <InertiaLink  className={isActive('submit')} href={route("submit.index").url()}>Submit your game</InertiaLink>
            </li>*/}

        </ul>
    );
};

export default FooterMenu;
