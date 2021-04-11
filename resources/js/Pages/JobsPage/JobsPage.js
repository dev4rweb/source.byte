import React from 'react';
import s from './JobsPage.module.scss'
import Layout from "../../components/Layout/Layout";
import Accordion from "../../components/Accordion/Accordion";
import FollowUs from "../../components/FollowUs/FollowUs";

const JobsPage = ({jobsPage}) => {
    const title = jobsPage[0].title || 'title';
    const content = jobsPage[0].content || 'content';
    const image = jobsPage[0].image || '';
    return (
        <Layout>
            <article className={`container ${s.jobsPage}`}>
                <section className="wrapper">
                    <h1>JobsPage</h1>
                    <Accordion/>
                </section>
                <section className={s.followWrap}>
                    <FollowUs/>
                </section>
            </article>
            {/*<h1>{title}</h1>
            <p>{content}</p>
            <img style={{width: '100%'}} src={image} alt="image"/>*/}
        </Layout>
    );
};

export default JobsPage;
