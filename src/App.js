import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.css'
import Header from './components/Header';

function App() {
  return (
    <>
      <div className='app'>
      <Header />
        <Navbar />
        <Footer />
      </div>
    </>
  );
}

export default App;

