import React from 'react';
import s from '../SubmitPage/SubmitPage.module.scss';
import Layout from "../../components/Layout/Layout";
import MainBlock from "../../components/MainBlock/MainBlock";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomCheckBox from "../../components/CustomCheckBox/CustomCheckBox";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";

const ApplyJobPage = ({applyJobPage}) => {
    /*const title = applyJobPage[0].title || 'title';
    const content = applyJobPage[0].content || 'content';
    const image = applyJobPage[0].image || '';*/
    return (
        <Layout>
            <article className={s.submitPage}>
                <MainBlock title={`Are you looking for a job?`}/>
                <section className={`container wrapper ${s.formWrapper}`}>
                    <div className={s.group}>
                        <CustomInput label={`*Name`} type={`text`}/>
                        <CustomInput label={`Country`} type={`text`}/>
                    </div>
                    <div className={s.group}>
                        <CustomInput label={`*Email`} type={`email`}/>
                        <CustomInput label={`Your Website`} type={`url`}/>
                    </div>
                    <CustomInput
                        label={`Previous Projects/Company Experience (if any)`}
                        isTypeText={false}
                    />
                    <div className={`${s.group} ${s.margins}`}>
                        <div className={s.boxes}>
                            <p>*Target Platforms</p>
                            <CustomCheckBox text={`Unity Game Developer`}/>
                            <CustomCheckBox text={`Unreal Game Developer`}/>
                            <CustomCheckBox text={`3D Designer`}/>
                            <CustomCheckBox text={`Pixel Artist`}/>
                            <CustomCheckBox text={`Marketing Specialist`}/>
                            <CustomCheckBox text={`Web Developer`}/>
                            <CustomCheckBox text={`C# Developer`}/>
                            <CustomCheckBox text={`Graphic Designer`}/>
                            <CustomCheckBox text={`Writer`}/>
                            <CustomCheckBox text={`Level Designer`}/>
                            <CustomCheckBox text={`Game Designer`}/>
                            <CustomCheckBox text={`Composer`}/>
                            <CustomCheckBox text={`Other`}/>
                        </div>
                        <CustomInput label={`Your Website`} type={`url`}/>
                    </div>

                    <CustomInput
                        label={`Impress us`}
                        isTypeText={false}
                    />

                    <CustomInput
                        label={`How much you would like to earn?`}
                        isTypeText={false}
                    />

                    <div className={s.uploadFileWrapper}>
                        <p>You can upload your CV</p>
                        <div className={s.box}>
                            <CustomInput label={`Your Website`} type={`file`}/>
                            <CustomInput label={`Your Website`} type={`url`}/>
                        </div>
                    </div>


                    <CustomInput
                        label={`Any things you would like help with which are not part of the abouve list`}
                        isTypeText={false}
                    />

                    <div className={s.margins}>
                        <ButtonPrimary text={'Send'} width={`100%`} />
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
