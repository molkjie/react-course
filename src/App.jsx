import './assets/App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router';
import Main from './pages/Main/Main';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';
import OrderForm from './pages/OrderForm/OrderForm';
import OrderStatus from './pages/OrderStatus/OrderStatus';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/orders/:id" element={<OrderStatus />} />

          <Route path="/orderStatus" element={<OrderStatus />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
