import React, {useState} from 'react';
import s from './PurchaseCard.module.scss'
import fOne from "../../../assets/icons/svg/footer-steam.svg";
import fXbox from "../../../assets/icons/svg/footer-Xbox.svg";
import fPlaystation from "../../../assets/icons/svg/footer-Playstation.svg";
import fMicrosoft from "../../../assets/icons/svg/footer-Microsoft-Store.svg";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const PurchaseCard = ({isActive, data}) => {
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
        data &&
        <div
            className={`${s.purchaseCard} ${fixPos}`}
            style={{opacity: opacity}}
        >
            <ButtonPrimary text={`Purchase - ${data.price}`} width={`100%`}/>
            <ul>
                <li>
                    <p>Platforms</p>
                    <p>
                        {data.xBox === 1 &&
                        <img src={fXbox} alt="logo"/>
                        }
                        {data.ps === 1 &&
                        <img src={fPlaystation} alt="logo"/>
                        }
                        {data.microsoft === 1 &&
                        <img src={fMicrosoft} alt="logo"/>
                        }
                        {data.steam === 1 &&
                        <img src={fOne} alt="logo"/>
                        }
                    </p>
                </li>
                <li>
                    <p>Released on</p>
                    <p>{data.released}</p>
                </li>
                <li>
                    <p>Publisher</p>
                    <p>{data.publisher}</p>
                </li>
                <li>
                    <p>Rating</p>
                    <p>{data.rating}</p>
                </li>
                <li>
                    <p>File size</p>
                    <p>{data.fileSize}</p>
                </li>
            </ul>
        </div>
    );
};

export default PurchaseCard;
