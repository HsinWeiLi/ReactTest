import React from 'react';
import './index.css';

class VideoDetail extends React.Component {

    constructor(props) {
        super(props);
        this.videoClicked = this.videoClicked.bind(this);
    }

    videoClicked() {
        const url = "http://140.116.72.65:8081/orderMusic";
        const data = {"id": this.props.id, "title": this.props.title, "thumbnails": this.props.thumbnails};

        console.log(data);
        fetch(url, {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)}).then(response => console.log(response)).catch(error => console.log(error));
    }

    render() {
        return (
            <div className="ui card" onClick={this.videoClicked}>
                <div className="image">
                    <img alt="VideoImage" src={this.props.thumbnails} />
                </div>
                <div className="content">
                    <div className="header">{this.props.title}</div>
                </div>
                <div className="extra content">
                    <a>
                        <i aria-hidden="true" className="clock icon"></i>
                        {this.props.publishedAt}
                    </a>
                </div>
            </div>
        );
    }
    
};

export default VideoDetail;