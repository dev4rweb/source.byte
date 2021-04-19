import React from 'react';

const NewsItem = ({item, index, editHandler, deleteHandler}) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.title}</td>
            <td>{item.content}</td>
            <td>
                <img src={item.mainImage} alt="game" height="100px" width="auto"/>
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

export default NewsItem;
