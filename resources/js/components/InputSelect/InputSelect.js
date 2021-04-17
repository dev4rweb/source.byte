import React, {useState, useCallback, useEffect} from 'react';
import './InputSelect.scss';

const InputSelect = ({placeHolder, height, data = null, sortHandler = null, filterHandler = null}) => {
    // console.log('InputSelect', data);

    const hint = placeHolder ? placeHolder : "all";
    const h = height ? height : '64px';
    const [selected, setSelected] = useState({
        value: hint
    });
    const [category, setCategory] = useState(null);

    const fetchSelected = useCallback(() => {
        if (data) {
            setCategory(data);
        }
    }, [data]);

    useEffect(() => {
        fetchSelected()
    }, [fetchSelected]);

    function changeHandler(e) {
        // console.log('value', e.target.value);
        setSelected({value: e.target.value});
        if (filterHandler) {
            filterHandler(e.target.value)
        }
    }

    /*https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down*/
    return (
        category &&
        <select
            className="form-select"
            aria-label="Default select example"
            style={{height: h}}
            onChange={changeHandler}
            value={selected.value}
        >
            <option value={hint}>{hint}</option>
            {category.map((item, index) => {
                return (
                    <option key={index} value={item}>{item}</option>
                )
            })}
            {/*            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>*/}
        </select>
    );
};

export default InputSelect;
