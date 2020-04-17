import React, { useState } from 'react';
import axios from 'axios'
import './App.css';
import routes from './routes'
import Nav from './Components/ nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <div className="logo-pic">
            <div>
          Welcome!
        </div>
          </div>
        </div>
        <Nav />
      </header>
      <main className='App-main'>
        {routes}
      </main>
      <footer className="App-footer">  {/* 54D-3 */}
        <ul>
          <li>
            contact
          </li>
          <li>
            about
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
