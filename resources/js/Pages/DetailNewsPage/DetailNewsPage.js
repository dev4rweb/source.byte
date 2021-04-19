import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import s from './DetailNewsPage.module.scss'
import Layout from "../../components/Layout/Layout";
import FollowUs from "../../components/FollowUs/FollowUs";
import imgMain from '../../../assets/img/png/image-news-two.png'
import imgNews from '../../../assets/img/png/img-news.png';

const DetailNewsPage = ({detailNewsPage}) => {
    const markedList = detailNewsPage.list ? detailNewsPage.list.split('*-') : '';
    return (
        <Layout>
            <article className={`${s.newsDetailPage}`}>
                <section className={`container ${s.main}`}>
                    <img src={detailNewsPage.mainImage} alt="bg"/>
                    <div className={s.shadowWrapper}>
                        <div>
                            <InertiaLink
                                className={s.btnBack}
                                href={route("news.index").url()}
                            >
                                <i className={`icArrowLeft`}/>
                                Back to News
                            </InertiaLink>
                        </div>
                        <h1>{detailNewsPage.title}</h1>
                        <p>{detailNewsPage.description}</p>
                    </div>
                </section>
                <section className={`container wrapper ${s.info}`}>
                    <p>{detailNewsPage.content}</p>
                    <h2>{detailNewsPage.subtitle} </h2>
                    <p>{detailNewsPage.subContent} </p>
                    <div className={s.quoteWrapper}>
                        <div className={s.vLine}/>
                        <blockquote>{detailNewsPage.blockquote} </blockquote>
                    </div>
                    <p>{detailNewsPage.postContent} </p>
                    <ul className="img-marked">
                        {markedList && markedList.map((item, index) => {
                            if (item) {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            }
                        })} </ul>
                    <div className={s.imgNews}>
                        <img src={detailNewsPage.lastImage} alt="news"/>
                        <p>{detailNewsPage.altImage}</p>
                    </div>
                    <p>{detailNewsPage.lastContent}</p>
                </section>
                <FollowUs/>
            </article>
        </Layout>
    );
};

export default DetailNewsPage;
