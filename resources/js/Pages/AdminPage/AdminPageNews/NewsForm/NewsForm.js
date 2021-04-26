import React, {useState} from 'react';
import CustomInput from "../../../../components/CustomInput/CustomInput";

const NewsForm = ({
                      card,
                      createHandler = null,
                      updateHandler = null
                  }) => {

    const [state, setState] = useState(card || {
        title: '', content: '', mainImage: null, category: '',
        description: '', altImage: '', blockquote: '', lastContent: '',
        lastImage: null, list: '', postContent: '', subtitle: '', subContent: ''
    });

    const [btnText, setBtnText] = useState('Upload your Files');

    function changeHandler(e) {
        if (e.currentTarget.name === 'mainImage' ||
            e.currentTarget.name === 'lastImage') {
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
                <h2>Change Form</h2>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Category</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="category"
                        placeholder="divide category by comma"
                        value={state.category ?? ''}
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
                        <h5>Title</h5>
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
                    <label><h5 className="text-light">Description</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="description"
                        value={state.description ?? ''}
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
                    <label><h5 className="text-light">Sub Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="subContent"
                        value={state.subContent ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Blockquote</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="blockquote"
                        value={state.blockquote ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Post Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="postContent"
                        value={state.postContent ?? ''}
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

                <div className="mb-5">
                    <label className="text-light me-3">
                        <h5>Last Image</h5>
                    </label>
                    <CustomInput
                        label={btnText} type={'file'}
                        name={'lastImage'}
                        onChangeHandler={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Alt Image</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="altImage"
                        value={state.altImage ?? ''}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Last content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="lastContent"
                        value={state.lastContent ?? ''}
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
        )
    }

    if (!card) {
        return (
            <div className="mb-5 mt-5">
                <h2>Create Form</h2>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Category</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="category"
                        placeholder="divide category by comma"
                        value={state.category}
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
                        <h5>Title</h5>
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
                    <label><h5 className="text-light">Description</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="description"
                        value={state.description}
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
                    <label><h5 className="text-light">Sub Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="subContent"
                        value={state.subContent}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Blockquote</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="blockquote"
                        value={state.blockquote}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Post Content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="postContent"
                        value={state.postContent}
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

                <div className="mb-5">
                    <label className="text-light me-3">
                        <h5>Last Image</h5>
                    </label>
                    <CustomInput
                        label={btnText} type={'file'}
                        name={'lastImage'}
                        onChangeHandler={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Alt Image</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="altImage"
                        value={state.altImage}
                        onChange={changeHandler}
                    />
                </div>

                <div className="mb-5">
                    <label><h5 className="text-light">Last content</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="Leave a content here"
                        name="lastContent"
                        value={state.lastContent}
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

export default NewsForm;
