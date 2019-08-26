import React from 'react';
import './index.css';

const VideoDetail = props => {

    return (
        <div className="ui card">
            <div className="image">
                <img alt="VideoImage" src={props.thumbnail} />
            </div>
            <div className="content">
                <div className="header">{props.title}</div>
            </div>
            <div className="extra content">
                <a>
                    <i aria-hidden="true" className="clock icon"></i>
                    {props.publishedAt}
                </a>
            </div>
        </div>
    );
};

export default VideoDetail;