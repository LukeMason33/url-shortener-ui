import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postNewUrl} from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export const App = () =>  {
  const[urls, setUrls] = useState([]);

  const submitNewUrl = (newUrl) => {
    postNewUrl(newUrl)
      .then(newUrl => setUrls([...urls, newUrl]))
  }

  useEffect(() => {
    getUrls()
      .then(data => {
        setUrls(data.urls)
      })
  }, [])

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm submitNewUrl={submitNewUrl} urls={urls}/>
      </header>

      <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
