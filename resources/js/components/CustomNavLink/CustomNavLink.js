import React from 'react';
import s from './CustomNavLink.module.scss'


const CustomNavLink = ({type}) => {
    let icon;
    let href;
    let title;
    let text;
    switch (type) {
        case 'mail':
            icon = `icMail`;
            href = 'mailto: general@gmail.com';
            title = 'Email';
            text = 'general@gmail.com';
            break;
        case 'location':
            icon = `icMapPin`;
            title = 'Location';
            href = 'http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003';
            break;
        default :
            icon = `icPhone`;
            title = 'Phone';
            href = 'tel: +380931731730';
            text = '+38 093 173 17 30';
            break;
    }

    return (
        <a href={href} className={s.customNavLink}>
            <p><i className={icon}/> {title}</p>
            <p>{text}</p>
        </a>
    );
};

export default CustomNavLink;
