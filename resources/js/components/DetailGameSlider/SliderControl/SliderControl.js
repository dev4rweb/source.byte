import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import Loader from "../../Loader/Loader";
import SliderControlItem from "./SliderControlItem";

const SliderControl = ({card}) => {

    const [carousel, setCarousel] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchedCarousel = useCallback(()=> {
        setLoading(true);
        axios.get(`/game-carousel/${card.id}`)
            .then(res => {
                setLoading(false);
                console.log(res);
                setCarousel(res.data.models)
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }, []) ;

    useEffect(() => {
        fetchedCarousel();
    }, [fetchedCarousel]);

    function editHandler(card) {
        console.log('editHandler', card);
    }

    async function deleteHandler(item) {
        console.log('deleteHandler', item);
    }

    if (loading) {
        return <Loader/>
    }


    return (
        <div>
            <h2>Game Carousel</h2>
            <table className="table text-light">
                <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Image</th>
                    <th scope="col">edit</th>
                    <th scope="col">delete</th>
                </tr>
                </thead>
                <tbody>
            {!loading && carousel && carousel.map((item, index) => {
                return (
                    <SliderControlItem
                        key={index}
                        item={item}
                        index={index}
                        deleteHandler={deleteHandler}
                        editHandler={editHandler}
                    />
                )
            })}
                </tbody>
            </table>
        </div>
    );
};

export default SliderControl;
