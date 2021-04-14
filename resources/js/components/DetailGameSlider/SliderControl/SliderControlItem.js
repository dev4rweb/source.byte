import React from 'react';

const SliderControlItem = ({item, editHandler, deleteHandler, index}) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>
                <img src={item.image} alt="game" height="100px" width="auto"/>
            </td>
            <td>
                <button
                    className="btn btn-primary"
                    onClick={event => editHandler(item)}
                >
                    Edit
                </button>
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
