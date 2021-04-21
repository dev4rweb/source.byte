import React, {useState} from 'react';
import axios from "axios";
import s from '../SubmitPage/SubmitPage.module.scss';
import Layout from "../../components/Layout/Layout";
import MainBlock from "../../components/MainBlock/MainBlock";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomCheckBox from "../../components/CustomCheckBox/CustomCheckBox";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import Loader from "../../components/Loader/Loader";

const ApplyJobPage = ({applyJobPage, job, lookingJobForm}) => {
    /*const title = applyJobPage[0].title || 'title';
    const content = applyJobPage[0].content || 'content';
    const image = applyJobPage[0].image || '';*/
    const [form, setForm] = useState({
        jobPosition: job.position,
        name: '', country: '', email: '', yourSite: '', experience: '', yourSiteTwo: '',
        unity: false, unreal: false, design: false, artist: false, marketing: false,
        webDev: false, cProgrammer: false, graphicDesign: false, writer: false,
        levelDesigner: false, gameDesigner: false, composer: false, other: false,
        impress: '', earn: '', uploadFile: null, website: '', help: ''
    });
    const [loading, setLoading] = useState(false);

    function changeHandler(e, cbx = false) {
        if (cbx) {
            setForm({
                ...form,
                [e.currentTarget.name]: e.currentTarget.checked
            })
        } else if (e.currentTarget.name === 'uploadFile') {
            setForm({
                ...form,
                [e.currentTarget.name]: e.target.files[0]
            });
        } else {
            setForm({
                ...form,
                [e.currentTarget.name]: e.currentTarget.value
            })
        }
    }

    function sendEmail(model) {
        setLoading(true);
        axios.post('/send-email/sendEmailJob', model)
            .then(res => {
                // console.log(res);
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        const fd = new FormData();
        for (let key in form) {
            fd.set(key, form[key]);
        }

        axios.post('/looking-job-form/store', fd)
            .then(res => {
                // console.log(res);
                setLoading(false);
                sendEmail(res.data.model)
            })
            .catch(err => {
                console.log(err);
            });
    }


    if (loading) {
        return <Loader/>
    }

    return (
        <Layout>
            <article className={s.submitPage}>
                <MainBlock title={`Are you looking for a job?`} description={job.position}/>
                <section className={`container wrapper ${s.formWrapper}`}>
                    <div className={s.group}>
                        <CustomInput
                            label={`*Name`}
                            type={`text`}
                            name={`name`}
                            required={true}
                            onChangeHandler={changeHandler}
                        />
                        <CustomInput
                            label={`Country`}
                            type={`text`}
                            name={`country`}
                            onChangeHandler={changeHandler}
                        />
                    </div>
                    <div className={s.group}>
                        <CustomInput
                            label={`*Email`}
                            type={`email`}
                            name={`email`}
                            required={true}
                            onChangeHandler={changeHandler}
                        />
                        <CustomInput
                            label={`Your Website`}
                            type={`url`}
                            name={`yourSite`}
                            onChangeHandler={changeHandler}
                        />
                    </div>
                    <CustomInput
                        label={`Previous Projects/Company Experience (if any)`}
                        isTypeText={false}
                        name={`experience`}
                        onChangeHandler={changeHandler}
                    />
                    <div className={`${s.group} ${s.margins}`}>
                        <div className={s.boxes}>
                            <p>*Target Platforms</p>
                            <CustomCheckBox text={`Unity Game Developer`}
                                            name={`unity`}
                                            onChangeHandler={changeHandler}/>
                            <CustomCheckBox text={`Unreal Game Developer`}
                                            name={`unreal`}
                                            onChangeHandler={changeHandler}/>
                            <CustomCheckBox text={`3D Designer`}
                                            name={`design`}
                                            onChangeHandler={changeHandler}/>
                            <CustomCheckBox text={`Pixel Artist`}
                                            name={`artist`}
                                            onChangeHandler={changeHandler}/>
                            <CustomCheckBox text={`Marketing Specialist`}
                                            name={`marketing`}
                                            onChangeHandler={changeHandler}/>
                            <CustomCheckBox text={`Web Developer`}
                                            name={`webDev`}
                                            onChangeHandler={changeHandler}/>
                            <CustomCheckBox text={`C# Developer`}
                                            name={`cProgrammer`}
                                            onChangeHandler={changeHandler}/>
                            <CustomCheckBox text={`Graphic Designer`}
                                            name={`graphicDesign`}
                                            onChangeHandler={changeHandler}/>
                            <CustomCheckBox text={`Writer`}
                                            name={`writer`}
                                            onChangeHandler={changeHandler}/>
                            <CustomCheckBox text={`Level Designer`}
                                            name={`levelDesigner`}
                                            onChangeHandler={changeHandler}/>
                            <CustomCheckBox text={`Game Designer`}
                                            name={`gameDesigner`}
                                            onChangeHandler={changeHandler}/>
                            <CustomCheckBox text={`Composer`}
                                            name={`composer`}
                                            onChangeHandler={changeHandler}/>
                            <CustomCheckBox text={`Other`}
                                            name={`other`}
                                            onChangeHandler={changeHandler}/>
                        </div>
                        <CustomInput label={`Your Website`} type={`url`}
                                     name={`yourSiteTwo`}
                                     onChangeHandler={changeHandler}/>
                    </div>

                    <CustomInput
                        label={`Impress us`}
                        isTypeText={false}
                        name={`impress`}
                        onChangeHandler={changeHandler}
                    />

                    <CustomInput
                        label={`How much you would like to earn?`}
                        isTypeText={false}
                        name={`earn`}
                        onChangeHandler={changeHandler}
                    />

                    <div className={s.uploadFileWrapper}>
                        <p>You can upload your CV</p>
                        <div className={s.box}>
                            <CustomInput label={`Your Website`} type={`file`}
                                         name={`uploadFile`}
                                         onChangeHandler={changeHandler}/>
                            <CustomInput label={`Your Website`} type={`url`}
                        name={`website`}
                        onChangeHandler={changeHandler}/>
                        </div>
                    </div>


                    <CustomInput
                        label={`Any things you would like help with which are not part of the abouve list`}
                        isTypeText={false}
                        name={`help`}
                        onChangeHandler={changeHandler}
                    />

                    <div className={s.margins}>
                        <ButtonPrimary
                            text={'Send'}
                            width={`100%`}
                            onClickHandle={handleSubmit}
                        />
                    </div>
                </section>
            </article>

            {/* <h1>{title}</h1>
            <p>{content}</p>
            <img style={{width: '100%'}} src={image} alt="image"/>*/}

        </Layout>
    );
};

export default ApplyJobPage;
