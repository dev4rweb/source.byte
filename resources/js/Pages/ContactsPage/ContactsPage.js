import React, {useState} from 'react';
import s from './ContactPage.module.scss'
import Layout from "../../components/Layout/Layout";
import CustomNavLink from "../../components/CustomNavLink/CustomNavLink";
import FollowUs from "../../components/FollowUs/FollowUs";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import CustomInput from "../../components/CustomInput/CustomInput";
import {useHttp} from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";
import axios from "axios";

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

        const fd = new FormData();
        for (let key in model) {
            fd.set(key, model[key]);
        }
        axios.post('/send-email/sendEmailContact', fd)
            .then(res => {
                setLoading(false);
                console.log(res);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    };

    const handleSubmit = async event => {
        setLoading(true);
        event.preventDefault();
        // console.log('form', state);
        const fd = new FormData();
        fd.set('name', state.name);
        fd.set('email', state.email);
        fd.set('phone', state.phone);
        fd.set('msg', state.msg);
        axios.post('/contactForm/store', fd)
            .then(res => {
                const model = res.data.model;
                console.log(model);
                setLoading(false);
                sentToEmail(model);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });

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
                            onClickHandle={handleSubmit}
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
