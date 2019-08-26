import React from 'react';
import ReactDOM from 'react-dom';
import VideoDetail from './VideoDetail';

const VideoList = () => {
    return (
        <div className="ui five cards">
            <VideoDetail/>
            <VideoDetail/>
            <VideoDetail/>
            <VideoDetail/>
            <VideoDetail/>
        </div>
        
    );

}
export default VideoList;