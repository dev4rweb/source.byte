import React, {useState, useEffect, useCallback} from 'react';
import s from "./NewsCardsBlock.module.scss";
import NewsCard from "../NewsCard/NewsCard";
import imgOne from "../../../assets/img/png/new-one.png";
import imgTwo from "../../../assets/img/png/new-two.png";
import imgThree from "../../../assets/img/png/new-three.png";
import {useHttp} from "../../hooks/http.hook";
import Loader from "../Loader/Loader";

const NewsCardsBlock = () => {
    const [news, setNews] = useState([
        {
            title: 'Source Byte: Inside',
            contentOne: 'In the previous parts, we wrote about how to get started developing a game in VR, and how game designers work when creating games in VR. In this article, we will',
            mainImage: imgOne
        },
        {
            title: 'Jobs Available Now!',
            contentOne: 'From the game design point of viev, virtual reality is a sea of ​​unique possibilities. The paths of player interaction with the game aren\'t yet fully fixed in VR',
            mainImage: imgTwo
        },
        {
            title: 'Looking for a Publisher?',
            contentOne: 'Our new game Playground VR released on Steam! In this blog, we want to share the features of developing games in virtual reality (we already have two!), And also',
            mainImage: imgThree
        },
    ]);
    const {request, loading} = useHttp();

    const getThreeRecords = useCallback(async () => {
        try {
            const fetched = await request('/detailNewsPage/getThreeLast');
            console.log('getThreeRecords', fetched);
            setNews(fetched.models)
        } catch (e) {
            console.log(e);
        }
    }, [request]);

    useEffect(() => {
        getThreeRecords()
    }, [getThreeRecords]);

    if (loading) {
        return <Loader/>
    }

    return (
        <div className={s.cardWrapper}>
            {news.map((card, index) => {
                return (
                    <NewsCard
                        key={index}
                        item={card}
                    />
                )
            })}
        </div>
    );
};

export default NewsCardsBlock;
/*                    <NewsCard
                        key={index}
                        img={card.mainImage}
                        title={card.title}
                        content={card.contentOne.slice(0, 200) + '...'} // cut first 200 charts
                    />*/
