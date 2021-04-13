import React from 'react';

const TeamItem = ({item, index, deleteHandler, editHandler}) => {

    if (item) {
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.pos}</td>
                <td><img src={item.photo} alt="card" height="100px" width="auto"/></td>
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
        )
    }
};

export default TeamItem;
