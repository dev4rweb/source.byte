import React, {useState} from 'react';

const JobForm = ({
                     card,
                     createHandler = null,
                     updateHandler = null
                 }) => {

    const [state, setState] = useState(card || {
        position: '', description: '', titleOne: '', titleTwo: '', titleThree: '',
        listOne: '', listTwo: '', listThree: ''
    });

    function changeHandler(e) {
        setState({
            ...state,
            [e.currentTarget.name]: e.currentTarget.value
        })
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
                <h2>Create Position</h2>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Position</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="position"
                        placeholder="write position here"
                        value={state.position ?? ''}
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

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Title One</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="titleOne"
                        placeholder="Title one"
                        value={state.titleOne ?? ''}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">List</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="divide line with *-"
                        name="listOne"
                        value={state.listOne ?? ''}
                        onChange={changeHandler}
                    />
                </div>


                <div className="mb-3">
                    <label className="text-light">
                        <h5>Title Two</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="titleTwo"
                        placeholder="Title Two"
                        value={state.titleTwo ?? ''}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">List</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="divide line with *-"
                        name="listTwo"
                        value={state.listTwo ?? ''}
                        onChange={changeHandler}
                    />
                </div>


                <div className="mb-3">
                    <label className="text-light">
                        <h5>Title Three</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="titleThree"
                        placeholder="Title Three"
                        value={state.titleThree ?? ''}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">List</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="divide line with *-"
                        name="listThree"
                        value={state.listThree ?? ''}
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
                <h2>Create Position</h2>

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Position</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="position"
                        placeholder="write position here"
                        value={state.position}
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

                <div className="mb-3">
                    <label className="text-light">
                        <h5>Title One</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="titleOne"
                        placeholder="Title one"
                        value={state.titleOne}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">List</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="divide line with *-"
                        name="listOne"
                        value={state.listOne}
                        onChange={changeHandler}
                    />
                </div>


                <div className="mb-3">
                    <label className="text-light">
                        <h5>Title Two</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="titleTwo"
                        placeholder="Title Two"
                        value={state.titleTwo}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">List</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="divide line with *-"
                        name="listTwo"
                        value={state.listTwo}
                        onChange={changeHandler}
                    />
                </div>


                <div className="mb-3">
                    <label className="text-light">
                        <h5>Title Three</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="titleThree"
                        placeholder="Title Three"
                        value={state.titleThree}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label><h5 className="text-light">List</h5></label>
                    <textarea
                        className="form-control"
                        placeholder="divide line with *-"
                        name="listThree"
                        value={state.listThree}
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
        );
    }
};

export default JobForm;
