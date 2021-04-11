import React, {useState, useEffect, useCallback} from 'react';
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../Loader/Loader";
import MainCarouselCardList from "../MainCarouselCardList/MainCarouselCardList";
import CarouselForm from "../CarouselForm/CarouselForm";

const CarouselModule = () => {
    const [mainCarouselItems, setMainCarouselItems] = useState([]);
    const {loading, request} =useHttp();

    const [card, setCard] = useState(null);

    const fetchMainCarouselItems = useCallback(async () => {
        try {
            const fetched = await request('/mCarouselCards');
            setMainCarouselItems(fetched);
            // console.log(fetched)
        } catch (e) {

        }
    }, [request]);

    useEffect(() => {
        fetchMainCarouselItems();
    }, [fetchMainCarouselItems]);


    if (loading) {
        return <Loader/>
    }

    async function deleteHandler(card) {
        console.log(card);
        try {
            const deleteItem = await request(`/api/mCarouselCards/destroy/${card.id}`, 'DELETE');
            console.log(deleteItem);
            setMainCarouselItems(deleteItem.models);
        } catch (e) {

        }
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
