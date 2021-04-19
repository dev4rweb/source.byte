import React, {useEffect, useState} from 'react';
import s from './NewsPage.module.scss';
import gpStyle from "../GamesPage/GamesPage.module.scss";
import Layout from "../../components/Layout/Layout";
import InputSelect from "../../components/InputSelect/InputSelect";
import InputGroup from "../../components/InputGroup/InputGroup";
import NewsCard from "../../components/NewsCard/NewsCard";
import imgOne from "../../../assets/img/png/new-one.png";
import imgTwo from "../../../assets/img/png/new-two.png";
import imgThree from "../../../assets/img/png/new-three.png";
import FollowUs from "../../components/FollowUs/FollowUs";
import NewsCardsBlock from "../../components/NewsCardsBlock/NewsCardsBlock";

const NewsPage = ({newsPage, news}) => {
    const [newsCard, setNewsCard] = useState([]);
    const [originNews, setOriginNews] = useState(null);
    const [category, setCategory] = useState([]);
    const sorting = ['date', 'name'];

    useEffect(() => {
        console.log(news);
        setNewsCard(news);
        setOriginNews(news);
        createCategory(news);
    }, [news]);

    function createCategory(news) {
        let cut = [];
        news.map(item => {
            const list = item.category.split(',');
            list.forEach(item => cut.push(item.replace(/\s/g, '')));
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
            const result = news.filter(item => item.category.includes(category));
            setNewsCard(result);
        } else {
            setNewsCard(originNews);
        }
    }

    function filterBySearchHandler(letters) {
        // console.log('filterBySearchHandler', letters);
        if (letters) {
            const result = news.filter(item => item.title.toLowerCase().includes(letters.toLowerCase()));
            setNewsCard(result);
        } else {
            setNewsCard(originNews);
        }
    }

    function filterBySortingHandler(category) {
        if (category === 'name') {
            // console.log('filterBySortingHandler', category);
            const result = [...newsCard].sort(function (a, b) {
                if (a.title < b.title) {return -1;}
                if (a.title > b.title) {return 1;}
                return 0;
            });
            setNewsCard(result);
            // console.log(gameCard);
        }
        if (category === 'date') {
            const result = [...newsCard].sort(function (a, b) {
                if(a.id > b.id) {return -1;}
                if (a.id < b.id) {return 1;}
                return 0;
            });
            setNewsCard(result);
        }
        if (category === 'Sorting') {
            setNewsCard(originNews);
        }
    }

    return (
        <Layout>
            <article className={`container ${gpStyle.gamesPage}`}>
                <div className={gpStyle.controls}>
                    <div className={gpStyle.topLine}>
                        <InputSelect
                            data={category}
                            filterHandler={filterByCategoryHandler}
                        />
                        <InputGroup filterHandler={filterBySearchHandler}/>
                    </div>
                    <div className={gpStyle.bottomLine}>
                        <p>Search results: <span>{newsCard.length}</span></p>
                        <InputSelect
                            placeHolder={`Sorting`}
                            height={`48px`}
                            data={sorting}
                            filterHandler={filterBySortingHandler}
                        />
                    </div>
                </div>

                <section className={`container ${s.cardWrapper}`}>
                    {newsCard.map((item, index) => {
                        return (
                            <NewsCard
                                key={index}
                                item={item}
                            />
                        );
                    })}

                    {/*                    <NewsCard
                        img={imgTwo}
                        title={`Jobs Available Now!`}
                        content={`From the game design point of viev, virtual reality is a sea of ​​unique possibilities. The paths of player interaction with the game aren't yet fully fixed in VR`}
                    />
                    <NewsCard
                        img={imgThree}
                        title={`Looking for a Publisher?`}
                        content={`Our new game Playground VR released on Steam! In this blog, we want to share the features of developing games in virtual reality (we already have two!), And also`}
                    />
                    <NewsCard
                        img={imgOne}
                        title={`Source Byte: Inside`}
                        content={`In the previous parts, we wrote about how to get started developing a game in VR, and how game designers work when creating games in VR. In this article, we will`}
                    />
                    <NewsCard
                        img={imgTwo}
                        title={`Jobs Available Now!`}
                        content={`From the game design point of viev, virtual reality is a sea of ​​unique possibilities. The paths of player interaction with the game aren't yet fully fixed in VR`}
                    />
                    <NewsCard
                        img={imgThree}
                        title={`Looking for a Publisher?`}
                        content={`Our new game Playground VR released on Steam! In this blog, we want to share the features of developing games in virtual reality (we already have two!), And also`}
                    />
                    <NewsCard
                        img={imgOne}
                        title={`Source Byte: Inside`}
                        content={`In the previous parts, we wrote about how to get started developing a game in VR, and how game designers work when creating games in VR. In this article, we will`}
                    />
                    <NewsCard
                        img={imgTwo}
                        title={`Jobs Available Now!`}
                        content={`From the game design point of viev, virtual reality is a sea of ​​unique possibilities. The paths of player interaction with the game aren't yet fully fixed in VR`}
                    />
                    <NewsCard
                        img={imgThree}
                        title={`Looking for a Publisher?`}
                        content={`Our new game Playground VR released on Steam! In this blog, we want to share the features of developing games in virtual reality (we already have two!), And also`}
                    />*/}
                </section>

                <div className={s.paginationWrapper}>
                    {/*<Pagination/>*/}
                </div>
                <FollowUs/>
            </article>
        </Layout>
    );
};

export default NewsPage;
