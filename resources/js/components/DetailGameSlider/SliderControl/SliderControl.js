import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import Loader from "../../Loader/Loader";
import SliderControlItem from "./SliderControlItem";
import SliderControlForm from "./SliderControlForm";

const SliderControl = ({card}) => {

    const [carousel, setCarousel] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchedCarousel = useCallback(()=> {
        setLoading(true);
        axios.get(`/game-carousel/${card.id}`)
            .then(res => {
                setLoading(false);
                // console.log(res);
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


    async function deleteHandler(item) {
        // console.log('deleteHandler', item);
        setLoading(true);
        axios.delete(`/game-carousel/destroy/${item.id}`)
            .then(res => {
                setLoading(false);
                // console.log(res);
                fetchedCarousel();
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }

    function onCreateHandler (image)  {
        setLoading(true);
        // console.log('onCreateHandler', image);
        const fd = new FormData();
        fd.set('gameId', card.id);
        fd.set('image', image);

        axios.post('/game-carousel/create', fd)
            .then(res => {
                setLoading(false);
                // console.log(res);
                setCarousel(res.data.models)
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
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
                    />
                )
            })}
                </tbody>
            </table>
            <SliderControlForm onCreateHandler={onCreateHandler} />
        </div>
    );
};

export default SliderControl;
