import React from 'react';
import {Route} from 'react-router-dom';
// import Grid from './Grid';
import VideoList from './VideoList';
// import SearchBar from './SearchBar';

class App extends React.Component {

    render() {
        return (
            <div style={{margin: '5px'}}>
                {/* <SearchBar style={{margin: '10px'}}/> */}
                <VideoList/>
                {/* <Grid/> */}
            </div>
        );
    };
}
export default App;
// ReactDOM.render(<App/>, document.querySelector('#root'));