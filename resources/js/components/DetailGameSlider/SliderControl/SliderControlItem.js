import React from 'react';

const SliderControlItem = ({item, deleteHandler, index}) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>
                <img src={item.image} alt="game" height="100px" width="auto"/>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={event => deleteHandler(item)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default SliderControlItem;
