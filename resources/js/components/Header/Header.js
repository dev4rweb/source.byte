import React, {useState} from 'react';
import s from './Header.module.scss'
import logo from "../../../assets/logo.svg";
import OverlayMenu from "./OverlayMenu/OverlayMenu";

const Header = () => {
    let open = window.innerWidth >= 768;
    const [isOpen, setIsOpen] = useState(open);

    const toggleNavHandler = () => {
        // console.log(window.innerWidth);
        if (window.innerWidth < 768) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <header className={`container ${s.header}`}>
            <div className={s.topNav}>
                <a className={s.logo} href={`/`}>
                    <img src={logo} alt="logo"/>
                    <h4>SOURCE<br/><span>BYTE</span></h4>
                </a>
                <div
                    className={s.menuOpen}
                    onClick={toggleNavHandler}
                >
                    &#9776;
                </div>
            </div>
            <OverlayMenu
                toggleNavHandler={toggleNavHandler}
                isOpen={isOpen}
            />
        </header>
    );
};

export default Header;

