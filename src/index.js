import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';
import VideoList from './VideoList';

// const App = () => {
//     return (
//         <div style={{margin: '5px'}}>
//             <VideoList/>
//             <Grid/>
//         </div>
//     );
// }
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true, video: null, error: null};
        this.getTrendingVideo = this.getTrendingVideo.bind(this);
    }

    getTrendingVideo() {

        const url = "http://140.116.72.65:8081/getTrendingVideo";
        var playlist = [], data="";

        fetch(url, {method: 'POST', mode: "cors"}).then(
            response => {
                response.text().then(
                    text => {
                        for (let info of text.split('\n')) {
                            data = {
                                "id": info.split(',')[0],
                                "title": info.split(',')[1],
                                "thumbnail": info.split(',')[2]
                            }
                            playlist.push(data);
                        }
                        this.setState({isLoading: false, video: playlist});
                        console.log(this.state.video);
                    });
            }
        ).catch(function(error){
            console.log(error);
        })
    }

    componentDidMount() {
        this.getTrendingVideo();
    }

    render() {
        return (
            <div style={{margin: '5px'}}>
                <VideoList/>
                <Grid/>
            </div>
        );
    };
}
ReactDOM.render(<App/>, document.querySelector('#root'));