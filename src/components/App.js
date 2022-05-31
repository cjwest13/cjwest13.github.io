import React from 'react';
import '../styles/App.css';
import Sidebar from './sidebar/Sidebar';
import Introduction from './introduction/Introduction';
import About from './about/About';
import Skills from './skills/Skills';
import Resume from './resume/Resume';
import Current from './ current/Current';

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Skills />
          <Resume />
          <Current />
        </div>
      </div>
    </div>
  )
}

export default App;
