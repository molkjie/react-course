import './assets/App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router';
import Main from './pages/Main';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import OrderForm from './pages/OrderForm';
import OrderStatus from './pages/OrderStatus';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/orders/:id" element={<OrderStatus />} />
      </Routes>
    </div>
  );
}

export default App;
