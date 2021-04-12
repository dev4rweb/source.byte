import React, {useState, createRef} from 'react';
import s from './YoutubeFrame.module.scss'
import playImg from "../../../assets/img/png/Play.png";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const YoutubeFrame = ({isButton = false}) => {
    const [play, setPlay] = useState('');
    const cov = createRef();

    function playVideo(event) {
        event.preventDefault();
        setPlay('?autoplay=1&mute=1');
        let el = cov.current;
        el.style.height = '0px';
        el.style.overflow = 'hidden';
    }

    return (
        <section className={`container ${s.frame}`}>
            <iframe
                id="myFrame"
                className="youtube"
                title='youFrame'
                src={`https://www.youtube.com/embed/x11ZCnr87pE${play}`}
                // src="https://www.youtube.com/embed/hEnr6Ewpu_U?autoplay=1&mute=1"
                frameBorder="0"
                allowtransparency="true"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
            <div
                ref={cov}
                className={s.cover}
            >
                <a
                    href="#"
                    onClick={event => playVideo(event)}
                >
                    <img src={playImg} alt="play"/>
                </a>

                {isButton &&
                <div className={s.btnWrapper}>
                    <ButtonPrimary text={`View Games`} width={`170px`}/>
                </div>
                }
            </div>
        </section>

    );
};

export default YoutubeFrame;
