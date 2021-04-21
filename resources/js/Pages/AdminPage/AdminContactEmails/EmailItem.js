import React from 'react';

const EmailItem = ({item, deleteHandler}) => {
    // console.log('EmailItem', item);
    return (
        <div className="mb-5 container border border-warning border-3 p-3">
            {item.name && <h2>Name: {item.name}</h2>}
            {item.email && <h3>Email: {item.email}</h3>}
            {item.phone && <h3>Phone: {item.phone}</h3>}
            {item.msg && <p>Message: {item.msg}</p>}
            <button
                className="btn btn-danger"
                onClick={event => deleteHandler(item)}
            >
                Delete
            </button>
        </div>
    );
};

export default EmailItem;
