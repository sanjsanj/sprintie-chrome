/* global chrome */

import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Option from './Option';
import AddPerson from './AddPerson'; 
import Person from './Person';

const Wrapper = () => {
    const tabs = ['Team Ginevra', 'Team Magnus'].map(team => {
        return (
            <Tab><input type="text" value={team} /></Tab>
        )
    });

    // function addTeam() {
    //     chrome.storage.sync.set({'Teams': ['Name your team']}, () => {
    //         chrome.storage.sync.get('Teams', (team) => {
    //             console.log(team);
    //         })
    //     });
    // }

    return (
    <div>
        <Tabs>
            <TabList>
                {tabs}
            </TabList>

            <TabPanel>
                <Option/>
                <AddPerson/>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
                <Option/>                
                <AddPerson/>                
            </TabPanel>
        </Tabs>
    </div>
    )
}

export default Wrapper
