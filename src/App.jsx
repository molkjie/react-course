import './assets/App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Menu />
    </div>
  );
}

export default App;
