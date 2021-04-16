import React from 'react';
import './detailGamePage.scss'
import Layout from "../../components/Layout/Layout";
import YoutubeFrame from "../../components/YoutubeFrame/YoutubeFrame";
import DetailGameSlider from "../../components/DetailGameSlider/DetailGameSlider";
import SystemCard from "../../components/SystemCard/SystemCard";
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard";
import UnderLine from "../../components/UnderLine/UnderLine";
import MultiCarousel from "../../components/MultiCarousel/MultiCarousel";
import MCarousel from "../../components/MCarousel/MCarousel";

const DetailGamePage = ({detailGamePage}) => {
    // console.log(detailGamePage);
    const markedList = detailGamePage.list.split('*-');
    // console.log(markedList);
    return (
        <Layout>
            <article className="detail-game-container">
                <YoutubeFrame pathUrl={detailGamePage.video} bg={detailGamePage.mainImage}/>

                <section className="container side-wrapper">
                    <div className="left-side">
                        <h1>{detailGamePage.title}</h1>
                        <p>{detailGamePage.content}</p>
                        <DetailGameSlider pageId={detailGamePage.id}/>
                        <h2>{detailGamePage.subtitle}</h2>
                        <p>{detailGamePage.subContent} </p>
                        <h2>{detailGamePage.listTitle}</h2>
                        <ul className="img-marked">
                            {markedList && markedList.map((item, index) => {
                                if (item) {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                }
                            })}
                        </ul>
                        <h2>{detailGamePage.subtitleTwo}</h2>
                        <p>{detailGamePage.contentTwo}</p>
                        <h2>System requirements</h2>
                        <div className="system-wrapper">
                            <SystemCard title={'Minimum'} isMarked={false}/>
                            <SystemCard title={'Recomended'} isMarked={true}/>
                        </div>
                    </div>
                    <div className="right-side">
                        <PurchaseCard isActive={true}/>
                    </div>
                </section>
            </article>

            <section className="container carousel-wrapper">
                <h2>More realeses</h2>
                <MultiCarousel/>
            </section>
            <UnderLine btnUrl={`/games`} text={`Do you want to see more games?`}/>
        </Layout>
    );
};

export default DetailGamePage;
