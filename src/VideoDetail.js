import React from 'react';
import GoogleAPI from 'googleapis';

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
            </div>
        </div>
    );
};
export default VideoDetail;