import React from 'react';
import {Route} from 'react-router-dom';
import Recommendation from './Recommendation';
import Playlist from './Playlist';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Route path="/" exact component={Recommendation}/>
                <Route path="/playlist" component={Playlist}/>
            </div>
        );
    };
}
export default App;