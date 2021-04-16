import React, {useState, createRef} from 'react';
import s from './YoutubeFrame.module.scss'
import playImg from "../../../assets/img/png/Play.png";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ReactPlayer from "react-player";

const YoutubeFrame = ({pathUrl = null, isButton = false, bg}) => {
    const [play, setPlay] = useState(false);
    const cov = createRef();
    // console.log('path', pathUrl);
    const path = pathUrl ?? 'https://www.youtube.com/embed/x11ZCnr87pE';

    function playVideo(event) {
        event.preventDefault();
        setPlay(true);
        let el = cov.current;
        el.style.height = '0px';
        el.style.overflow = 'hidden';
    }

    return (
        <section className={`container ${s.frame}`}>
            <ReactPlayer
                url={path}
                height="auto"
                width="100%"
                playing={play}
            />
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
