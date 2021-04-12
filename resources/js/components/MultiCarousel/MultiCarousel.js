import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import './multiCarousel.scss'
import imgGames1 from '../../../assets/img/png/games1.png';
import imgGames2 from '../../../assets/img/png/games2.png';
import imgGames3 from '../../../assets/img/png/games3.png';
import imgGames4 from '../../../assets/img/png/games4.png';
import imgGames5 from '../../../assets/img/png/games2.png';

class MultiCarousel extends React.Component {
    /*https://github.com/trmofsln/Testing-Multiple_carousel-ReactJs*/
    constructor(props) {
        super(props);
        this.state = {
            imgList: [
                imgGames1, imgGames2, imgGames3, imgGames4, imgGames5
            ],
            title: [
                /*'Bocce VR Simulator', 'Time for quest',*/
                'Long name for demonstation two-line variant of title',
                /*'Royal resque', 'Royal resque'*/
            ],
            interval: 0,
            //  next++ prev--
            activeFirsrtIndex: 0,
            activeIndexs: [],
            translateIndexList: [],
            showItems: 4,
            step: 1
        };
        this.updateTranslates = this.updateTranslates.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.getTranslateX = this.getTranslateX.bind(this);
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
        let { translateIndexList, showItems } = self.state;
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
            translateIndexList
        } = self.state;
        let len = imgList.length;
        imgList = imgList.concat(imgList, imgList);
        for (let i = -len; i < len + len; i++) {
            translateIndexList.push(i);
        }
        //
        self.setState({
            imgList,
            activeFirsrtIndex,
            activeIndexs,
            translateIndexList
        });
    }

    updateTranslates(step) {
        let self = this;
        let { imgList, translateIndexList } = self.state;
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
        self.setState({ translateIndexList });
    }

    componentDidMount() {
        let self = this;
        self.initCarousel();
        let interval = setInterval(() => {
            self.next();
        }, 3000);
        this.setState({ interval });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        let { imgList, activeIndexs, translateIndexList } = this.state;
        return (
            <div className="m-carousel-wrapper">
                {/*<h1>Hello React-pure-simple-multiple-carousel</h1>
                <p>{activeIndexs.join(";")}</p>
                <p>{translateIndexList.join(";")}</p>
                <p>{imgList.length}</p>*/}
                <button className="m-arrow m-next" onClick={this.next}><i className={`icArrowRight`}/></button>
                <button className="m-arrow m-prev" onClick={this.prev}><i className={`icArrowLeft`}/></button>
                <div className="multiCarousel">
                    {imgList.map((img, i) => (
                        <InertiaLink
                            // href={route("gameId.index").url()}
                            className={this.getClassName(i)}
                            style={this.getTranslateX(i)}
                            key={i}
                        >
                            <img className="img-item" alt={i} src={img} />
                            <p className="cart-title">{this.state.title}</p>
                        </InertiaLink>
                    ))}
                </div>
            </div>
        );
    }
}
export default MultiCarousel;
