import React, {useEffect, useState, useCallback} from 'react';
import s from './GamesPage.module.scss'
import Layout from "../../components/Layout/Layout";
import InputSelect from "../../components/InputSelect/InputSelect";
import InputGroup from "../../components/InputGroup/InputGroup";
import GamesCard from "../../components/GamesCard/GamesCard";
import imgCard from '../../../assets/img/png/games1.png';
import imgCardTwo from '../../../assets/img/png/games2.png';
import imgCardThree from '../../../assets/img/png/games3.png';
import imgCardFour from '../../../assets/img/png/games4.png';
import Pagination from "../../components/Pagination/Pagination";

const GamesPage = ({gamesPage}) => {
    const [gameCard, setGameCard] = useState([
        {
            title: 'Bocce VR Simulator',
            content: 'In an unforgiving world where no sin is ever forgotten, Harkyn, a convicted criminal, is given a chance for redemption. Just when rulers of the world get close to finding a way to banish all evil from humans, an army of the long-ago defeated god attacks the human realm. Released from prison, Harkyn and his mentor, Kaslo, set out on a mission to stop the war.\nIn his journey, Harkyn will forge strong alliances and face even stronger enemies. He will learn the true power of the Rhogar Lords – commanders of god’s army. He will even bring the battle to the Rhogar, travelling to the heart of the demonic dimension. Will the god manage to enslave humans again? Is mankind really able to banish evil? Will Harkyn’s sins ever be forgiven?',
            mainImage: imgCard
        },
        {
            title: 'Time for quest',
            content: 'In an unforgiving world where no sin is ever forgotten, Harkyn, a convicted criminal, is given a chance for redemption. Just when rulers of the world get close to finding a way to banish all evil from humans, an army of the long-ago defeated god attacks the human realm. Released from prison, Harkyn and his mentor, Kaslo, set out on a mission to stop the war.\nIn his journey, Harkyn will forge strong alliances and face even stronger enemies. He will learn the true power of the Rhogar Lords – commanders of god’s army. He will even bring the battle to the Rhogar, travelling to the heart of the demonic dimension. Will the god manage to enslave humans again? Is mankind really able to banish evil? Will Harkyn’s sins ever be forgiven?',
            mainImage: imgCardTwo
        },
        {
            title: 'Long name for demonstation two-line variant of title',
            content: 'In an unforgiving world where no sin is ever forgotten, Harkyn, a convicted criminal, is given a chance for redemption. Just when rulers of the world get close to finding a way to banish all evil from humans, an army of the long-ago defeated god attacks the human realm. Released from prison, Harkyn and his mentor, Kaslo, set out on a mission to stop the war.\nIn his journey, Harkyn will forge strong alliances and face even stronger enemies. He will learn the true power of the Rhogar Lords – commanders of god’s army. He will even bring the battle to the Rhogar, travelling to the heart of the demonic dimension. Will the god manage to enslave humans again? Is mankind really able to banish evil? Will Harkyn’s sins ever be forgiven?',
            mainImage: imgCardThree
        },
        {
            title: 'Royal resque',
            content: 'In an unforgiving world where no sin is ever forgotten, Harkyn, a convicted criminal, is given a chance for redemption. Just when rulers of the world get close to finding a way to banish all evil from humans, an army of the long-ago defeated god attacks the human realm. Released from prison, Harkyn and his mentor, Kaslo, set out on a mission to stop the war.\nIn his journey, Harkyn will forge strong alliances and face even stronger enemies. He will learn the true power of the Rhogar Lords – commanders of god’s army. He will even bring the battle to the Rhogar, travelling to the heart of the demonic dimension. Will the god manage to enslave humans again? Is mankind really able to banish evil? Will Harkyn’s sins ever be forgiven?',
            mainImage: imgCardFour
        },
    ]);

    useEffect(() => {
        // console.log(gamesPage);
        setGameCard(gamesPage);
    }, [gamesPage]);

    return (
        <Layout>
            <article className={`container ${s.gamesPage}`}>
                <h1>Our games</h1>
                <div className={s.controls}>
                    <div className={s.topLine}>
                        <InputSelect/>
                        <InputGroup/>
                    </div>
                    <div className={s.bottomLine}>
                        <p>Search results: <span>312</span></p>
                        <InputSelect placeHolder={`Sort by`} height={`48px`}/>
                    </div>
                </div>

                <section className={s.cards}>
                    {gameCard.map((item, index) => {
                        return (
                            <GamesCard
                                key={index}
                                img={item.mainImage}
                                title={item.title}
                                text={item.content}
                            />
                        )
                    })}
                </section>

                <div>
                    <Pagination/>
                </div>
            </article>
        </Layout>
    );
};

export default GamesPage;
