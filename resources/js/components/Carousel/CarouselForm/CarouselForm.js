import React, {useState, useCallback, useEffect} from 'react';
import s from './CarouselForm.module.scss'
import axios from "axios";
import Loader from "../../Loader/Loader";
import CustomInput from "../../CustomInput/CustomInput";

const CarouselForm = ({
                          card, editCardHandler = null,
                          setMainCarouselItems,
                          mainCarouselItems,
                          editUrl = '/main-carousel/update',
                          createUrl = '/main-carousel/store'
                      }) => {
    const [loading, setLoading] = useState(false);
    const [val, setVal] = useState(card || {
        title: '',
        content: '',
        image: null,
        btnText: '',
        btnUrl: ''
    });


    function changeHandler(e) {
        if (e.currentTarget.name === 'image') {
            // console.log(val);
            setVal({
                ...val,
                [e.currentTarget.name]: e.target.files[0]
            })
        } else {
            // console.log('changeHandler',val);
            setVal({
                ...val,
                [e.currentTarget.name]: e.currentTarget.value
            });
        }
    }

    const onEditHandler = async e => {
        setLoading(true);
        e.preventDefault();
        // console.log('onEditHandler', val);
        const fd = new FormData();
        fd.set('title', val.title);
        fd.set('content', val.content);
        fd.set('image', val.image);
        fd.set('btnText', val.btnText);
        fd.set('btnUrl', val.btnUrl);

        axios.post(`${editUrl}/${val.id}`, fd)
            .then(res => {
                console.log(res);
                setLoading(false);
                // const updateArray = [...mainCarouselItems];
                // console.log('old', res.data.models);
                // updateArray[val] = res.data.model;
                setMainCarouselItems(res.data.models);
                setVal({
                    content: '',
                    title: '',
                    image: null,
                    btnUrl: '',
                    btnText: ''
                });
                if (editCardHandler) {
                    editCardHandler(null);
                }
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    };


    const onCreateHandler = async e => {
        e.preventDefault();
        setLoading(true);
        // console.log('onCreateHandler');
        const fd = new FormData();
        fd.set('title', val.title);
        fd.set('content', val.content);
        fd.set('image', val.image);
        fd.set('btnText', val.btnText);
        fd.set('btnUrl', val.btnUrl);

        axios.post(`${createUrl}`, fd,)
            .then(res => {
                // console.log(res);
                // console.log(res.data.model);
                setLoading(false);
                // update UI
                const updateState = [...mainCarouselItems, res.data.model];
                setMainCarouselItems(updateState);

                setVal({
                    content: '',
                    title: '',
                    image: null,
                    btnUrl: '',
                    btnText: ''
                });
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    };

    if (card) {
        // console.log(card);
        return (
            <div className={`${s.carouselForm} mb-5`}>
                {loading && <Loader/>}
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        aria-describedby="titleHelp"
                        value={val.title}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Content
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="content"
                        value={val.content}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <CustomInput
                        label={'Upload your Files'} type={'file'}
                        name={'image'}
                        onChangeHandler={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Button text
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="btnText"
                        value={val.btnText}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Button Link
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="btnUrl"
                        value={val.btnUrl}
                        onChange={changeHandler}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={onEditHandler}
                >
                    Change
                </button>
            </div>
        )
    }

    if (!card) {
        return (
            <div className={s.carouselForm}>
                {loading && <Loader/>}
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        aria-describedby="titleHelp"
                        value={val.title}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Content
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="content"
                        value={val.content}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <CustomInput
                        label={'Upload your Files'} type={'file'}
                        name={'image'}
                        onChangeHandler={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Button text
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name='btnText'
                        value={val.btnText}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Button Link
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="btnUrl"
                        value={val.btnUrl}
                        onChange={changeHandler}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={onCreateHandler}
                >
                    Create
                </button>
            </div>
        )
    }
};

export default CarouselForm;
