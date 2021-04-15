import React from 'react';
import './detailGamePage.scss'
import Layout from "../../components/Layout/Layout";
import YoutubeFrame from "../../components/YoutubeFrame/YoutubeFrame";
import DetailGameSlider from "../../components/DetailGameSlider/DetailGameSlider";
import SystemCard from "../../components/SystemCard/SystemCard";
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard";
import UnderLine from "../../components/UnderLine/UnderLine";
import MultiCarousel from "../../components/MultiCarousel/MultiCarousel";

const DetailGamePage = ({detailGamePage}) => {
    console.log(detailGamePage);
    const title = detailGamePage.title || 'title';
    const content = detailGamePage.content || 'content';
    const image = detailGamePage.mainImage || '';
    return (
        <Layout>
            <article className="detail-game-container">
                <YoutubeFrame pathUrl={detailGamePage.video} bg={detailGamePage.mainImage} />

                <section className="container side-wrapper">
                    <div className="left-side">
                        <h1>{detailGamePage.title}</h1>
                        <p>{detailGamePage.content}</p>
                        <DetailGameSlider pageId={detailGamePage.id}/>
                        <h2>About this game</h2>
                        <p>
                            In an unforgiving world where no sin is ever forgotten, Harkyn, a convicted criminal, is given a chance for redemption. Just when rulers of the world get close to finding a way to banish all evil from humans, an army of the long-ago defeated god attacks the human realm. Released from prison, Harkyn and his mentor, Kaslo, set out on a mission to stop the war.
                        </p>
                        <p>
                            In his journey, Harkyn will forge strong alliances and face even stronger enemies. He will learn the true power of the Rhogar Lords – commanders of god’s army. He will even bring the battle to the Rhogar, travelling to the heart of the demonic dimension. Will the god manage to enslave humans again? Is mankind really able to banish evil? Will Harkyn’s sins ever be forgiven?
                        </p>
                        <h2>Features</h2>
                        <ul className="img-marked">
                            <li>Competing with your local friend on the same glasses</li>
                            <li>Ability to change CPU level</li>
                            <li>Advanced AI</li>
                            <li>Ability to choose amount of points that are needed to finish the game</li>
                            <li>Choose a name to your character</li>
                            <li>Choose a name to your character</li>
                        </ul>
                        <h2>Gameplay</h2>
                        <p>
                            Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
                        </p>
                        <p>
                            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word “and” and the Little Blind Text should turn around and return to its own, safe country.
                        </p>
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
                <MultiCarousel />
            </section>
            <UnderLine text={`Do you want to see more games?`}/>

            {/*<h1>{title}</h1>
            <p>{content}</p>
            <img style={{width: '100%'}} src={image} alt="image"/>*/}
        </Layout>
    );
};

export default DetailGamePage;
