import React from 'react';
import s from './CustomLink.module.scss';
import {InertiaLink} from "@inertiajs/inertia-react";
import route from "ziggy-js";

const CustomLink = ({text, link}) => {
    const msg = text ? text : 'View More';
    const linkTo = link ? link : 'main.index';

    return (
        <InertiaLink
            className={s.customLink}
            href={route(linkTo).url()}
            // href={`/`}
        >
            {msg}
        </InertiaLink>
    );
};

export default CustomLink;
