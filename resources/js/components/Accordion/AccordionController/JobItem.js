import React from 'react';

const JobItem = ({item, index, editHandler, deleteHandler}) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.position}</td>
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

export default JobItem;
