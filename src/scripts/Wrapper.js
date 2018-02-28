import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Option from './Option'; 

const Wrapper = () => {
    return (
    <div>
        <Tabs>
            <TabList>
                <Tab>Team 1</Tab>
                <Tab>Team 2</Tab>
            </TabList>

            <TabPanel>
                <Option/>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    </div>
    )
}

export default Wrapper