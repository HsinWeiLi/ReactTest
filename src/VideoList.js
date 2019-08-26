import React from 'react';
import VideoDetail from './VideoDetail';

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
                        console.log(data.items);
                    }
                )
            }).catch(function(error) {
                console.log('Looks like there was a problem: \n', error);
            }
        );
    }
    componentDidMount() {
        this.fetchData();
    }
    render() {
        const {isLoading, videos, error} = this.state;
        return(
            <React.Fragment>
                <div className="ui cards five">
                {error ? <p>{error.message}</p> : null}
                {!isLoading ? (
                    videos.map(video => 
                        <VideoDetail key={video.id}
                            title={video.snippet.title}
                            thumbnail={video.snippet.thumbnails.medium.url}
                            publishedAt={video.contentDetails.videoPublishedAt}
                        />
                    )
                ) : (<h3>Loading...</h3>)}
                </div>
            </React.Fragment>
        );
    }
}

export default App;