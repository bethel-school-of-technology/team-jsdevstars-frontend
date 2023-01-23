import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.css'

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

