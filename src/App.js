import './App.css';

import { useEffect } from 'react'

const App = () => {
  // Creating a function that performs a network request to the Rijks Museum
  const fetchRijksData = () => {
    const url = new URL('https://www.rijksmuseum.nl/api/en/collection/');
    // Adding the param values to our url
    url.search = new URLSearchParams({
      key: process.env.REACT_APP_API_KEY
    });
    // Using the fetch function to get the information
    fetch(url).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data)
    });
  }
  // This runs the code as soon as the component is rendered to the page
  useEffect(() => {
    fetchRijksData()
  }, [])

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App;