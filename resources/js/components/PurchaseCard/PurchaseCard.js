import React, {useState} from 'react';
import s from './PurchaseCard.module.scss'
import fOne from "../../../assets/icons/svg/footer-steam.svg";
import fXbox from "../../../assets/icons/svg/footer-Xbox.svg";
import fPlaystation from "../../../assets/icons/svg/footer-Playstation.svg";
import fMicrosoft from "../../../assets/icons/svg/footer-Microsoft-Store.svg";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const PurchaseCard = ({isActive}) => {
    let [fixPos, setFixPos] = useState('');
    const opacity = isActive ? '1' : '0.5';
    if (window.innerWidth > 1200) {
        window.addEventListener('scroll', (event) => {
            if (window.pageYOffset > 900 && window.pageYOffset < 2200) {
                setFixPos(s.fixedPos);
            } else {
                setFixPos(s.hide);
            }
        });
    }
    return (
        <div
            className={`${s.purchaseCard} ${fixPos}`}
            style={{opacity: opacity}}
        >
            <ButtonPrimary text={'Purchase - $19.99'} width={`100%`}/>
            <ul>
                <li>
                    <p>Platforms</p>
                    <p>
                        <img src={fXbox} alt="logo"/>
                        <img src={fPlaystation} alt="logo"/>
                        <img src={fMicrosoft} alt="logo"/>
                        <img src={fOne} alt="logo"/>
                    </p>
                </li>
                <li>
                    <p>Released on</p>
                    <p>1/12/16</p>
                </li>
                <li>
                    <p>Publisher</p>
                    <p>Xion Studios</p>
                </li>
                <li>
                    <p>Rating</p>
                    <p>ESRB</p>
                </li>
                <li>
                    <p>File size</p>
                    <p>6.8 GB</p>
                </li>
            </ul>
        </div>
    );
};

export default PurchaseCard;
