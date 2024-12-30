import './assets/App.css';
import { Suspense, lazy } from 'react';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import { Routes, Route } from 'react-router';
import { CartProvider } from './context/CartContext';

const Main = lazy(() => import('./pages/Main/Main'));
const Menu = lazy(() => import('./pages/Menu/Menu'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const OrderForm = lazy(() => import('./pages/OrderForm/OrderForm'));
const OrderStatus = lazy(() => import('./pages/OrderStatus/OrderStatus'));

function App() {
  return (
    <CartProvider>
      <div className="container">
        <Header />

        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/orders/:id" element={<OrderStatus />} />
          </Routes>
        </Suspense>
      </div>
    </CartProvider>
  );
}

export default App;
