import logo from './logo.svg';
import Pages from './routes';
import './App.css';
import Categories from './components/Hero';
import { BrowserRouter } from 'react-router-dom';
// import Search from './components/Search';
import Header from './components/Header';
import { useEffect, useState, Fragment } from 'react';

function App() {
  const [apiKeyIsValid, setApiKeyIsValid] = useState(true)

  const checkApiKey = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`)
    const data = await res.json()
    if(data.code === 402) {
      setApiKeyIsValid(false)
    } else {
      setApiKeyIsValid(true)
    }
  }
  
  useEffect(() => {
    checkApiKey()
  }, [])

  console.log(apiKeyIsValid)

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        {apiKeyIsValid ? 
        <Fragment>
          <Categories/>
          <Pages/>
        </Fragment> :
        <div>
          <h2>This API key has reached its daily limit, try again tomorrow.</h2>
        </div>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
