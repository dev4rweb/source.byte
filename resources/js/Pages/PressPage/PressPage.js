import React, {useState, useCallback, useEffect} from 'react';
import s from './PressPage.module.scss'
import Layout from "../../components/Layout/Layout";
import YoutubeFrame from "../../components/YoutubeFrame/YoutubeFrame";
import imgCard from "../../../assets/img/png/games1.png";
import imgCardTwo from "../../../assets/img/png/games2.png";
import imgCardThree from "../../../assets/img/png/games3.png";
import imgCardFour from "../../../assets/img/png/games4.png";
import UnderLine from "../../components/UnderLine/UnderLine";
import TeamBoxes from "../../components/TeamBoxes/TeamBoxes";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import {useHttp} from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";
import GamesCard from "../../components/GamesCard/GamesCard";

const PressPage = ({pressPage}) => {
    const [state, setState] = useState(pressPage[0]);
    const [games, setGames] = useState(null);
    const {request, loading} = useHttp();

    const fetchGames = useCallback(async () => {
        try {
            const fetched = await request('/games-all');
            // console.log(fetched);
            setGames(fetched.models);
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        fetchGames()
    }, [fetchGames]);

    if (loading) {
        return <Loader/>
    }

    return (
        <Layout>
            {state &&
            <article className={`${s.pressPage}`}>
                <div className={`container`}>
                    <YoutubeFrame
                        isButton={true}
                        pathUrl={state.ytLink}
                        btnPath={state.ytBtnLink}
                    />
                    <h2 style={{marginTop: "80px", marginBottom: "80px"}} >{state.gameTitle}</h2>

                    <section className={s.cards}>
                        {games && games.map((item, index) => {
                            return (
                                <GamesCard
                                    key={index}
                                    item={item}
                                />
                            )
                        })}
                    </section>

                    <UnderLine text={state.gameText} btnUrl={state.gameLink}/>
                </div>

                <section className={s.partFamily}>
                    <h2>{state.title}</h2>
                    <div>
                        <div className={s.left}>
                            <h6>{state.subTitleLeft}</h6>
                            <p>{state.contentLeft}</p>
                        </div>
                        <div className={s.right}>
                            <h6>{state.subTitleRight}</h6>
                            <p>{state.contentRight}</p>
                        </div>
                    </div>
                </section>

                <section className={`container ${s.team}`}>
                    <h2>{state.teamTitle}</h2>
                    <TeamBoxes/>
                </section>

                <section className={s.partFamily} style={{background: 'none'}}>
                    <div>
                        <div className={s.left}>
                            <h6>{state.addSubTitleLeft}</h6>
                            <p>{state.addContentLeft}</p>
                        </div>
                        <div className={s.right}>
                            <h6>{state.addSubTitleRight}</h6>
                            <p>{state.addContentRight} </p>
                        </div>
                    </div>
                    <div>
                        <ButtonPrimary
                            text={`Submit your game`}
                            btnUrl={state.addBtnLink}
                        />
                    </div>
                </section>

            </article>
            }
        </Layout>
    );
};

export default PressPage;
