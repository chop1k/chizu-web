import React from 'react';
import ProjectPanel from "../Panels/Project/ProjectPanel";
import './App.css'
import HomePage from "../Pages/Home/HomePage";

function App() {
  return (
      <div id="app">
          <div id="header">
              <div id="panel-burger">
                <span/>
              </div>
          </div>
          <div id="panel-wrapper">
              <ProjectPanel bannerType={3} name="ProjectName" sections={[]}/>
          </div>
          <div id="page-wrapper">
              <HomePage/>
          </div>
      </div>
  );
}

export default App;
