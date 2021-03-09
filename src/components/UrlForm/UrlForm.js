import React, { useState } from 'react';

const UrlForm = ({submitNewUrl}) => {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      long_url: urlToShorten,
      title: title
    }
    handleFormError(newUrl);
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  }

  const handleFormError = (newUrl) => {
    if (title === '' || urlToShorten === '') {
      setError('You must fill out all fields of the form first!')
    } else {
      submitNewUrl(newUrl);
      clearError();
    }
  }

  const clearError = () => {
    setError('')
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        className='title'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        className='urlToShorten'
        name='urlToShorten'
        value={urlToShorten}
        onChange={event => setUrlToShorten(event.target.value)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
      {error && <p className='error'>{error}</p>}
    </form>
  )
}


export default UrlForm;
