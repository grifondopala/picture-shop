import React from 'react';
import './App.css';
import { Header } from './components/header/header';
import { MainTitle } from './components/main-title/main-title'
import { Main } from './components/main/main'
import { Footer } from "./components/footer/footer";
import { Basket } from "./components/basket/basket";

function App() {
  return (
    <div className="App">
        <Header/>
        <MainTitle/>
        <Main/>
        <Basket/>
        <Footer/>
    </div>
  );
}

export default App;
