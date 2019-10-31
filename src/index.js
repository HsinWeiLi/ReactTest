import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom';
import App from './App';


const Index = () => {
    return (
        <BrowserRouter>
            <Switch>
                <App/>
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<Index/>, document.querySelector('#root'));