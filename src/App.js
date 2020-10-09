import React from 'react';
import './App.scss';
import Header from "./Header";
import Footer from "./Footer";
import Routes from './Routes/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
