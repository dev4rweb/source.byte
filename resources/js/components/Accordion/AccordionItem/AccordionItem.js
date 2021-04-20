import React from 'react';
import '../accordion.scss';
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";

const AccordionItem = ({item, index}) => {
    // console.log('AccordionItem ' + index, item);
    const markedListOne = item.listOne ? item.listOne.split('*-') : '';
    const markedListTwo = item.listTwo ? item.listTwo.split('*-') : '';
    const markedListThree = item.listThree ? item.listThree.split('*-') : '';

    const collapsed = index === 0 ? '' : 'collapsed';
    const show = index === 0 ? 'show' : '';

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${index}`}>
                <button
                    className={`accordion-button ${collapsed}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`collapse${index}`}
                >
                    {item.position ?? ''}
                </button>
            </h2>
            <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${show}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div>
                        <h3>{item.titleOne ?? ''}</h3>
                        {markedListOne && markedListOne.length > 1 ?
                            <ul className={`img-marked`}>
                                {markedListOne.map((item, index) => {
                                    if (item) {
                                        return <li key={index}>{item}</li>
                                    }
                                })}
                            </ul>
                            :
                            <p>{markedListOne}</p>
                        }

                        <h3>{item.titleTwo ?? ''}</h3>
                        {markedListTwo && markedListTwo.length > 1 ?
                            <ul className={`img-marked`}>
                                {markedListTwo.map((item, index) => {
                                    if (item) {
                                        return <li key={index}>{item}</li>
                                    }
                                })}
                            </ul>
                            :
                            <p>{markedListTwo}</p>
                        }

                        <h3>{item.titleThree ?? ''}</h3>
                        {markedListThree && markedListThree.length > 1 ?
                            <ul className={`img-marked`}>
                                {markedListThree.map((item, index) => {
                                    if (item) {
                                        return <li key={index}>{item}</li>
                                    }
                                })}
                            </ul>
                            :
                            <p>{markedListThree}</p>
                        }

                        <div>

                            <ButtonPrimary text={`Apply now`} btnUrl={`/apply-job/${item.id}`}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
