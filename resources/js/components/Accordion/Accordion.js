import React from 'react';
import './accordion.scss'
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import AccordionItem from "./AccordionItem/AccordionItem";

const Accordion = ({jobs}) => {
    // console.log('Accordion', jobs);
    return (
        <div className="accordion" id="accordionExample">
            {jobs.map((item, index) => {
                return (
                    <AccordionItem key={index} item={item} index={index}/>
                )
            })}
{/*            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        GRAPHICS PROGRAMMER
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div>
                            <h3>You are:</h3>
                            <ul className={`img-marked`}>
                                <li>A graphics geek: Constantly on the lookout for new features and techniques defining
                                    the bleeding
                                    edge of real time rendering
                                </li>
                                <li>An engineer: Not only do you know all the advances in realtime rendering and love
                                    talking about
                                    them, you also know the importance of being able to implement them efficiently
                                </li>
                                <li>A problem solver: You know a problem when you see one, and you also know that if you
                                    put on your
                                    blindfold, the problem will come back later and bite you and your fellow developers
                                    in the rear
                                    right.
                                </li>
                                <li>Educated: your Bachelor’s or Master’s degree in Computer Science or a related tech
                                    field has a
                                    few
                                    scratches on it from where you’ve put it to use.
                                </li>
                            </ul>
                            <h3>You will:</h3>
                            <ul className={`img-marked`}>
                                <li>Become an integral part of our small core tech team</li>
                                <li>Help define the looks of our next games</li>
                                <li>Make sure that all the shiny features and techniques work equally well</li>
                                <li>Dig deep into the codebase of our tech to improve existing systems</li>
                            </ul>
                            <h3>Your specs: </h3>
                            <ul className={`img-marked`}>
                                <li>C++, HLSL/GLSL, Git, SVN, Perforce, Strong 3D Math</li>
                            </ul>
                            <div>
                                <InertiaLink
                                    href={route("apply-job.index").url()}
                                >
                                </InertiaLink>

                                <ButtonPrimary text={`Apply now`} btnUrl={`/jobs/apply-job`}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        UNITY DEVELOPER
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="accordion-body">
                            <div>
                                <h3>Who are we looking for?</h3>
                                <p>
                                    We are looking for someone who will be able to work with us and won’t be afraid of
                                    taking on new challenges.
                                </p>
                                <h3>What we expect:</h3>
                                <ul className={`img-marked`}>
                                    <li>
                                        being familiar with Unity 3D and being able to do the deputed tasks
                                    </li>
                                    <li>
                                        self-reliance
                                    </li>
                                    <li>
                                        being full of passion and desire
                                    </li>
                                    <li>
                                        ability of using Discord/Skype
                                    </li>
                                    <li>
                                        being familiar with engines, simulations of physic and animations
                                    </li>
                                    <li>
                                        being familiar to Unity UI
                                    </li>
                                    <li>
                                        having knowledge about the lightning, textures, materials and shaders
                                    </li>
                                    <li>
                                        Experience in compiling and implementing Unity projects for Nintendo Switch, PC,
                                        VR, Xbox, Playstation.
                                    </li>
                                </ul>
                                <h3>What will be your duties:</h3>
                                <ul className={`img-marked`}>
                                    <li>
                                        creating games in Unity
                                    </li>
                                    <li>
                                        projecting and editing the code
                                    </li>
                                    <li>
                                        optimizing our projects
                                    </li>
                                    <li>
                                        Dig deep into the codebase of our tech to improve existing systems
                                    </li>
                                </ul>
                                <div>
                                    <InertiaLink
                                        // to="/apply-job"
                                        href={route("apply-job.index").url()}
                                    >
                                        <ButtonPrimary text={`Apply now`}/>
                                    </InertiaLink>

                                    <ButtonPrimary text={`Apply now`} btnUrl={`/jobs/apply-job`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        GAME DESIGNER
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="accordion-body">
                            <div>
                                <h3>What will you be responsible for:</h3>
                                <ul className={`img-marked`}>
                                    <li>
                                        working on one of the gameplay core features
                                    </li>
                                    <li>
                                        creating in-game levels
                                    </li>
                                    <li>
                                        bringing a creative content to our projects
                                    </li>
                                </ul>
                                <h3>What we require:</h3>
                                <ul className={`img-marked`}>
                                    <li>
                                        ability to work in a group
                                    </li>
                                    <li>
                                        fluent English (Writing and speaking)
                                    </li>
                                    <li>
                                        being creative and self-reliance
                                    </li>
                                    <li>
                                        be familiar with popular game engines
                                    </li>
                                    <li>
                                        knowladge about the game development process
                                    </li>
                                </ul>
                                <div className="btn-wrapper">
                                    <InertiaLink
                                        href={route("apply-job.index").url()}
                                    >
                                        <ButtonPrimary text={`Apply now`}/>
                                    </InertiaLink>

                                    <ButtonPrimary text={`Apply now`} btnUrl={`/jobs/apply-job`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
    );
};

export default Accordion;
