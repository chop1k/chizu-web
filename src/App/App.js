import React from 'react';
import ProjectPanel from "../Panels/Project/ProjectPanel";
import './App.css'
import HomePage from "../Pages/Home/HomePage";
import ActionPanel from "../Pages/ActionPanel/ActionPanel";
import Documentation from "../Pages/Documentation/Documentation";

function App() {
    let sections = [
        {
            'name': 'sectionName',
            'canEdit': true,
            'articles': [
                {
                    'name': 'sectionName',
                    'canEdit': true
                },
                {
                    'name': 'sectionName',
                    'canEdit': true
                },
                {
                    'name': 'sectionName',
                    'canEdit': true
                },
                {
                    'name': 'sectionName',
                    'canEdit': true
                },
                {
                    'name': 'sectionName',
                    'canEdit': true
                },
                {
                    'name': 'sectionName',
                    'canEdit': true
                },
                {
                    'name': 'sectionName',
                    'canEdit': true
                },
                {
                    'name': 'sectionName',
                    'canEdit': true
                },
            ]
        }
    ]

    return (
      <div id="app">
          <div id="header">
              <div id="panel-burger">
                <span/>
              </div>
          </div>
          <div id="panel-wrapper">
              <ProjectPanel bannerType={3} name="ProjectName" sections={sections}/>
          </div>
          <div id="page-wrapper">
              <Documentation mode={'read'}/>
          </div>
          <div id="action-panel">

          </div>
      </div>
    );
}

export default App;
