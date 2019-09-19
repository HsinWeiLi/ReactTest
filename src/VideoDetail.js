import React from 'react';
import './index.css';

class VideoDetail extends React.Component {

    constructor(props) {
        super(props);
        this.videoClicked = this.videoClicked.bind(this);
    }

    videoClicked() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="ui card" onClick={this.videoClicked}>
                <div className="image">
                    <img alt="VideoImage" src={this.props.thumbnail} />
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
    };
    
};

export default VideoDetail;