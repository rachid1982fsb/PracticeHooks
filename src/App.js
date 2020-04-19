import React, { useState, useEffect } from 'react';import logo from './logo.svg';
import  Example from './hookTest'
import Sample from './anotherHook'
import './App.css';

function App() {
  const [exmaple, setExmaple] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked times`;
  });

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <button onClick={() => setExmaple(!exmaple)}>
    Change Page
    </button>
    {exmaple ? <Example/>: <Sample/>}
    </>
  );
}

export default App;
