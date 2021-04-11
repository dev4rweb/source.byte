import React from 'react';
import s from './NewsPage.module.scss';
import gpStyle from "../GamesPage/GamesPage.module.scss";
import Layout from "../../components/Layout/Layout";
import InputSelect from "../../components/InputSelect/InputSelect";
import InputGroup from "../../components/InputGroup/InputGroup";
import NewsCard from "../../components/NewsCard/NewsCard";
import imgOne from "../../../assets/img/png/new-one.png";
import imgTwo from "../../../assets/img/png/new-two.png";
import imgThree from "../../../assets/img/png/new-three.png";
import Pagination from "../../components/Pagination/Pagination";
import FollowUs from "../../components/FollowUs/FollowUs";

const NewsPage = ({newsPage}) => {
    const title = newsPage[0].title || 'title';
    const content = newsPage[0].content || 'content';
    const image = newsPage[0].image || '';
    return (
        <Layout>
            <article className={`container ${gpStyle.gamesPage}`}>
                <div className={gpStyle.controls}>
                    <div className={gpStyle.topLine}>
                        <InputSelect/>
                        <InputGroup/>
                    </div>
                    <div className={gpStyle.bottomLine}>
                        <p>Search results: <span>312</span></p>
                        <InputSelect placeHolder={`Sort by`} height={`48px`}/>
                    </div>
                </div>

                <section className={`container ${s.cardWrapper}`}>
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
                </section>

                <div className={s.paginationWrapper}>
                    <Pagination/>
                </div>
                <FollowUs/>
            </article>
            {/*<h1>{title}</h1>
            <p>{content}</p>
            <img style={{width: '100%'}} src={image} alt="image"/>*/}
        </Layout>
    );
};

export default NewsPage;
