import React from 'react';
import s from './MainCarouselCardList.module.scss'

const MainCarouselCardList = ({cards, editCardHandler, deleteHandler}) => {
    if (!cards.length) {
        return <h1>No cards for Carousel</h1>
    }

    function editHandler(card) {
        // console.log(card);
        editCardHandler(card);
    }

    return (
        <table className={`table text-light ${s.container}`}>
            <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">title</th>
                <th scope="col">content</th>
                <th scope="col">image</th>
                <th scope="col">edit</th>
                <th scope="col">delete</th>
            </tr>
            </thead>
            <tbody>
            {cards.map((card, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{card.title}</td>
                        <td>{card.content}</td>
                        <td><img src={card.image} alt="card"/></td>
                        <td>
                            <button
                                className="btn btn-primary"
                                onClick={(event => editHandler(card))}
                            >
                                Edit
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={(event => deleteHandler(card))}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

export default MainCarouselCardList;
