import './assets/App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router';
import Main from './pages/Main';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
