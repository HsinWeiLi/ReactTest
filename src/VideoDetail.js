import React from 'react';
import Facker from 'faker';
// import GoogleAPI from 'googleapis';

const VideoDetail = () => {
    return (
        <div className="card">
            <div className="blurring dimmable image">
                <div className="ui dimmer">
                    <div className="content">
                        <div className="center">
                            <div className="ui inverted button">Play</div>
                        </div>
                    </div>
                </div>
                <img alt="video" src={Facker.image.cats()}/>
            </div>
            <div className="content">
                <a href="/" className="header">Cat</a>
                <div className="meta">
                    <span className="date">Yesterday</span>
                </div>
            </div>
            <div className="extra content">
                <a>
                    <i className="users icon"></i>
                    2 Likes
                </a>
            </div>
        </div>
    );
};
export default VideoDetail;