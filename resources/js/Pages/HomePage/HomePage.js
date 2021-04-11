import React from 'react';
import s from './HomePage.module.scss';
import Layout from "../../components/Layout/Layout";

const HomePage = () => {
    // console.log('HomePage - ', homePage.length);
    // console.log('window', window.innerWidth);
    let correction = window.innerWidth > 768 ? 'container' : '';
    return (
        <Layout>
            <article className={s.mainSection}>
                <h1>HomePage</h1>
            </article>
        </Layout>
    );
};

export default HomePage;
