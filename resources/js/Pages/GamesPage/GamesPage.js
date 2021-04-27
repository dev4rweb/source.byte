import React, {useEffect, useState} from 'react';
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

const GamesPage = ({gamesPage, games}) => {
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
    const [originGame, setOriginGame] = useState(null);
    const [category, setCategory] = useState([]);
    const sorting = ['date', 'name'];

    /*For Pagination*/
    const [currentGames, setCurrentGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(null);
    const [totalPages, setTotalPages] = useState(null);

    useEffect(() => {
        // console.log(games.length);
        setGameCard(games);
        setOriginGame(games);
        createCategory(games);
    }, [gamesPage]);


    function createCategory(games) {
        let cut = [];
        games.map(item => {
            const list = item.category.split(',');
            list.forEach(item => cut.push(item.replace(/\s/g, '')));
            // console.log(item.category.split(','));
            // cut.push(item.category);
        });
        let unique = cut.filter(onlyUnique);
        setCategory(unique);
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    function filterByCategoryHandler(category) {
        // console.log('filterHandler',category);
        if (category !== 'all') {
            const result = games.filter(game => game.category.includes(category));
            setGameCard(result);
        } else {
            setGameCard(originGame);
        }
    }

    function filterBySearchHandler(letters) {
        // console.log('filterBySearchHandler', letters);
        if (letters) {
            const result = gameCard.filter(game => game.title.toLowerCase().includes(letters.toLowerCase()));
            setGameCard(result);
        } else {
            setGameCard(originGame);
        }
    }

    function filterBySortingHandler(category) {
        if (category === 'name') {
            // console.log('filterBySortingHandler', category);
            const result = [...gameCard].sort(function (a, b) {
                if (a.title < b.title) {return -1;}
                if (a.title > b.title) {return 1;}
                return 0;
            });
            setGameCard(result);
            // console.log(gameCard);
        }
        if (category === 'date') {
            const result = [...gameCard].sort(function (a, b) {
                if(a.id < b.id) {return -1;}
                if (a.id > b.id) {return 1;}
                return 0;
            });
            setGameCard(result);
        }
        if (category === 'Sorting') {
            setGameCard(originGame);
        }
    }

    return (
        <Layout>
            <article className={`container ${s.gamesPage}`}>
                <h1>Our games</h1>
                <div className={s.controls}>
                    <div className={s.topLine}>
                        <InputSelect
                            data={category}
                            filterHandler={filterByCategoryHandler}
                        />
                        <InputGroup filterHandler={filterBySearchHandler}/>
                    </div>
                    <div className={s.bottomLine}>
                        <p>Search results: <span>{gameCard.length}</span></p>
                        <InputSelect
                            placeHolder={`Sorting`}
                            height={`48px`}
                            data={sorting}
                            filterHandler={filterBySortingHandler}
                        />
                    </div>
                </div>

                <section className={s.cards}>
                    {gameCard.map((item, index) => {
                        return (
                            <GamesCard
                                key={index}
                                item={item}
                            />
                        )
                    })}
                </section>
                <br/>
                <br/>
                <br/>
               {/* <div>
                    <Pagination/>
                </div>*/}
            </article>
        </Layout>
    );
};

export default GamesPage;
