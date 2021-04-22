import React, {useState} from 'react';
import s from './ContactPage.module.scss'
import Layout from "../../components/Layout/Layout";
import CustomNavLink from "../../components/CustomNavLink/CustomNavLink";
import FollowUs from "../../components/FollowUs/FollowUs";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import CustomInput from "../../components/CustomInput/CustomInput";
import Loader from "../../components/Loader/Loader";
import axios from "axios";

const ContactsPage = ({contactsPage}) => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(contactsPage[0]);
    const [form, setForm] = useState({
        name: '', email: '', phone: '', msg: ''
    });


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
        fd.set('name', form.name);
        fd.set('email', form.email);
        fd.set('phone', form.phone);
        fd.set('msg', form.msg);
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
        setForm({...form,
            [e.currentTarget.name] : e.currentTarget.value
        });
    }

    return (
        <Layout>
            {state &&
            <article className={`container`}>
                <section className={` wrapper ${s.contactPage}`}>
                    <div className={s.leftSide}>
                        <h3>{state.title}</h3>
                        <div>
                            <CustomNavLink
                                type={`mail`}
                                link={state.email}
                            />
                            <hr/>
                            <CustomNavLink
                                type={`location`}
                                link={state.location}
                            />
                            <hr/>
                            <CustomNavLink
                                link={state.phone}
                            />
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
            }
        </Layout>
    );
};

export default ContactsPage;
