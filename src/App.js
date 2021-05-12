import { useEffect, useState, useReducer } from 'react';
import './App.css';
import { ContextProvider } from './contexts/cartContexts';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {
  useEffect(() => {

  })



  return (
    <div className="App">
      <ContextProvider>
        <Shop />
        <Cart />
      </ContextProvider>
    </div>
  );
}

export default App;
