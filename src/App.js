import logo from './logo.svg';
import Pages from './pages/Pages';
import './App.css';
import Categories from './components/Categories';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Categories/>
        <Pages/>
      </div>
    </BrowserRouter>
  );
}

export default App;
