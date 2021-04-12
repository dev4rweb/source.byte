import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import s from './DetailNewsPage.module.scss'
import Layout from "../../components/Layout/Layout";
import FollowUs from "../../components/FollowUs/FollowUs";
import imgMain from '../../../assets/img/png/image-news-two.png'
import imgNews from '../../../assets/img/png/img-news.png';

const DetailNewsPage = ({detailNewsPage}) => {
    const title = detailNewsPage[0].title || 'title';
    const content = detailNewsPage[0].content || 'content';
    const image = detailNewsPage[0].image || '';
    return (
        <Layout>
            <article className={`${s.newsDetailPage}`}>
                <section className={`container ${s.main}`}>
                    <img src={imgMain} alt="bg"/>
                    <div className={s.shadowWrapper}>
                        <div>
                            <InertiaLink
                                className={s.btnBack}
                                href={route("news.index").url()}
                            >
                                <i className={`icArrowLeft`}/>
                                Back to News
                            </InertiaLink>
                        </div>
                        <h1>Building games for multiple devices</h1>
                        <p>Got a game? Need a publisher? What are you waiting for?</p>
                    </div>
                </section>
                <section className={`container wrapper ${s.info}`}>
                    <p>
                        Always strive for better work. Never stop learning. Have fun a clear plan for a new project or just an idea on a napkin?  Sky, land, and sea disappear together out of the world..
                    </p>
                    <p>
                        The dawn breaks high behind the towering and serrated wall of the Cordillera, a clear-cut vision of dark peaks rearing their steep slopes on a lofty pedestal of forest rising from the very edge of the shore. Amongst them the white head of Higuerota rises majestically upon the blue. Bare clusters of enormous.
                    </p>
                    <h2>
                        Above it all
                    </h2>
                    <p>
                        The wasting edge of the cloud-bank always strives for, but seldom wins, the middle of the gulf. The sun—as the sailors say—is eating it up. Unless perchance a sombre thunder-head breaks away from the main body to career all over the gulf till it escapes into the offing beyond Azuera, where it bursts suddenly.
                    </p>
                    <div className={s.quoteWrapper}>
                        <div className={s.vLine}/>
                        <blockquote>
                            People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully.
                            Steve Jobs – Apple Worldwide Developers’ Conference, 1997
                        </blockquote>
                    </div>
                    <p>
                        At night the body of clouds advancing higher up the sky smothers the whole quiet gulf below with an impenetrable darkness, in which the sound of the falling showers can be heard beginning and ceasing abruptly—now here, now there. Indeed, these cloudy nights are proverbial with the seamen along the whole west coast of a great continent.
                    </p>
                    <ul className="img-marked">
                        <li>The dawn breaks high behind the towering and serrated wall</li>
                        <li>A clear-cut vision of dark peaks rearing their steep slopes</li>
                        <li>Amongst them the white head of Higuerota</li>
                        <li>Bare clusters of enormous rocks sprinkle with tiny black dots</li>
                    </ul>
                    <div className={s.imgNews}>
                        <img src={imgNews} alt="news"/>
                        <p>
                            The Indian girls, with hair like flowing black manes, and dressed only in a shift and short petticoat, stared dully from under the square-cut fringes on
                        </p>
                    </div>
                    <p>
                        The Italian drivers saluted him from the foot-plate with raised hand, while the negro brakesmen sat carelessly on the brakes, looking straight forward, with the rims of their big hats flapping in the wind. In return Giorgio would give a slight sideways jerk of the head, without unfolding his arms.
                    </p>
                </section>
                <FollowUs/>
            </article>

            {/*<h1>{title}</h1>
            <p>{content}</p>
            <img style={{width: '100%'}} src={image} alt="image"/>*/}
        </Layout>
    );
};

export default DetailNewsPage;
