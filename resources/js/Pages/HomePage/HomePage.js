import React from 'react';
import s from './HomePage.module.scss';
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import SecondCarousel from "../../components/SecondCarousel/SecondCarousel";
import UnderLine from "../../components/UnderLine/UnderLine";
import NewsCardsBlock from "../../components/NewsCardsBlock/NewsCardsBlock";

const HomePage = ({homePage}) => {
    // console.log('HomePage - ', homePage.length);
    // console.log('window', window.innerWidth);
    let correction = window.innerWidth > 768 ? 'container' : '';
    return (
        <Layout>
            <article className={s.mainSection}>
                <Carousel/>

                <section className={`${s.interactive} ${correction}`}>
                    <h2>{homePage[0].title || 'title'}</h2>
                    <p>{homePage[0].content || 'content'}</p>
                    <SecondCarousel/>
                    <UnderLine
                        text={homePage[0].underText || 'text'}
                        btnUrl={homePage[0].btnUrl}
                    />
                </section>

                <section className={`${s.news} ${correction}`}>
                    <h2>{homePage[1].title}</h2>
                    <p>{homePage[1].content}</p>
                    <NewsCardsBlock/>
                    <UnderLine
                        text={homePage[1].underText || 'text'}
                        btnUrl={homePage[1].btnUrl}
                    />
                </section>
            </article>
        </Layout>
    );
};

export default HomePage;
