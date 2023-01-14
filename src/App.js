import logo from './logo.svg';
import Pages from './pages/Pages';
import './App.css';
import Categories from './components/Categories';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Search/>
        <Categories/>
        <Pages/>
      </div>
    </BrowserRouter>
  );
}

export default App;
