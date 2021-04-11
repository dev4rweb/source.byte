import React, {useState} from 'react';
import './InputSelect.scss';

const InputSelect = ({placeHolder, height}) => {
    const hint = placeHolder ? placeHolder : "Category";
    const h = height ? height : '64px';
    const [selected, setSelected] = useState(true);

    return (
        <select className="form-select" aria-label="Default select example" style={{height: h}}>
            <option defaultValue={selected}>{hint}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    );
};

export default InputSelect;