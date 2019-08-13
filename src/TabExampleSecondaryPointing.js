import React from 'react';
import { Tab } from 'semantic-ui-react';
import VideoDetail from './VideoDetail';

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