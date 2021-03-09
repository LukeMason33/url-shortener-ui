import React, { useState } from 'react';

const UrlForm = () => {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');

  const handleNameChange = (e, input) => {
    input(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={urlToShorten}
        onChange={e => handleNameChange(e, setTitle)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='title'
        value={title}
        onChange={e => handleNameChange(e, setUrlToShorten)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}


export default UrlForm;
