import React, {useState} from 'react';
import CustomInput from "../../../../components/CustomInput/CustomInput";
import SliderControl from "../../../../components/DetailGameSlider/SliderControl/SliderControl";


const GameForm = ({
    card,
    createHandler = null,
    updateHandler = null
                  }) => {
    const [state, setState] = useState(card || {
        title: '', content: '', mainImage: null, category: '',
        video: '', subtitle: '', subContent: '', listTitle: '',
        list: '', subtitleTwo: '', contentTwo: ''
    });


    const [btnText, setBtnText] = useState('Upload your Files');



    function changeHandler(e) {
        if (e.currentTarget.name === 'mainImage') {
            setState({
                ...state,
                [e.currentTarget.name]: e.target.files[0]
            });
        } else {
            setState({
                ...state,
                [e.currentTarget.name]: e.currentTarget.value
            })
        }
    }

    function submitHandler() {
        if (card) {
            // console.log('updateHandler');
            updateHandler(state)
        } else {
            // console.log('createHandler');
            createHandler(state);
        }
    }

    if (card) {
        return (

            <div className="mb-5 mt-5">
                <SliderControl card={card}/>
                <h2>Edit Form</h2>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Name</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={state.title ?? ''}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="content"
                        value={state.content ?? ''}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label className="text-light me-3">
                        <h5>Main Image</h5>
                    </label>
                    <CustomInput
                        label={btnText} type={'file'}
                        name={'mainImage'}
                        onChangeHandler={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Category</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="category"
                        value={state.category ?? ''}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Video Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="video"
                        value={state.video ?? ''}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Subtitle</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="subtitle"
                        value={state.subtitle ?? ''}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">Additional Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a additional content here"
                        name="subContent"
                        value={state.subContent ?? ''}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>List Title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="listTitle"
                        value={state.listTitle ?? ''}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">List</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="divide line with *-"
                        name="list"
                        value={state.list ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Game Play Title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="subtitleTwo"
                        value={state.subtitleTwo ?? ''}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">Content of Gameplay</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="content"
                        name="contentTwo"
                        value={state.contentTwo ?? ''}
                        onChange={changeHandler}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={submitHandler}
                >
                    Change
                </button>
            </div>
        );
    }

    if (!card) {
        return (
            <div className="mb-5 mt-5">
                <h2>Create Form</h2>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Name</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={state.title}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="content"
                        value={state.content}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label className="text-light me-3">
                        <h5>Main Image</h5>
                    </label>
                    <CustomInput
                        label={btnText} type={'file'}
                        name={'mainImage'}
                        onChangeHandler={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Category</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="category"
                        value={state.category}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Video Link</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="video"
                        value={state.video}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Subtitle</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="subtitle"
                        value={state.subtitle}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">Additional Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a additional content here"
                        name="subContent"
                        value={state.subContent}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>List Title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="listTitle"
                        value={state.listTitle}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">List</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="divide line with *-"
                        name="list"
                        value={state.list}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Game Play Title</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="subtitleTwo"
                        value={state.subtitleTwo}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">Content of Gameplay</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="content"
                        name="contentTwo"
                        value={state.contentTwo}
                        onChange={changeHandler}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={submitHandler}
                >
                    Create
                </button>
            </div>
        )
    }
};

export default GameForm;
