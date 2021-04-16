import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import './multiCarousel.scss'
import imgGames1 from '../../../assets/img/png/games1.png';
import imgGames2 from '../../../assets/img/png/games2.png';
import imgGames3 from '../../../assets/img/png/games3.png';
import imgGames4 from '../../../assets/img/png/games4.png';
import imgGames5 from '../../../assets/img/png/games2.png';
import axios from "axios";

class MultiCarousel extends React.Component {
    /*https://github.com/trmofsln/Testing-Multiple_carousel-ReactJs*/

    constructor(props) {
        super(props);
        this.state = {
            imgList: null,
            title: null,
            gameId: null,
            interval: 0,
            //  next++ prev--
            activeFirsrtIndex: 0,
            activeIndexs: [],
            translateIndexList: [],
            showItems: 4,
            step: 1,
            loading: false
        };
        this.fetchGames = this.fetchGames.bind(this);
        this.updateTranslates = this.updateTranslates.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.getTranslateX = this.getTranslateX.bind(this);
    }

    fetchGames() {
        this.setState({loading: true});
        axios.get('/games-all')
            .then(res => {

                this.setState({loading: false});
                console.log(res);
                this.updateState(res.data.models)
            })
            .catch(err => {

                this.setState({loading: false});
                console.log(err);
            });

        console.log(this.state.games);
    }

    next() {
        this.updateTranslates(-this.state.step);
    }

    prev() {
        this.updateTranslates(this.state.step);
    }

    getClassName(index) {
        return "div-item";
    }

    getTranslateX(index) {
        let self = this;
        let {translateIndexList, showItems} = self.state;
        let x = translateIndexList[index] * 330 + "px";
        let v = translateIndexList[index];
        if (v < 0 || v > showItems - 1) {
            return {
                left: x,
                opacity: 0
            };
        } else {
            return {
                left: x,
                transition: "all ease-in-out 0.4s"
            };
        }
    }

    initCarousel() {
        let self = this;
        let {
            imgList,
            activeFirsrtIndex,
            activeIndexs,
            translateIndexList,
            title,
            gameId
        } = self.state;
        let len = imgList.length;
        imgList = imgList.concat(imgList, imgList);
        title = title.concat(title, title);
        gameId = gameId.concat(gameId, gameId);
        for (let i = -len; i < len + len; i++) {
            translateIndexList.push(i);
        }
        //
        self.setState({
            title,
            imgList,
            gameId,
            activeFirsrtIndex,
            activeIndexs,
            translateIndexList
        });
    }

    updateState(models) {
        console.log('updateState', models);
        let images = [];
        let titles = [];
        let gameIds = [];
        models.forEach(el => {
            images.push(el.mainImage);
            titles.push(el.title);
            gameIds.push(el.id)
        });
        this.setState({
            imgList: images,
            title: titles,
            gameId: gameIds
        });
        this.initCarousel();
    }

    updateTranslates(step) {
        let self = this;
        let {imgList, translateIndexList} = self.state;
        //  4
        let len = imgList.length / 3;
        //
        translateIndexList = translateIndexList.map(index => {
            let i = index + step;
            //  -4
            if (i < -len) {
                // 7
                return len + len - 1;
                // 7
            } else if (i > len + len - 1) {
                // -4
                return -len;
            } else {
                return i;
            }
        });
        // console.log("debug translateIndexList sadsada", translateIndexList);
        self.setState({translateIndexList});
    }

    componentDidMount() {
        let self = this;
        this.fetchGames();
        // self.initCarousel();
        let interval = setInterval(() => {
            self.next();
        }, 3000);
        this.setState({interval});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        let {imgList, activeIndexs, translateIndexList, title, loading, gameId} = this.state;
        return (
            <div>
                {!loading && title && imgList &&
                <div className="m-carousel-wrapper">

                    <button className="m-arrow m-next" onClick={this.next}><i className={`icArrowRight`}/></button>
                    <button className="m-arrow m-prev" onClick={this.prev}><i className={`icArrowLeft`}/></button>
                    <div className="multiCarousel">
                        {imgList && imgList.map((img, i) => (
                            <InertiaLink
                                href={`/games/${gameId[i]}`}
                                className={this.getClassName(i)}
                                style={this.getTranslateX(i)}
                                key={i}
                            >
                                <img className="img-item" alt={i} src={imgList[i]}/>
                                <p className="cart-title">{title[i]}</p>
                            </InertiaLink>
                        ))}
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default MultiCarousel;
