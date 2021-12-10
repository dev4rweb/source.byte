import React, {useState} from 'react';
import s from './SubmitPage.module.scss';
import Layout from "../../components/Layout/Layout";
import MainBlock from "../../components/MainBlock/MainBlock";
import CustomInput from "../../components/CustomInput/CustomInput";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import CustomCheckBox from "../../components/CustomCheckBox/CustomCheckBox";
import {useHttp} from "../../hooks/http.hook";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const SubmitPage = ({submitPage}) => {
    const title = submitPage[0].title || 'title';
    const content = submitPage[0].content || 'content';
    const image = submitPage[0].image || '';
    const {request} = useHttp();
    const [state, setState] = useState({
        gameNameOne: '', gameNameTwo: '', contactName: '', contactEmail: '',
        company: '', team: '', prevProject: '', gameDesc: '', genre: '', similar: '',
        featureOne: '', featureTwo: '', featureThree: '', featureFour: '',
        featureFive: '', featureSix: '', uniqFeature: '', playTime: '', cbxPC: false,
        cbxPS: false, cbxXBox: false, cbxSwitch: false, optional: '', dateMonth: '',
        addPlatform: '', topRisks: '', cbxMarketing: false, cbxQA: false, cbxConsole: false,
        cbxPorting: false, cbxLocalization: false, cbxVoice: false, cbxProduction: false,
        cbxGameDesign: false, cbxDevelopment: false, uploadFile: null, urlUploadFile: '',
        helpList: ''
    });
    const [loading, setLoading] = useState(false);

    function onChangeHandler(e, isCbx) {
        // console.log('onChangeHandler', e.currentTarget.name);
        if (isCbx) {
            setState({
                ...state,
                [e.currentTarget.name]: Boolean(e.currentTarget.checked)
            });
        } else if (e.currentTarget.name === 'uploadFile') {
            // console.log('uploadFile', e.target.files[0].size);
            if (e.target.files[0].size < 10485760) {
                setState({
                    ...state,
                    [e.currentTarget.name]: e.target.files[0]
                });
            } else {
                alert('This file is bigger then 10MB');
            }
        } else {
            setState({
                ...state,
                [e.currentTarget.name]: e.currentTarget.value
            });
        }

    }

    function sendEmail(model) {
        setLoading(true);
        axios.post('/send-email/sendEmail', model)
            .then(res => {
                // console.log(res);
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }

    const handleSubmit = async event => {
        setLoading(true);
        event.preventDefault();
        const fd = new FormData();
        fd.set('gameNameOne', state.gameNameOne);
        fd.set('gameNameTwo', state.gameNameTwo);
        fd.set('contactName', state.contactName);
        fd.set('contactEmail', state.contactEmail);
        fd.set('company', state.company);
        fd.set('team', state.team);
        fd.set('prevProject', state.prevProject);
        fd.set('gameDesc', state.gameDesc);
        fd.set('genre', state.genre);
        fd.set('similar', state.similar);
        fd.set('featureOne', state.featureOne);
        fd.set('featureTwo', state.featureTwo);
        fd.set('featureThree', state.featureThree);
        fd.set('featureFour', state.featureFour);
        fd.set('featureFive', state.featureFive);
        fd.set('featureSix', state.featureSix);
        fd.set('uniqFeature', state.uniqFeature);
        fd.set('playTime', state.playTime);
        fd.set('cbxPC', state.cbxPC);
        fd.set('cbxPS', state.cbxPS);
        fd.set('cbxXBox', state.cbxXBox);
        fd.set('cbxSwitch', state.cbxSwitch);
        fd.set('optional', state.optional);
        fd.set('dateMonth', state.dateMonth);
        fd.set('addPlatform', state.addPlatform);
        fd.set('topRisks', state.topRisks);
        fd.set('cbxMarketing', state.cbxMarketing);
        fd.set('cbxQA', state.cbxQA);
        fd.set('cbxConsole', state.cbxConsole);
        fd.set('cbxPorting', state.cbxPorting);
        fd.set('cbxLocalization', state.cbxLocalization);
        fd.set('cbxVoice', state.cbxVoice);
        fd.set('cbxProduction', state.cbxProduction);
        fd.set('cbxGameDesign', state.cbxGameDesign);
        fd.set('cbxDevelopment', state.cbxDevelopment);
        fd.set('uploadFile', state.uploadFile);
        fd.set('urlUploadFile', state.urlUploadFile);
        fd.set('helpList', state.helpList);
        // console.log('form', fd);

        axios.post('/submit-game-form/store', fd)
            .then(res => {
                // console.log(res);
                const model = res.data.model;
                setLoading(false);
                sendEmail(model);
            })
            .catch(err => {
                setLoading(false);
                console.log(err)
            });
    };

    return (
        <Layout>
            {loading && <Loader/>}
            <article className={s.submitPage}>
                <MainBlock title={`Submit your game`}/>

                <form
                    className={`container wrapper ${s.formWrapper}`}
                    // onSubmit={handleSubmit}
                >
                    <div className={s.group}>
                        <CustomInput
                            label={`*Name of you game`}
                            name={`gameNameOne`}
                            required={true}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomInput
                            label={`*Your name/Company/Team`}
                            name={`gameNameTwo`}
                            required={true}
                            onChangeHandler={onChangeHandler}
                        />
                    </div>
                    <div className={s.group}>
                        <CustomInput
                            label={`*Contact Name`}
                            name={`contactName`}
                            required={true}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomInput
                            label={`*Email`}
                            type={`email`}
                            name={`contactEmail`}
                            required={true}
                            onChangeHandler={onChangeHandler}
                        />
                    </div>
                    <div className={s.group}>
                        <CustomInput
                            label={`*Company/Game Website`}
                            name={`company`}
                            required={true}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomInput
                            label={`Team Size`}
                            name={`team`}
                            required={true}
                            onChangeHandler={onChangeHandler}
                        />
                    </div>
                    <CustomInput
                        label={`Previous Projects/Company Experience (if any)`}
                        isTypeText={false}
                        name={`prevProject`}
                        onChangeHandler={onChangeHandler}
                    />
                    <CustomInput
                        label={`*Game Description (summary/elevator pitch)`}
                        isTypeText={false}
                        name={`gameDesc`}
                        onChangeHandler={onChangeHandler}
                    />
                    <div className={s.group}>
                        <CustomInput
                            label={`*Game Genre`}
                            name={`genre`}
                            required={true}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomInput
                            label={`*Similar Titles`}
                            name={`similar`}
                            required={true}
                            onChangeHandler={onChangeHandler}
                        />
                    </div>
                    <p>
                        Core Gameplay Features (list at least 3 of the core gameplay features)
                    </p>
                    <div className={s.threeGroup}>
                        <CustomInput
                            label={`Feature 1`}
                            name={`featureOne`}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomInput
                            label={`Feature 2`}
                            name={`featureTwo`}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomInput
                            label={`Feature 3`}
                            name={`featureThree`}
                            onChangeHandler={onChangeHandler}
                        />
                    </div>
                    <div className={s.threeGroup}>
                        <CustomInput
                            label={`Feature 4`}
                            name={`featureFour`}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomInput
                            label={`Feature 5`}
                            name={`featureFive`}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomInput
                            label={`Feature 6`}
                            name={`featureSix`}
                            onChangeHandler={onChangeHandler}
                        />
                    </div>
                    <CustomInput
                        label={`Unique Features`}
                        isTypeText={false}
                        name={`uniqFeature`}
                        onChangeHandler={onChangeHandler}
                    />
                    <CustomInput
                        label={`Estimated Playtime Goal`}
                        isTypeText={false}
                        name={`playTime`}
                        onChangeHandler={onChangeHandler}
                    />
                    <div className={`${s.threeGroup} ${s.margins}`}>
                        <div className={s.boxes}>
                            <p>*Target Platforms</p>
                            <CustomCheckBox
                                text={`PC`}
                                name={`cbxPC`}
                                onChangeHandler={onChangeHandler}
                            />
                            <CustomCheckBox
                                text={`PS4`}
                                name={`cbxPS`}
                                onChangeHandler={onChangeHandler}
                            />
                            <CustomCheckBox
                                text={`Xbox`}
                                name={`cbxXBox`}
                                onChangeHandler={onChangeHandler}
                            />
                            <CustomCheckBox
                                text={`Switch`}
                                name={`cbxSwitch`}
                                onChangeHandler={onChangeHandler}
                            />
                        </div>
                        <div className={s.iWrapper}>
                            <p>Additional Platfroms</p>
                            <CustomInput
                                label={`Optional`}
                                name={`optional`}
                                onChangeHandler={onChangeHandler}
                            />
                        </div>
                        <div className={s.iWrapper}>
                            <p>Release date</p>
                            <CustomInput
                                label={`dd.mm.yyyy`}
                                type={`date`}
                                name={`dateMonth`}
                                onChangeHandler={onChangeHandler}
                            />
                        </div>
                    </div>
                    <CustomInput
                        isTypeText={false}
                        label={'Additional Platfroms'}
                        name={`addPlatform`}
                        onChangeHandler={onChangeHandler}
                    />
                    <CustomInput
                        isTypeText={false}
                        label={'Top Risks'}
                        name={`topRisks`}
                        onChangeHandler={onChangeHandler}
                    />
                    <div className={s.looking}>
                        <p>*What are you looking for from a Publisher like us?</p>
                        <CustomCheckBox
                            text={`Marketing`}
                            name={`cbxMarketing`}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomCheckBox
                            text={`QA`}
                            name={`cbxQA`}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomCheckBox
                            text={`Console Submission Support`}
                            name={`cbxConsole`}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomCheckBox
                            text={`Porting`}
                            name={`cbxPorting`}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomCheckBox
                            text={`Localization`}
                            name={`cbxLocalization`}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomCheckBox
                            text={`Voice Recordings`}
                            name={`cbxVoice`}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomCheckBox
                            text={`Production Support`}
                            name={`cbxProduction`}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomCheckBox
                            text={`Gamedesign Support`}
                            name={`cbxGameDesign`}
                            onChangeHandler={onChangeHandler}
                        />
                        <CustomCheckBox
                            text={`Development Funding`}
                            name={`cbxDevelopment`}
                            onChangeHandler={onChangeHandler}
                        />
                        <div className={s.btnMargins}>
                            <CustomInput
                                label={'Upload your Files'} type={'file'}
                                name={`uploadFile`}
                                onChangeHandler={onChangeHandler}
                            />
                        </div>
                        <CustomInput
                            label={'Paste here URL for files larger than 10 MB'}
                            name={`urlUploadFile`}
                            onChangeHandler={onChangeHandler}
                        />
                    </div>
                    <CustomInput
                        isTypeText={false}
                        label={'Any things you would like help with which are not part of the above list?'}
                        name={`helpList`}
                        onChangeHandler={onChangeHandler}
                    />
                    <div className={s.subBox}>
                        <ButtonPrimary
                            width={`100%`}
                            text={'Submit your game'}
                            onClickHandle={handleSubmit}
                        />
                    </div>
                </form>

            </article>


            {/*<h1>{title}</h1>
            <p>{content}</p>
            <img style={{width: '100%'}} src={image} alt="image"/>*/}

        </Layout>
    );
};

export default SubmitPage;
