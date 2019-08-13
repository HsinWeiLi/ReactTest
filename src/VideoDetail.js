import React from 'react';
import Faker from 'faker';
// import GoogleAPI from 'googleapis';

const getDate = () => {
    return Faker.date.past();
}

const VideoDetail = () => {
    return (
        <div class="ui card">
            <div class="image">
                <img alt="VideoImage" src={Faker.image.cats()} />
            </div>
            <div class="content">
                <div class="header">I Love Cats</div>
                <div class="meta"><span class="date">3 months ago</span></div>
                <div class="description">Matthew</div>
            </div>
            <div class="extra content">
                <a>
                    <i aria-hidden="true" class="user icon"></i>
                    22k likes
                </a>
            </div>
        </div>
    );
};
export default VideoDetail;