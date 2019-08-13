import React from 'react';
import ReactDOM from 'react-dom';
import VideoDetail from './VideoDetail';

const App = () => {
    return (
        <div className="ui special cards">
            <VideoDetail />
            <VideoDetail />
            <VideoDetail />
            <VideoDetail />
            <VideoDetail />
        </div>
    );
};
ReactDOM.render(<App />, document.querySelector('#root'));