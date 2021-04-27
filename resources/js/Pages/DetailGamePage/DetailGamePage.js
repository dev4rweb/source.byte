import React, {useState} from 'react';
import './detailGamePage.scss'
import Layout from "../../components/Layout/Layout";
import YoutubeFrame from "../../components/YoutubeFrame/YoutubeFrame";
import DetailGameSlider from "../../components/DetailGameSlider/DetailGameSlider";
import SystemCard from "../../components/SystemCard/SystemCard";
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard";
import UnderLine from "../../components/UnderLine/UnderLine";
import MultiCarousel from "../../components/MultiCarousel/MultiCarousel";

const DetailGamePage = ({detailGamePage, gamesRequirements, gamePurchase}) => {
    // console.log(gamePurchase);
    const [minReq, setMinReq] = useState(gamesRequirements[0]);
    const [maxReq, setMaxReq] = useState(gamesRequirements[1]);
    const [gamePur, setGamePur] = useState(gamePurchase[0]);
    const markedList = detailGamePage.list ? detailGamePage.list.split('*-') : '';
    // console.log(markedList);
    return (
        <Layout>
            <article className="detail-game-container">
                {
                    detailGamePage.video &&
                    <YoutubeFrame pathUrl={detailGamePage.video} bg={detailGamePage.mainImage}/>
                }

                <section className="container side-wrapper">
                    <div className="left-side">
                        {
                            detailGamePage.title &&
                            <h1 style={{marginTop: '50px'}}>{detailGamePage.title}</h1>
                        }
                        {
                            detailGamePage.content &&
                            <p>{detailGamePage.content}</p>
                        }
                        <DetailGameSlider pageId={detailGamePage.id}/>
                        {
                            detailGamePage.subtitle &&
                            <h2>{detailGamePage.subtitle}</h2>
                        }
                        {
                            detailGamePage.subContent &&
                            <p>{detailGamePage.subContent} </p>
                        }
                        {
                            detailGamePage.listTitle &&
                            <h2>{detailGamePage.listTitle}</h2>
                        }
                        <ul className="img-marked">
                            {markedList && markedList.map((item, index) => {
                                if (item) {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                }
                            })}
                        </ul>
                        {
                            detailGamePage.subtitleTwo &&
                            <h2>{detailGamePage.subtitleTwo}</h2>
                        }
                        {
                            detailGamePage.contentTwo &&
                            <p>{detailGamePage.contentTwo}</p>
                        }
                        <h2>System requirements</h2>
                        <div className="system-wrapper">
                            <SystemCard
                                title={'Minimum'}
                                isMarked={false}
                                item={minReq}
                            />
                            <SystemCard
                                title={'Recomended'}
                                isMarked={true}
                                item={maxReq}
                            />
                        </div>
                    </div>
                    <div className="right-side">
                        <PurchaseCard isActive={true} data={gamePur}/>
                    </div>
                </section>
            </article>

            <section className="container carousel-wrapper">
                <br/><br/><br/>
                <h2>More realeses</h2>
                <br/>
                <MultiCarousel/>
            </section>
            <UnderLine btnUrl={`/games`} text={`Do you want to see more games?`}/>
        </Layout>
    );
};

export default DetailGamePage;
