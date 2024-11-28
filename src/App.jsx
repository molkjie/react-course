import './assets/App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Menu />
      <Cart />
    </div>
  );
}

export default App;
