import logo from './logo.svg';
import Pages from './routes';
import './App.css';
import Categories from './components/Categories';
import { BrowserRouter } from 'react-router-dom';
// import Search from './components/Search';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Header/>
        {/* <Search/> */}
        <Categories/>
        <Pages/>
      </div>
    </BrowserRouter>
  );
}

export default App;
