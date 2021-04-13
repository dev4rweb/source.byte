import React, {useState} from 'react';
import CustomInput from "../../../../components/CustomInput/CustomInput";

const TeamForm = ({
                      card, createHandler = null,
                      updateHandler = null
                  }) => {
    const [state, setState] = useState(card || {
        name: '', pos: '', photo: null
    });
    const [btnText, setBtnText] = useState('Upload your Files');

    function changeHandler(e) {
        if (e.currentTarget.name === 'photo') {
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
            console.log('updateHandler');
            updateHandler(state)
        } else {
            console.log('createHandler');
            createHandler(state);
        }
    }

    if (card) {
        return (
            <div>
                <h2>Edit Form</h2>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Name</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={state.name}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Position</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="pos"
                        value={state.pos}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label className="text-light me-3">
                        <h5>Photo</h5>
                    </label>
                    <CustomInput
                        label={btnText} type={'file'}
                        name={'photo'}
                        onChangeHandler={changeHandler}
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
            <div>
                <h2>Create Form</h2>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Name</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={state.name}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="text-light">
                        <h5>Position</h5>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="pos"
                        value={state.pos}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-5">
                    <label className="text-light me-3">
                        <h5>Photo</h5>
                    </label>
                    <CustomInput
                        label={btnText} type={'file'}
                        name={'photo'}
                        onChangeHandler={changeHandler}
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

export default TeamForm;
