/* global chrome */

import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Option from './Option';
import AddPerson from './AddPerson';
import Person from './Person';

// if (chrome.runtime.error) { return}
const Wrapper = () => {
  const storedTeams = chrome.storage.sync.get(['teams'], result => result.teams || []);

  const tabsArray = [];

  for (const team in storedTeams) {
    tabsArray.push(team);
  }

  const tabs = tabsArray.map(team => (
    <Tab><input type="text" value={team} /></Tab>
  ));

  function addTeam() {
    chrome.storage.sync.get(['teams'], (result) => {
      console.log(result);
      const array = result.teams ? result.teams : [];

      const newArrEntry = { name: 'Enter name' };
      array.unshift(newArrEntry);

      const jsonObj = {};
      jsonObj.teams = array;
      chrome.storage.sync.set(jsonObj, () => {
        console.log('Saved a new array item');
      });
    });
  }

  return (
    <div>
      <Tabs>
        <TabList>
          {tabs}
          <button onClick={() => { addTeam(); }}>+</button>
        </TabList>

        <TabPanel>
          <Option />
          <AddPerson />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
          <Option />
          <AddPerson />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Wrapper;
