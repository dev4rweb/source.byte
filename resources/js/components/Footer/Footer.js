import React, {useCallback, useEffect, useState} from 'react';
import s from './Footer.module.scss'
import logo from "../../../assets/logo.svg";
import FooterMenu from "./FooterMenu/FooterMenu";
import fOne from "../../../assets/icons/svg/footer-steam.svg";
import fXbox from "../../../assets/icons/svg/footer-Xbox.svg";
import fPlaystation from "../../../assets/icons/svg/footer-Playstation.svg";
import fTwitch from "../../../assets/icons/svg/footer-Twitch.svg";
import fMicrosoft from "../../../assets/icons/svg/footer-Microsoft-Store.svg";
import fViveport from "../../../assets/icons/svg/footer-Viveport.svg";
import fNintendo from "../../../assets/icons/svg/footer-Nintendo-Switch.svg";
import fOculus from "../../../assets/icons/svg/footer-Oculus-Quest.svg";
import fGOG from "../../../assets/icons/svg/footer-GOG.svg";
import fEpic from "../../../assets/icons/svg/footer-Epic.svg";
import fItch from "../../../assets/icons/svg/footer-Itch.io.svg";
import {useHttp} from "../../hooks/http.hook";

const Footer = () => {
    const [contact, setContact] = useState(null);
    const [links, setLinks] = useState(null);
    const [load, setLoad] = useState(false);
    const {request, loading} = useHttp();

    const fetchContacts = useCallback(async () => {
        try {
            const fetched = await request('/contacts/getAll');
            // console.log(fetched);
            setContact(fetched.model[0]);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchContacts()
    }, [fetchContacts]);

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('/footer-links');
            // console.log(fetched);
            setLinks(fetched.model[0])
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks]);

    return (
        <footer className={`container ${s.footer}`}>
            {contact &&
            <div className={s.topRow}>
                <div className={s.logo}>
                    <img src={logo} alt="logo"/>
                    <h4>SOURCE<br/><span>BYTE</span></h4>
                </div>
                <div className={s.menuContact}>
                    <FooterMenu/>
                    <div className={s.contacts}>
                        <a
                            href={`tel: ${contact.phone ?? '+380931731730'}`}
                            className={s.phone}>
                            <i className={`icPhone`}/>
                            {
                                contact.phone ?
                                    `${contact.phone.replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3 $4 $5')}` :
                                    '+380931731730'
                            }
                        </a>
                        <a
                            href={`mailto: ${contact.email}`}
                            className={s.email}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i className={`icMail`}/>
                            {contact.email}
                        </a>
                    </div>
                </div>
            </div>
            }
            {contact &&
            <div className={s.middleRow}>
                <div>
                    <p>{contact.address}</p>
                    <p>{contact.other}</p>
                </div>
                <div className={s.right}>
                    <p>{contact.copyright}</p>
                    {/*<p>Created by <span>@k0vel</span> and <span>@nolis920</span></p>*/}
                </div>
            </div>
            }
            <hr/>
            {links &&
            <div className={s.bottomRow}>
                <ul>
                    <li>
                        <a href={links.steam}>
                            <img src={fOne} alt="logo"/>
                        </a>
                    </li>
                    <li>
                        <a href={links.xBox}>
                            <img src={fXbox} alt="logo"/>
                        </a>
                    </li>
                    <li>
                        <a href={links.playstation}>
                            <img src={fPlaystation} alt="logo"/>
                        </a>
                    </li>
                    <li>
                        <a href={links.twitch}>
                            <img src={fTwitch} alt="logo"/>
                        </a>
                    </li>
                    <li>
                        <a href={links.microsoft}>
                            <img src={fMicrosoft} alt="logo"/>
                        </a>
                    </li>
                    <li>
                        <a href={links.viveport}>
                            <img src={fViveport} alt="logo"/>
                        </a>
                    </li>
                    <li>
                        <a href={links.nintendo}>
                            <img src={fNintendo} alt="logo"/>
                        </a>
                    </li>
                    <li>
                        <a href={links.oculus}>
                            <img src={fOculus} alt="logo"/>
                        </a>
                    </li>
                    <li>
                        <a href={links.gog}>
                            <img src={fGOG} alt="logo"/>
                        </a>
                    </li>
                    <li>
                        <a href={links.epic}>
                            <img src={fEpic} alt="logo"/>
                        </a>
                    </li>
                    <li>
                        <a href={links.itch}>
                            <img src={fItch} alt="logo"/>
                        </a>
                    </li>
                </ul>
            </div>
            }
        </footer>
    );
};

export default Footer;
