import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';
import VideoList from './VideoList';
import SearchBar from './SearchBar';

class App extends React.Component {

    render() {
        return (
            <div style={{margin: '5px'}}>
                <SearchBar style={{margin: '10px'}}/>
                <VideoList/>
                <Grid/>
            </div>
        );
    };
}
ReactDOM.render(<App/>, document.querySelector('#root'));