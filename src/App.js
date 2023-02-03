import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.css'
import Header from './components/Header';
import { UserProvider } from './contexts/UserProvider';

function App() {
  return (
    <>
      <div className='App'>
        <UserProvider>
          <Header />
          <Navbar />
          <Footer />
        </UserProvider>
      </div>
    </>
  );
}

export default App;

