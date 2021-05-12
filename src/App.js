import { useEffect } from 'react';
import './App.css';
import { ContextProvider } from './contexts/cartContexts';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Nav from './components/Nav';

function App() {
  useEffect(() => {

  })

  return (
    <div className="App">
      <ContextProvider>
        <Nav />
        <Shop />
        <Cart />
      </ContextProvider>
    </div>
  );
}

export default App;
