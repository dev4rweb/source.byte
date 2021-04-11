import React from 'react';
import s from './AboutPage.module.scss'
import Layout from "../../components/Layout/Layout";
import aboutOne from '../../../assets/img/png/about-one.png';
import aboutTwo from '../../../assets/img/png/about-two.png';
import MainBlock from "../../components/MainBlock/MainBlock";

const AboutPage = ({aboutPage}) => {
    const title = aboutPage ? aboutPage[0].title : 'title';
    const description = aboutPage ? aboutPage[0].description : 'description';
    const mainImage = aboutPage ? aboutPage[0].mainImage : 'mainImage';
    const subTitle = aboutPage ? aboutPage[0].subTitle : 'subTitle';
    const content = aboutPage ? aboutPage[0].content : 'content';
    const cardOneTitle = aboutPage ? aboutPage[0].cardOneTitle : 'cardOneTitle';
    const cardOneText = aboutPage ? aboutPage[0].cardOneText : 'cardOneText';
    const cardOneImage = aboutPage ? aboutPage[0].cardOneImage : aboutOne;
    const cardTwoTitle = aboutPage ? aboutPage[0].cardTwoTitle : 'cardTwoTitle';
    const cardTwoText = aboutPage ? aboutPage[0].cardTwoText : 'cardTwoText';
    const cardTwoImage = aboutPage ? aboutPage[0].cardTwoImage : aboutTwo;
    return (
        <Layout>
            <article className={`container`}>
                <MainBlock title={title} description={description} mainImage={mainImage}/>

                <section className={s.miniWrapper}>
                    <h2>{subTitle}</h2>
                    <p>{content}</p>
                </section>

                <section className={`container ${s.card}`}>
                    <img src={cardOneImage} alt="games"/>
                    <div className={s.content}>
                        <h2>{cardOneTitle}</h2>
                        <p>{cardOneText} </p>
                    </div>
                </section>

                <section className={`container ${s.card} ${s.reverse}`}>
                    <img src={cardTwoImage} alt="games"/>
                    <div className={s.content}>
                        <h2>{cardTwoTitle}</h2>
                        <p>{cardTwoText} </p>
                    </div>
                </section>

                <section className={s.team}>
                    <h2>Our team</h2>
                    {/*<TeamBoxes/>*/}
                </section>

            </article>
        </Layout>
    );
};

export default AboutPage;
