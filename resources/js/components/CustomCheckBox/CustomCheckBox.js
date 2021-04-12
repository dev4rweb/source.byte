import React, {useState} from 'react';
import './customCheckBox.scss'

const CustomCheckBox = ({
                            text, onChangeHandler = null,
                            name = "name", isChecked = null
                        }) => {
    const [checked, setChecked] = useState(false);
    const [whiteText, setWhiteText] = useState('');

    function checkHandler(event) {
        // console.log('checked', checked);
        setChecked(!checked);
        checked ? setWhiteText('') : setWhiteText('checked');
        if (onChangeHandler) {
            onChangeHandler(event, true);
        }
        // return checked;
    }

    return (

        <div>
            <label className={`customCheckBox`}>
                <input
                    type="checkbox"
                    onChange={checkHandler}
                    value={checked}
                    name={name}
                    checked={checked}
                />
                <span className="checkmark"/>
                <i className={whiteText}>{text ?? 'text'}</i>
            </label>
        </div>
    );
};

export default CustomCheckBox;
