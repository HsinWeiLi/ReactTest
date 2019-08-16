import React from 'react';
import { Tab } from 'semantic-ui-react';
import VideoDetail from './VideoDetail';

var url = "https://www.googleapis.com/youtube/v3/playlistItems"
    +"?part=snippet%2CcontentDetails"
    +"&playlistId=PLFgquLnL59amN9tYr7o2a60yFUfzQO3sU"
    +"&key=AIzaSyCt4itveY-wdo-xMKOmwPMoztJubwGdyrg";

var item, title, imgUrl;

fetch(url)
.then(
    function(response) {
        // do something to response
        response.json().then(
            function(data){
                for (var i = 0; i < data.items.length ; i++){
                    item = data.items[i];
                    title = item.snippet.title;
                    imgUrl = item.snippet.thumbnails.default.url;
                    console.log(title,imgUrl);
                }
            }
        )
    }
)
.catch(function(error) {
    console.log('Looks like there was a problem: \n', error);
});

const panes = [
    { menuItem: 'Tab 1', render: () =>
    <Tab.Pane attached={false}>
        <div className="ui cards">
            <VideoDetail/>
            <VideoDetail/>
            <VideoDetail/>
            <VideoDetail/>
            <VideoDetail/>
        </div>
    </Tab.Pane> },
    { menuItem: 'Tab 2', render: () => 
    <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> }
];

const TabExampleSecondaryPointing = () => (
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
);

export default TabExampleSecondaryPointing;