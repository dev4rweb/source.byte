import React, {useEffect, useCallback, useState} from 'react';
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../Loader/Loader";
import MainCarouselCardList from "../../Carousel/MainCarouselCardList/MainCarouselCardList";
import CarouselForm from "../../Carousel/CarouselForm/CarouselForm";


const SecondCarouselModule = () => {
    const [state, setState] = useState(null);
    const {loading, request} = useHttp();
    const [card, setCard] = useState(null);

    const fetchTable = useCallback(async () => {
        try {
            const fetched = await request('/api/secondCarousel');
            // console.log(fetched);
            setState(fetched);
        } catch (e) {

        }
    }, [request]);

    useEffect(() => {
        fetchTable()
    }, [fetchTable]);

    const deleteHandler = async card => {
        // console.log('deleteHandler', card);
        try {
            const deleteItem = await request(`/api/secondCarousel/destroy/${card.id}`, 'DELETE');
            // console.log(deleteItem);
            setState(deleteItem.models);
        } catch (e) {

        }
    };

    const editCardHandler = card => {
        // console.log(card);
        setCard(card);
    };

    if (loading) {
        return <Loader/>
    }
    return (
        <div>
            {!loading && state &&
            <MainCarouselCardList
                cards={state}
                editCardHandler={editCardHandler}
                deleteHandler={deleteHandler}
            />
            }

            {card &&
            <CarouselForm
                card={card}
                editCardHandler={editCardHandler}
                mainCarouselItems={state}
                setMainCarouselItems={setState}
                editUrl={'/api/secondCarousel/update/'}
            />
            }

            {!card &&
            <CarouselForm
                mainCarouselItems={state}
                setMainCarouselItems={setState}
                createUrl={'/api/secondCarousel/create'}
            />
            }
        </div>
    );
};

export default SecondCarouselModule;
