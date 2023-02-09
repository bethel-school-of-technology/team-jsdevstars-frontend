import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.css'
import Header from './components/Header';
import { UserProvider } from './contexts/UserProvider';
import { ForumProvider } from './contexts/ForumContext';

function App() {
  return (
    <>
      <div className='App'>
        <UserProvider>
        <ForumProvider>
          <Header />
          <Navbar />
          <Footer />
        </ForumProvider>
        </UserProvider>
      </div>
    </>
  );
}

export default App;

