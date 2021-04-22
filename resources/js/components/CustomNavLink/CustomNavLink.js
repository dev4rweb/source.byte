import React from 'react';
import s from './CustomNavLink.module.scss'


const CustomNavLink = ({type, link = null}) => {
    let icon;
    let href;
    let title;
    let text;
    switch (type) {
        case 'mail':
            icon = `icMail`;
            href = `mailto: ${link ?? 'general@gmail.com'}`;
            title = 'Email';
            text = `${link ?? 'general@gmail.com'}`;
            break;
        case 'location':
            icon = `icMapPin`;
            title = 'Location';
            href = `${link ?? 'http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003'}`;
            break;
        default :
            icon = `icPhone`;
            title = 'Phone';
            href = `tel: ${link?? '+380931731730'}`;
            text = `${link ?
                link.replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3 $4 $5'):
                '+380931731730'}`;
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
