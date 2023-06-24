import Pages from './routes';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';

function App() {
  const [apiKeyIsValid, setApiKeyIsValid] = useState(true)

  const checkApiKey = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`)
    const data = await res.json()
    setApiKeyIsValid(data.code !== 402)
  }
  
  useEffect(() => {
    checkApiKey()
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        {!apiKeyIsValid &&
        <div className='container'>
          <h1>This API key has reached its daily limit, try again tomorrow.</h1>
        </div>}
        <Hero/>
        <Pages/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
