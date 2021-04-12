import React, {createRef, useState} from 'react';
import s from './CustomInput.module.scss'
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";

const CustomInput = ({
                         isTypeText = true, label, type = 'text',
                         name = "name", onChangeHandler = null,
                         required = false
                     }) => {
    let title = label ?? 'Username';

    const [state, setState] = useState('');

    function handleChange(event) {
        // console.log('handleChange', event.currentTarget.name);

        setState({
            ...state,
            [event.currentTarget.name]: event.currentTarget.value
        });

        if (onChangeHandler) {
            onChangeHandler(event);
        }
    }

    if (isTypeText) {
        if (type === 'file') {
            const [text, setText] = useState(label);
            let btn = createRef();

            function uploadFile() {
                // console.log('upload')
                btn.current.click();
            }

            function changeHandler(e) {
                // console.log(e.target.value);
                let filename = e.target.value;
                filename = filename.replace(/^.*[\\\/]/, '');
                setText(filename);
                handleChange(e);
            }

            return (
                <>
                    {/*<label htmlFor="uploadPhoto"/>*/}
                    <input
                        ref={btn}
                        type="file"
                        name={name}
                        aria-label={title}
                        onChange={changeHandler}
                        style={{display: 'none'}}
                    />

                    <ButtonSecondary
                        maxWidth={`440px`}
                        uploadFile={uploadFile}
                        text={text}
                    />
                </>
            );
        } else {
            return (
                <input
                    type={type}
                    className={`form-control ${s.customInput}`}
                    placeholder={title}
                    aria-label={title}
                    name={name}
                    onChange={handleChange}
                    required={required}
                />
            );
        }
    } else {
        return (
            <div className="form-floating">
                <textarea
                    className={`form-control ${s.customInput}`}
                    placeholder={title}
                    id="floatingTextarea"
                    name={name}
                    style={{height: '110px'}}
                    onChange={handleChange}
                />
                <label htmlFor="floatingTextarea">{title}</label>
            </div>
        )
    }

};

export default CustomInput;
