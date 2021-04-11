import React from 'react';
import s from './HomePage.module.scss';
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {
    // console.log('HomePage - ', homePage.length);
    // console.log('window', window.innerWidth);
    let correction = window.innerWidth > 768 ? 'container' : '';
    return (
        <Layout>
            <article className={s.mainSection}>
                <Carousel/>
            </article>
        </Layout>
    );
};

export default HomePage;
