import React, { useEffect } from 'react';

import * as thecamp from 'the-camp-lib';

import './App.css';

function App() {
  const fetcher = async () => {
    const client = new thecamp.Client();

    const result = await client.login('qjfrntop12@gmali.com', 'shift0419');

    console.log(result);
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Military_Manpower_Administration_Gutgeoni1.png/400px-Military_Manpower_Administration_Gutgeoni1.png" className="App-logo" alt="logo" />
          근찬아~~ <br />
          군대가자~~~~!!!
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Military_Manpower_Administration_Gutgeoni1.png/400px-Military_Manpower_Administration_Gutgeoni1.png" className="App-logo" alt="logo" />
        </h1>
        <ul className="App-linklist">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            짧은글연습
          </a>
        </ul>
        <p className="subtext">
          본 페이지는 강한육군체를 사용하여 제작되었충성
        </p>
      </header>
    </div>
  );
}

export default App;
