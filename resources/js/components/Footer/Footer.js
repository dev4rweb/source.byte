import React from 'react';
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

const Footer = () => {
    return (
        <footer className={`container ${s.footer}`}>
            <div className={s.topRow}>
                <div className={s.logo}>
                    <img src={logo} alt="logo"/>
                    <h4>SOURCE<br/><span>BYTE</span></h4>
                </div>
                <div className={s.menuContact}>
                    <FooterMenu/>
                    <div className={s.contacts}>
                        <a href="tel: +48517429774" className={s.phone}>
                            <i className={`icPhone`}/>
                            +48 517 429 774
                        </a>
                        <a
                            href="mailto: admin@source-byte.com"
                            className={s.email}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i className={`icMail`}/>
                            admin@source-byte.com
                        </a>
                    </div>
                </div>
            </div>
            <div className={s.middleRow}>
                <div>
                    <p>SOURCE BYTE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ | Warszawska 36 / 1, 40-010 Katowice, Polska</p>
                    <p>P 9542816866 | KRS 0000850810 | REGON 386561446</p>
                </div>
                <div className={s.right}>
                    <p>2020 © SourceByte | All rights reserved</p>
                    {/*<p>Created by <span>@k0vel</span> and <span>@nolis920</span></p>*/}
                </div>
            </div>
            <hr/>
            <div className={s.bottomRow}>
                <ul>
                    <li><img src={fOne} alt="logo"/></li>
                    <li><img src={fXbox} alt="logo"/></li>
                    <li><img src={fPlaystation} alt="logo"/></li>
                    <li><img src={fTwitch} alt="logo"/></li>
                    <li><img src={fMicrosoft} alt="logo"/></li>
                    <li><img src={fViveport} alt="logo"/></li>
                    <li><img src={fNintendo} alt="logo"/></li>
                    <li><img src={fOculus} alt="logo"/></li>
                    <li><img src={fGOG} alt="logo"/></li>
                    <li><img src={fEpic} alt="logo"/></li>
                    <li><img src={fItch} alt="logo"/></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
