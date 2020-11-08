import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const fetchDataGET = async () => {
  const response = await fetch('/api/list');
  const data = await response.json();

  if (response.status !== 200) {
    throw Error(data.message);
  }

  return data;
};

const fetchDataPOST = async () => {
  const response = await fetch('/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([4, 5, 6]),
  });
  const data = await response.json();

  if (response.status !== 200) {
    throw Error(data.message);
  }

  return data;
};

function App() {
  const [dataGet, setDataGet] = useState([]);
  const [dataPost, setDataPost] = useState([]);

  useEffect(() => {
    fetchDataGET()
      .then((res) => setDataGet(res))
      .catch((err) => console.error(err));

    fetchDataPOST()
      .then((res) => setDataPost(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <b>
        API GET response:
        {dataGet.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </b>
      <b>
        API POST response:
        {dataPost.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </b>
    </div>
  );
}

export default App;
