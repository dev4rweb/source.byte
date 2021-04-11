import React from 'react';
import s from './HomePage.module.scss';
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import SecondCarousel from "../../components/SecondCarousel/SecondCarousel";

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
                </section>
            </article>
        </Layout>
    );
};

export default HomePage;
