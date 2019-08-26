import React from 'react';
import VideoList from './VideoList';

// var item;
// var titles = [], thumbnail = [];

// const urlData = "https://www.googleapis.com/youtube/v3/playlistItems"
//     +"?part=snippet%2CcontentDetails"
//     +"&playlistId=PLFgquLnL59amN9tYr7o2a60yFUfzQO3sU"
//     +"&key=AIzaSyCt4itveY-wdo-xMKOmwPMoztJubwGdyrg";

// fetch(urlData).then(
//     function(response) {
//         // do something to response
//         response.json().then(
//             function(data) {
//                 // for (var i = 0; i < data.items.length ; i++){
//                 //     item = data.items[i];
//                 //     titles.push(item.snippet.title);
//                 //     // titles.push(item.snippet.title);
//                 //     thumbnail.push(item.snippet.thumbnails.default.url);
//                 // }
//                 console.log(data.items);
//             }
//         )
//     }
// ).catch(function(error) {
//     console.log('Looks like there was a problem: \n', error);
// });

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true, videos: [], error: null};
        this.fetchData = this.fetchData.bind(this);
    }
    
    fetchData() {
        const url = "https://www.googleapis.com/youtube/v3/playlistItems"
            +"?part=snippet%2CcontentDetails"
            +"&playlistId=PLFgquLnL59amN9tYr7o2a60yFUfzQO3sU"
            +"&key=AIzaSyCt4itveY-wdo-xMKOmwPMoztJubwGdyrg";

        fetch(url).then(
            response=> {
                // do something to response
                response.json().then(
                    data => {
                        this.setState({isLoading: false, videos: data.items});
                    }
                )
            }).catch(function(error) {
                console.log('Looks like there was a problem: \n', error);
            }
        );

        // fetch(url).then(response => response.json).then(
        //     data => {
        //         console.log(data);
        //         this.setState({isLoading: false, videos: data.items});
        //         console.log(this.state.videos);
        //     }
        // ).catch(err => this.setState({isLoading: false, error: err}));
    }
    componentDidMount() {
        this.fetchData();
    }
    render() {
        const {isLoading, videos, error} = this.state;
        return(
            <React.Fragment>
                {error ? <p>{error.message}</p> : null}
                {!isLoading ? (
                    videos.map(video => <li key={video.id}>{video.snippet.title}</li>)
                ) : (
                <h3>Loading...</h3>
                )}
            </React.Fragment>
        );
    }
}

export default App;