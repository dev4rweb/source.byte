import React, {useEffect, useCallback, useState} from 'react';
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../Loader/Loader";
import MainCarouselCardList from "../../Carousel/MainCarouselCardList/MainCarouselCardList";
import CarouselForm from "../../Carousel/CarouselForm/CarouselForm";
import axios from "axios";


const SecondCarouselModule = () => {
    const [state, setState] = useState(null);
    const {loading, request} = useHttp();
    const [card, setCard] = useState(null);
    const [load, setLoad] = useState(false);

    const fetchTable = useCallback(async () => {
        try {
            const fetched = await request('/secondCarousel');
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
        setLoad(true);
        axios.delete(`/secondCarousel/destroy/${card.id}`)
            .then(res => {
                setLoad(false);
                console.log(res);
                setState(res.data.models)
            })
            .catch(err => {
                setLoad(false);
                console.log(err);
            });
    };

    const editCardHandler = card => {
        // console.log(card);
        setCard(card);
    };

    if (loading || load) {
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
                editUrl={'/secondCarousel/update'}
            />
            }

            {!card &&
            <CarouselForm
                mainCarouselItems={state}
                setMainCarouselItems={setState}
                createUrl={'/secondCarousel/create'}
            />
            }
        </div>
    );
};

export default SecondCarouselModule;
