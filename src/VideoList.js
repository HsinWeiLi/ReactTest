import React from 'react';
import VideoDetail from './VideoDetail';

class VideoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true, videos: [], error: null};
        // this.fetchData = this.fetchData.bind(this);
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
                        playlist = this.shuffle(playlist);
                        playlist = playlist.slice(0, 5);
                        this.setState({isLoading: false, videos: playlist});
                        console.log(this.state.videos);
                    });
            }
        ).catch(function(error){
            console.log(error);
        })
    }

    shuffle (array) {
        var i, j, temp;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random()*(i+1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    componentDidMount() {
        this.getTrendingVideo();
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
                            id={video.id}
                            title={video.title}
                            thumbnail={video.thumbnail}
                            // publishedAt={video.contentDetails.videoPublishedAt}
                        />
                    )
                ) : (<h3>Loading...</h3>)}
                </div>
            </React.Fragment>
        );
    }
}

export default VideoList;