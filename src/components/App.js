import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './header/Header';
import Intro from './introduction/Intro';
import Nav from './nav/Nav';
import Twitter from './twitter/Twitter';
// import "aos/dist/aos.css"
import PressPreview from './press/PressPreview';

function App() {
  return (
    <main>
      <Nav />
      {/* <Header /> */}
      <div className="content">
        <Intro />
        <Twitter />
        <PressPreview />
      </div>
    </main>
  );
}

export default App;
