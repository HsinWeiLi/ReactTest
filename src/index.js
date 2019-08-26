import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';
import VideoList from './VideoList';

const App = () => {
    return (
        <div style={{margin: '5px'}}>
            <VideoList/>
            <Grid/>
        </div>
    );
}
ReactDOM.render(<App/>, document.querySelector('#root'));