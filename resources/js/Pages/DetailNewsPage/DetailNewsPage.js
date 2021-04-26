import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import s from './DetailNewsPage.module.scss'
import Layout from "../../components/Layout/Layout";
import FollowUs from "../../components/FollowUs/FollowUs";

const DetailNewsPage = ({detailNewsPage}) => {
    const markedList = detailNewsPage.list ? detailNewsPage.list.split('*-') : '';
    return (
        <Layout>
            <article className={`${s.newsDetailPage}`}>
                <section className={`container ${s.main}`}>
                    {
                        detailNewsPage.mainImage &&
                        <img src={detailNewsPage.mainImage} alt="bg"/>
                    }

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
                        {
                            detailNewsPage.title &&
                            <h1>{detailNewsPage.title}</h1>
                        }

                        {
                            detailNewsPage.description &&
                            <p>{detailNewsPage.description}</p>
                        }

                    </div>
                </section>
                <section className={`container wrapper ${s.info}`}>
                    {/*<p>{detailNewsPage.content}</p>*/}
                    {
                        detailNewsPage.content &&
                        <div dangerouslySetInnerHTML={{__html: detailNewsPage.content}}/>
                    }

                    {
                        detailNewsPage.subtitle &&
                        <h2>{detailNewsPage.subtitle} </h2>
                    }

                    {
                        detailNewsPage.subContent &&
                        <p>{detailNewsPage.subContent} </p>
                    }

                    {
                        detailNewsPage.blockquote &&
                        <div className={s.quoteWrapper}>
                            <div className={s.vLine}/>
                            <blockquote>{detailNewsPage.blockquote} </blockquote>
                        </div>
                    }

                    {
                        detailNewsPage.postContent &&
                        <p>{detailNewsPage.postContent} </p>
                    }

                    <ul className="img-marked">
                        {markedList && markedList.map((item, index) => {
                            if (item) {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            }
                        })} </ul>
                    <div className={s.imgNews}>
                        {
                            detailNewsPage.lastImage &&
                            <img src={detailNewsPage.lastImage} alt="news"/>
                        }

                        {
                            detailNewsPage.altImage &&
                            <p>{detailNewsPage.altImage}</p>
                        }
                    </div>
                    {
                        detailNewsPage.lastContent &&
                        <p>{detailNewsPage.lastContent}</p>
                    }
                </section>
                <FollowUs/>
            </article>
        </Layout>
    );
};

export default DetailNewsPage;
