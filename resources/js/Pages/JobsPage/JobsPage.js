import React from 'react';
import s from './JobsPage.module.scss'
import Layout from "../../components/Layout/Layout";
import Accordion from "../../components/Accordion/Accordion";
import FollowUs from "../../components/FollowUs/FollowUs";

const JobsPage = ({jobsPage, jobs}) => {
    const title = jobsPage[0].title || 'title';
    const content = jobsPage[0].content;
    const image = jobsPage[0].image || '';
    return (
        <Layout>
            <article className={`container ${s.jobsPage}`}>
                <section className="wrapper">
                    <h1>{title}</h1>
                    {content ?? <p>{content}</p>}
                    {jobs && <Accordion jobs={jobs}/>}
                </section>
                <section className={s.followWrap}>
                    <FollowUs/>
                </section>
            </article>
        </Layout>
    );
};

export default JobsPage;
