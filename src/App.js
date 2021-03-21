import React from 'react'
import './App.css';
import Header from './components/Header.js'
import CartTotal from './components/CartTotal.js';
import CartItems from './components/CartItems.js';

function App() {

  return (
    <div className="App-Header">
      <Header title="Amazon Cart" />
      <div className="App-Main">
        <CartItems />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
