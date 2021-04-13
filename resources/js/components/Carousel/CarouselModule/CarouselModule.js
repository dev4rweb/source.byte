import React, {useState, useEffect, useCallback} from 'react';
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../Loader/Loader";
import MainCarouselCardList from "../MainCarouselCardList/MainCarouselCardList";
import CarouselForm from "../CarouselForm/CarouselForm";
import axios from "axios";

const CarouselModule = () => {
    const [mainCarouselItems, setMainCarouselItems] = useState([]);
    const {loading, request} =useHttp();
    const [load, setLoad] = useState(false);
    const [card, setCard] = useState(null);

    const fetchMainCarouselItems = useCallback(async () => {
        try {
            const fetched = await request('/main-carousel');
            setMainCarouselItems(fetched);
            // console.log(fetched)
        } catch (e) {

        }
    }, [request]);

    useEffect(() => {
        fetchMainCarouselItems();
    }, [fetchMainCarouselItems]);


    if (loading || load) {
        return <Loader/>
    }

    async function deleteHandler(card) {
        // console.log(card);
        setLoad(true);
        axios.delete(`/main-carousel/destroy/${card.id}`)
            .then(res => {
                setLoad(false);
                // console.log(res);
                setMainCarouselItems(res.data.models);
            })
            .catch(err => {
                console.log(err);
                setLoad(false);
            });
    }

    function editCardHandler(card) {
        // console.log(card);
        setCard(card);
    }
    return (
        <div>
            {!loading &&
            <MainCarouselCardList
                cards={mainCarouselItems}
                editCardHandler={editCardHandler}
                deleteHandler={deleteHandler}
            />}

            {card &&
            <CarouselForm
                card={card}
                editCardHandler={editCardHandler}
                setMainCarouselItems={setMainCarouselItems}
                mainCarouselItems={mainCarouselItems}
            />}


            {!card &&
            <CarouselForm
                setMainCarouselItems={setMainCarouselItems}
                mainCarouselItems={mainCarouselItems}
            />

            }
        </div>
    );
};

export default CarouselModule;
