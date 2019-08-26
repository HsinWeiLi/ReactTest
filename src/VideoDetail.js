import React from 'react';
import Faker from 'faker';
// import GoogleAPI from 'googleapis';



function VideoDetail(props) {

    return (
        <div className="ui card">
            <div className="image">
                <img alt="VideoImage" src={Faker.image.cats()} />
            </div>
            <div className="content">
                <div className="header">{props.titles}</div>
                <div className="meta"><span className="date">3 months ago</span></div>
                <div className="description">Matthew</div>
            </div>
            <div className="extra content">
                <a>
                    <i aria-hidden="true" className="user icon"></i>
                    22k likes
                </a>
            </div>
        </div>
    );
};

// const VideoDetail = () => {
//     return (
//         <div className="ui cards">
//             <VideoItem/>
//         </div>
//     );
// };


export default VideoDetail;