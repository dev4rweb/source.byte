import React from 'react';
import s from './PressPage.module.scss'
import Layout from "../../components/Layout/Layout";
import YoutubeFrame from "../../components/YoutubeFrame/YoutubeFrame";
import GamesCard from "../../components/GamesCard/GamesCard";
import imgCard from "../../../assets/img/png/games1.png";
import imgCardTwo from "../../../assets/img/png/games2.png";
import imgCardThree from "../../../assets/img/png/games3.png";
import imgCardFour from "../../../assets/img/png/games4.png";
import UnderLine from "../../components/UnderLine/UnderLine";
import TeamBoxes from "../../components/TeamBoxes/TeamBoxes";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";

const PressPage = ({pressPage}) => {
    const title = pressPage[0].title || 'title';
    const content = pressPage[0].content || 'content';
    const image = pressPage[0].image || '';
    return (
        <Layout>
            <article className={`${s.pressPage}`}>
                <div className={`container`}>
                    <YoutubeFrame isButton={true}/>
                    <h2>Our games</h2>

                    <section className={s.cards}>
                        <GamesCard img={imgCard} title={`Bocce VR Simulator`}/>
                        <GamesCard img={imgCardTwo} title={`Time for quest`}/>
                        <GamesCard img={imgCardThree} title={`Long name for demonstation two-line variant of title`}/>
                        <GamesCard img={imgCardFour} title={`Royal resque`}/>
                        <GamesCard img={imgCard} title={`Bocce VR Simulator`}/>
                        <GamesCard img={imgCardTwo} title={`Time for quest`}/>
                        <GamesCard img={imgCardThree} title={`Long name for demonstation two-line variant of title`}/>
                        <GamesCard img={imgCardFour} title={`Royal resque`}/>
                        <GamesCard img={imgCard} title={`Bocce VR Simulator`}/>
                        <GamesCard img={imgCardTwo} title={`Time for quest`}/>
                        <GamesCard img={imgCardThree} title={`Long name for demonstation two-line variant of title`}/>
                        <GamesCard img={imgCardFour} title={`Royal resque`}/>
                    </section>

                    <UnderLine text={`Do you want to see more games?`}/>
                </div>

                <section className={s.partFamily}>
                    <h2>Want to be part of the family?</h2>
                    <div>
                        <div className={s.left}>
                            <h6>You’ve made a game. What now?</h6>
                            <p>
                                The games market can feel intimidating and the business models are sometimes hard to grasp.
                                Marketing requires a lot of experience and even more hard work. Now wouldn’t it be awesome
                                to
                                meet a bunch of people who come from game development themselves and who can come up with a
                                great plan to make your game a success?
                            </p>
                        </div>
                        <div className={s.right}>
                            <h6>We bring your game to the gamers.</h6>
                            <p>
                                We at Spotlight understand game development and we have a lot of experience in how to market
                                and
                                distribute games. We’re not a traditional publisher who will take away your IP for money.
                                Instead, we want to add to your team the power of marketing, sales, other stuff you need in
                                order to make your dream of a great game release come true.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={`container ${s.team}`}>
                    <h2>Our team</h2>
                    <TeamBoxes/>
                </section>

                <section className={s.partFamily} style={{background: 'none'}}>
                    <div>
                        <div className={s.left}>
                            <h6>What are we looking for?</h6>
                            <p>
                                We are looking for your creative project. So pitch us your game and tell us what you need?
                                Do you have a finished game and just need the final marketing push to release it? Are you
                                still prototyping and need support from the very first minute on? Or is it something in
                                between? We might be able to fill up the missing roles in your team!
                            </p>
                        </div>
                        <div className={s.right}>
                            <h6>How to pitch</h6>
                            <p>
                                So you’ve heard enough and you’re ready to pitch us your game? That’s great to hear! Let’s
                                become collaborative partners and reach far beyond the stars together. So what are you
                                waiting for? Tell us about your project by clicking the button below. So what are you
                                waiting for? Tell us about your project by clicking the button below.
                            </p>
                        </div>
                    </div>
                    <div>
                        <ButtonPrimary text={`Submit your game`}/>
                    </div>
                </section>

            </article>
            {/*<h1>{title}</h1>
            <p>{content}</p>
            <img style={{width: '100%'}} src={image} alt="image"/>*/}
        </Layout>
    );
};

export default PressPage;
