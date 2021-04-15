import React, {useState} from 'react';
import CustomInput from "../../CustomInput/CustomInput";

const SliderControlForm = ({onCreateHandler}) => {
    // console.log('SliderControlForm');
    const [state, setState] = useState({
        image: null
    });

    const submitHandler = e => {
        e.preventDefault();
        // console.log('onCreateHandler', state);
        onCreateHandler(state.image);
    };

    function changeHandler(e) {
        // console.log('changeHandler', state);
        setState({
            ...state,
            [e.currentTarget.name]: e.target.files[0]
        })
    }

    return (
        <div>
            <div className="mb-3">
                <CustomInput
                    label={'Upload your Files'} type={'file'}
                    name={'image'}
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
};

export default SliderControlForm;
