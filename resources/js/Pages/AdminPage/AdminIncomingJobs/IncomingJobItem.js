import React from 'react';

const IncomingJobItem = ({index, item, deleteHandler}) => {
    console.log('IncomingJobItem', item);

    return (
        <div className="mb-5 container border border-warning border-3 p-3">
            {item.jobPosition && <h2>{item.jobPosition}</h2>}
            {item.name && <h3>Name: {item.name}</h3>}
            {item.email && <h3>Email: {item.email}</h3>}

            {item.country && <h4>Country: {item.country}</h4>}
            {item.yourSite && <h4>Your Website: {item.yourSite}</h4>}

            {item.experience && <p>Company Experience: {item.experience}</p>}
            {item.yourSiteTwo && <p>Your website Two: {item.yourSiteTwo}</p>}

            {item.unity.includes('true') && <p>Unity Game Developer - checked</p>}
            {item.unreal.includes('true') && <p>Unreal Game Developer - checked</p>}
            {item.design.includes('true') && <p>3D Designer - checked</p>}
            {item.artist.includes('true') && <p>Pixel Artist - checked</p>}
            {item.marketing.includes('true') && <p>Marketing Specialist - checked</p>}
            {item.webDev.includes('true') && <p>Web Developer  - checked</p>}
            {item.cProgrammer.includes('true') && <p>C# Developer - checked</p>}
            {item.graphicDesign.includes('true') && <p>Graphic Designer - checked</p>}
            {item.writer.includes('true') && <p>Writer - checked</p>}
            {item.levelDesigner.includes('true') && <p>Level Designer - checked</p>}
            {item.gameDesigner.includes('true') && <p>Game Designer - checked</p>}
            {item.composer.includes('true') && <p>Composer - checked</p>}
            {item.other.includes('true') && <p>Other - checked</p>}

            {item.impress && <p>Impress us: {item.impress}</p>}
            {item.earn && <p>How much you would like to earn?: {item.earn}</p>}
            {item.website && <p>Your website Three: {item.website}</p>}
            {item.help && <p>Any things you would like help with which are not part of the abouve list: {item.help}</p>}

            {item.uploadFile && <p><a href={`http://source-byte.zzz.com.ua/${item.uploadFile}`}>See upload file</a></p>}
            <button
                className="btn btn-danger"
                onClick={event => deleteHandler(item)}
            >
                Delete
            </button>
        </div>
    );
};

export default IncomingJobItem;
