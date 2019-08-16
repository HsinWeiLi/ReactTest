import React from 'react';
import Faker from 'faker';
// import GoogleAPI from 'googleapis';



const VideoDetail = () => {
    return (
        <div className="ui card">
            <div className="image">
                <img alt="VideoImage" src={Faker.image.cats()} />
            </div>
            <div className="content">
                <div className="header">I Love Cats</div>
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
export default VideoDetail;