import React, {useState} from 'react';
import s from './ContactPage.module.scss'
import Layout from "../../components/Layout/Layout";
import CustomNavLink from "../../components/CustomNavLink/CustomNavLink";
import FollowUs from "../../components/FollowUs/FollowUs";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import CustomInput from "../../components/CustomInput/CustomInput";
import {useHttp} from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";

const ContactsPage = ({contactsPage}) => {
    const title = contactsPage[0].title || 'title';
    const content = contactsPage[0].content || 'content';
    const image = contactsPage[0].image || '';
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        msg: ''
    });

    const {request} = useHttp();

    const sentToEmail = async model =>{
        setLoading(true);
        try{
            // const data = await request('http://127.0.0.1:8000/api/send-email/sendEmailContact', 'POST', model);
            const data = await request('/api/send-email/sendEmailContact', 'POST', model);
            console.log('send to email', data);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    const handleSubmit = async event => {
        setLoading(true);
        event.preventDefault();
        // console.log('form', state);
        try {
            // const data = await request('http://127.0.0.1:8000/api/contactForm/store', 'POST', state);
            const data = await request('/api/contactForm/store', 'POST', state);

            const model = data.model;
            // console.log(model);
            setLoading(false);
            // await sentToEmail(model);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    function onChangeHandler(e) {
        // console.log('onChangeHandler', e.currentTarget.name);
        setState({...state,
            [e.currentTarget.name] : e.currentTarget.value
        });
    }

    return (
        <Layout>
            <article className={`container`}>
                <section className={` wrapper ${s.contactPage}`}>
                    <div className={s.leftSide}>
                        <h3>Contacts</h3>
                        <div>
                            <CustomNavLink type={`mail`}/>
                            <hr/>
                            <CustomNavLink type={`location`}/>
                            <hr/>
                            <CustomNavLink/>
                        </div>
                    </div>
                    <form
                        className={s.rightSide}
                        // onSubmit={handleSubmit}
                    >
                    {/*<form className={s.rightSide}>*/}
                        <h3>Do you have a question? Write us</h3>
                        <CustomInput
                            label={`*Your name`}
                            name={'name'}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomInput
                            label={`*Email`}
                            name={'email'}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomInput
                            label={`Phone`}
                            name={'phone'}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomInput
                            isTypeText={false}
                            label={`Message`}
                            name={'msg'}
                            onChangeHandler={onChangeHandler}
                        />
                        <ButtonPrimary
                            text={`send`}
                            width={`100%`}
                            height={`64px`}
                            // onClickHandle={handleSubmit}
                        />
                    </form>
                </section>
                <FollowUs/>
                {loading && <Loader/>}
            </article>
            {/*<h1>{title}</h1>
            <p>{content}</p>
            <img style={{width: '100%'}} src={image} alt="image"/>*/}
        </Layout>
    );
};

export default ContactsPage;
