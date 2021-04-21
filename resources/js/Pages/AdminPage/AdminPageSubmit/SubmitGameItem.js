import React from 'react';

const SubmitGameItem = ({item, deleteHandler}) => {
    // console.log('SubmitGameItem', item);
    return (
        <div className="mb-5 container border border-warning border-3 p-3">
            {item.gameNameOne && <h2>Name of you game :{item.gameNameOne}</h2>}

            {item.gameNameTwo && <p>Your name/Company/Team :{item.gameNameTwo}</p>}
            {item.contactName && <p>Contact Name :{item.contactName}</p>}
            {item.contactEmail && <p>Email :{item.contactEmail}</p>}
            {item.company && <p>Company/Game Website :{item.company}</p>}
            {item.team && <p>Team Size :{item.team}</p>}
            {item.prevProject && <p>Previous Projects/Company Experience :{item.prevProject}</p>}
            {item.gameDesc && <p>Game Description :{item.gameDesc}</p>}
            {item.genre && <p>Game Genre :{item.genre}</p>}
            {item.similar && <p>Similar Titles :{item.similar}</p>}
            {item.featureOne && <p>Feature 1 :{item.featureOne}</p>}
            {item.featureTwo && <p>Feature 2 :{item.featureTwo}</p>}
            {item.featureThree && <p>Feature 3 :{item.featureThree}</p>}
            {item.featureFour && <p>Feature 4 :{item.featureFour}</p>}
            {item.featureFive && <p>Feature 5 :{item.featureFive}</p>}
            {item.featureSix && <p>Feature 6 :{item.featureSix}</p>}
            {item.uniqFeature && <p>Unique Features :{item.uniqFeature}</p>}
            {item.playTime && <p>Estimated Playtime Goal :{item.playTime}</p>}

            {item.cbxPC.includes('true') && <p>PC - checked</p>}
            {item.cbxPS.includes('true') && <p>PS4 - checked</p>}
            {item.cbxXBox.includes('true') && <p>Xbox - checked</p>}
            {item.cbxSwitch.includes('true') && <p>Switch - checked</p>}

            {item.optional && <p>Additional Platfroms :{item.optional}</p>}
            {item.dateMonth && <p>Release date :{item.dateMonth}</p>}
            {item.addPlatform && <p>Additional Platforms :{item.addPlatform}</p>}
            {item.topRisks && <p>Top Risks :{item.topRisks}</p>}

            {item.cbxMarketing.includes('true') && <p>Marketing - checked</p>}
            {item.cbxQA.includes('true') && <p>QA - checked</p>}
            {item.cbxConsole.includes('true') && <p>Console Submission Support - checked</p>}
            {item.cbxPorting.includes('true') && <p>Porting - checked</p>}
            {item.cbxLocalization.includes('true') && <p>Localization - checked</p>}
            {item.cbxVoice.includes('true') && <p>Voice Recordings - checked</p>}
            {item.cbxProduction.includes('true') && <p>Production Support - checked</p>}
            {item.cbxGameDesign.includes('true') && <p>Gamedesign Support - checked</p>}
            {item.cbxDevelopment.includes('true') && <p>Development Funding - checked</p>}

            {item.uploadFile && <p><a href={`http://source-byte.zzz.com.ua/lsapp/public${item.uploadFile}`}>See upload file</a></p>}
            {item.urlUploadFile && <p><a href={item.urlUploadFile}>See large file</a></p>}

            {item.helpList && <p>Any things you would like help with which are not part of the above list? :{item.helpList}</p>}
            <button
                className="btn btn-danger"
                onClick={event => deleteHandler(item)}
            >
                Delete
            </button>

        </div>
    );
};

export default SubmitGameItem;
