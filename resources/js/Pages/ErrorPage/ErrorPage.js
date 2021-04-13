import React from 'react';
import s from './ErrorPage.module.scss'
import Layout from "../../components/Layout/Layout";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";

const ErrorPage = (props) => {
    console.log(props);
    return (
        <Layout>
            <div className={s.errorMain}>
                <h1>Page not found</h1>
                <div className={s.fullLine}>
                    <b>04040</b>
                    <span data-text="404">
                </span>
                    <b>04040</b>
                </div>
                <div className={s.btnWrapper}>
                    <ButtonPrimary text={`Go Home`} zIndex={`2`}/>
                </div>
            </div>
        </Layout>
    );
};

export default ErrorPage;
